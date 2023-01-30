import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 flex justify-between py-4 px-6 border-gray-200 border-b-2 font-semibold">
      <div className="flex">
        <Link to="/">Deep Style</Link>
      </div>
      <div className="flex justify-center h-full gap-4 px-2 rounded-md">
        <p>New Arrivals</p>
        <p>Shop</p>
        <p>Beauty</p>
        <p>Journal</p>
      </div>
      <div className="flex justify-between gap-4">
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/signup">
          <p>Sign up</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
