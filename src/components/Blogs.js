import React, { useEffect } from "react";
import axios from "../axiosClient";

const Blogs = () => {
  useEffect(() => {
    axios
      .get("posts")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div className="min-h-screen p-10">Blogs</div>;
};

export default Blogs;
