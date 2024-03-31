import React from "react";

const Levels = ({ imgURL, title }) => {
  return (
    <a className=" flex flex-col center bg-[#E7E3D8] font-oswald text-[#75377A] px-2 max-md:w-[340px] rounded-xl border-black h-auto shadow-3xl mt-4 cursor-pointer">
      <img src={imgURL} alt="flag" />
      <h3 className="font-bold mb-2 text-center">{title}</h3>
    </a>
  );
};

export default Levels;
