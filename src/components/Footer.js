import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-between px-10 pt-5 pb-7">
        <div>
          <p>Of the DripVerse</p>
          <p>Blog</p>
          <p>Library</p>
        </div>
        <div>
          <p>For the DripVerse</p>
          <p>Literpaper</p>
        </div>
        <div>
          <p>By the dripVerse</p>
          <p>Contact Us</p>
          <p>We are hiring</p>
        </div>
      </div>
      <div className="flex justify-center gap-2 pb-3 text-sm">
        <p>
          <BsTwitter />
        </p>
        <p>
          <BsInstagram />
        </p>
      </div>
    </div>
  );
};

export default Footer;
