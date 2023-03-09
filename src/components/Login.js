import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import InputField from "./InputField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useUserContext();

  const handleChange = (textValue, key) => {
    if (key === "email") setEmail(textValue);
    else if (key === "password") setPassword(textValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Fill all required fields");
      return;
    }

    // https://omniblog.cyclic.app/signup
    axios
      .post("https://omniblog.cyclic.app/login", {
        email,
        password,
      })
      .then((res) => {
        toast.success("Login Successfull!!");
        console.log(res.data);

        setUser(res.data.data.user)

        localStorage.setItem("accessToken", res.data.data["access-token"]);
        localStorage.setItem("refreshToken", res.data.data["refresh-token"]);
        localStorage.setItem("userData", JSON.stringify(res.data.data["user"]));

        navigate("/blogs"); 
      })
      .catch((err) => {
        toast.error("Login Failed");
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 py-16 px-10 rounded-md">
        <div className="mb-10">
          <p className="font-semibold text-2xl mb-5 text-center">
            Log in to account
          </p>
          <p>Start your 30-day free trial. No credit Card.</p>
        </div>
        <form className="flex flex-col item-center gap-3 mb-5">
          <InputField
            value={email}
            fieldKey={"email"}
            handleChange={handleChange}
            type="email"
            placeholder="Email"
          />
          <InputField
            value={password}
            fieldKey={"password"}
            handleChange={handleChange}
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="bg-black text-white p-2 rounded-lg mt-5"
          >
            L O G I N
          </button>
        </form>
        <div className="flex justify-center gap-1">
          <p>Don't have an account?</p>
          <Link to="/signup">
            <p className="underline underline-offset-2">Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
