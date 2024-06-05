/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Levels = ({ imgURL, langs, langIndex }) => {

  const selectedLanguage = langs[langIndex];
  
  return (
    <Link
      to="/courses"
      className="flex flex-col center bg-white font-medium text-[#311b92] px-2 xl:w-[120px] lg:w-[100px] w-[90px] rounded-xl  h-auto shadow-3xl mt-4 cursor-pointer"
    >

     {/* WORKING ON TAILWIND */}
      <img src={imgURL} alt="flag" className="" />
      <h3 className="mb-2 text-center xl:text-lg lg:text-md text-[13px] ">
        {selectedLanguage}
      </h3>
    </Link>
  );
};

export default Levels;
