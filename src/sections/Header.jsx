// bg-[#42b174]
import { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex md:justify-around max-md:justify-between px-6 max-lg:py-1 max-md:px-2 w-full bg-black fixed top-0 left-0 z-10 border-b-[1.5px] border-black shadow-md ">
      <div className="md:my-2 max-md:flex max-md:items-center ">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="xl:w-[230px] lg:w-[190px] lg:my-1 max-lg:w-[195px] cursor-pointer"
          />
        </a>
      </div>
      <div className="flex justify-between items-center xl:gap-7 ">
        <nav className="max-lg:hidden lg:flex justify-around items-center xl:text-lg lg:text-md  text-white font-satoshi lg:w-[500px] p-3  ">
          <a href="/" className="hover:border-b-2 border-yellow-600">
            Home
          </a>
          <a href="/courses" className="hover:border-b-2 border-yellow-600">
            Courses
          </a>
          <a href="/team" className="hover:border-b-2 border-yellow-600">
            Team
          </a>
          <a href="#home" className="hover:border-b-2 border-yellow-600">
            Test
          </a>
          <a href="#home" className="hover:border-b-2 border-yellow-600">
            Cooperation
          </a>
        </nav>
        <div
          className="block lg:hidden text-4xl  text-[#23085A]"
          onClick={handleClick}
        >
          {isOpen ? (
            <div className="text-green-500">
              {" "}
              <ion-icon name="close-outline"></ion-icon>{" "}
            </div>
          ) : (
            <div className="text-green-500">
              {" "}
              <ion-icon name="menu-outline"></ion-icon>{" "}
            </div>
          )}
        </div>
        <a
          href="/contact"
          className="bg-orange-600 text-white font-satoshi max-md:py-2 max-md:px-3 xl:text-lg lg:text-md lg:py-2 lg:px-5 rounded-xl shadow-md hover:scale-110 transform transition-transform duration-300 ease-in-out cursor-pointer flex items-center max-lg:hidden"
        >
          <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
          Contact Us
        </a>
      </div>

      {isOpen && (
        <div
          className="absolute top-[56px] left-0 max-lg:w-full max-lg:h-[40vh] bg-white flex items-center justify-center lg:hidden"
          style={{
            transition: "all 0.3s ease-in-out",
            opacity: isOpen ? 1 : 0, 
            transform: `translateY(${isOpen ? "0" : "-100%"})`, 
          }}
        >
          <div className="text-center text-2xl h-full flex flex-col justify-evenly text-[#23085A] font-oswald">
            <a href="/" className="hover:border-b-2 border-blue-950">
              Home
            </a>
            <a href="/courses" className="hover:border-b-2 border-blue-950">
              Courses
            </a>
            <a href="/team" className="hover:border-b-2 border-blue-950">
              Team
            </a>
            <a href="#home" className="hover:border-b-2 border-blue-950">
              Test
            </a>
            <a href="#home" className="hover:border-b-2 border-blue-950">
              Cooperation
            </a>
            <a
              href="/contact"
              className="bg-red-600 text-white py-2 px-3 text-lg  rounded-xl shadow-md hover:scale-110 transform transition-transform duration-300 ease-in-out cursor-pointer flex items-center "
            >
              <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

//bg-[#38AD6D]
