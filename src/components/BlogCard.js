import React from "react";

const BlogCard = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
};

export default BlogCard;
