import React, { useEffect, useState } from "react";
import axios from "../axiosClient";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("posts")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(data);

  return (
    <div className="min-h-screen p-10">
      {data?.map((item) => {
        return (
          <div key={item._id}>
            <BlogCard title={item.title} content={item.content} />
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
