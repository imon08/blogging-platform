import React from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";

const Login = () => {
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
          <InputField type="email" placeholder="Email" />
          <InputField type="password" placeholder="Password" />
          <button className="bg-black text-white p-2 rounded-lg mt-5">
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
