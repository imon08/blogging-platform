import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <div>
      <input
        className="border-gray-200 border-2 w-full p-1.5 rounded-md"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
