import React from "react";

const Levels = ({ imgURL, title }) => {
  return (
    <a href="/courses" className=" flex flex-col center bg-white font-medium text-[#311b92] px-2 xl:w-[120px] lg:w-[70px] max-lg:w-[90px] rounded-xl  h-auto shadow-3xl mt-4 cursor-pointer">
      <img src={imgURL} alt="flag" className=" " />
      <h3 className=" mb-2 text-center xl:text-lg max-lg:text-sm ">{title}</h3>
    </a>
  );
};

export default Levels;
