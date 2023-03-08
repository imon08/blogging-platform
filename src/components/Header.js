import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Header = () => {
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const localUser = localStorage.getItem("userData");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  return (
    <div className="w-full h-16 flex justify-between py-4 px-6 border-gray-200 border-b-2 font-semibold">
      <div className="flex">
        <Link to="/">Omni Blog</Link>
      </div>
      <div className="flex justify-center h-full gap-4 px-2 rounded-md">
        <p>New Arrivals</p>
        <p>Shop</p>
        <p>Beauty</p>
        <p>Journal</p>
      </div>
      <div className="flex justify-between gap-4">
        {user ? (
          <div className="flex items-center gap-2 rounded-full">
            <img className="h-10 w-10" src={user.logo} alt="profile picture" />
            <button onClick={logout}>
              <p>Logout</p>
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/login">
              <p>Login</p>
            </Link>
            <Link to="/signup">
              <p>Sign up</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
