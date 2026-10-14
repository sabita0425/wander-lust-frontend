import React from "react";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ text, link, more }) => {
  const navigate = useNavigate();

  const changePage = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <button
      onClick={changePage}
      className={`bg-blue-700 px-10 py-2 text-white text-lg rounded hover:cursor-pointer
       hover:bg-blue-600 ${more}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
