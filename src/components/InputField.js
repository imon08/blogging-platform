import React from "react";

const InputField = ({ value, fieldKey, handleChange, type, placeholder }) => {
  return (
    <div>
      <input
        className="border-gray-200 border-2 w-full p-1.5 rounded-md"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e)=>handleChange(e.target.value, fieldKey)}
      />
    </div>
  );
};

export default InputField;
