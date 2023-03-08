import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import axios from "axios";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleChange = (textValue, key) => {
    if (key === "name") setName(textValue);
    else if (key === "email") setEmail(textValue);
    else if (key === "password") setPassword(textValue);
    else if (key === "image") setImage(textValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !image) {
      toast.error("Fill all required fields");
      return;
    }

    // https://omniblog.cyclic.app/signup
    axios
      .post("https://omniblog.cyclic.app/signup", {
        name: name,
        email,
        password,
        logo: image,
      })
      .then(() => {
        toast.success("Signup Successfull!!");
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 py-16 px-10 rounded-md">
        <div className="mb-10">
          <p className="font-semibold text-2xl mb-5 text-center">
            Create an account
          </p>
          <p>Start your 30-day free trial. No credit Card.</p>
        </div>

        <form className="flex flex-col item-center gap-3 mb-5">
          <InputField
            value={name}
            fieldKey={"name"}
            handleChange={handleChange}
            type="text"
            placeholder="Name"
          />
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
          <InputField
            value={image}
            fieldKey={"image"}
            handleChange={handleChange}
            type="text"
            placeholder="Enter image url"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="bg-black text-white p-2 rounded-lg mt-5"
          >
            Create Account
          </button>
        </form>

        <div className="flex justify-center gap-1">
          <p>Already have an account?</p>
          <Link to="/login">
            <p className="underline underline-offset-2">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
