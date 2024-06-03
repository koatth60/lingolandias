import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    
      <header
        className={`flex justify-center font-satoshi md:px-[30px] max-lg:py-1 max-md:px-2 w-full fixed top-0 z-50 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="flex justify-between lg:w-[1245px]">
          <div className="md:my-2 max-md:flex max-md:items-center ">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="xl:w-[240px] lg:w-[190px] lg:my-1 max-lg:w-[195px] cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center xl:gap-7 ">
            <nav className="max-lg:hidden lg:flex justify-around items-center xl:text-lg lg:text-md  text-white font-satoshi font-medium lg:w-[500px] p-3  ">
              <Link
                to="/"
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#43a047]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center "
              >
                {t("home")}
              </Link>
              <Link
                to="/courses"
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#43a047]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center "
              >
                {t("courses")}
              </Link>
              <Link
                to="/team"
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#43a047]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center "
              >
                {t("teachers")}
              </Link>
              <Link
                to="/test"
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#43a047]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center "
              >
                Test
              </Link>
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
            <div>
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden text-lg font-medium tracking-tighter text-white border rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#43a047] rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative"> {t("contact")}</span>
              </Link>
            </div>
          </div>

          {isOpen && (
            <div
              className="absolute top-[54px] left-0 max-lg:w-full max-lg:h-[40vh] bg-white flex items-center justify-center lg:hidden"
              style={{
                transition:
                  "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
                opacity: isOpen ? 1 : 0,
                transform: `translateY(${isOpen ? "0" : "-100%"})`,
              }}
            >
              <div className="text-center text-lg h-full flex flex-col justify-evenly text-[#23085A] font-oswald">
                <Link to="/" className="hover:border-b-2 border-blue-950">
                  Strona główna
                </Link>
                <Link
                  to="/courses"
                  className="hover:border-b-2 border-blue-950"
                >
                  Kursy
                </Link>
                <Link to="/team" className="hover:border-b-2 border-blue-950">
                  Nauczyciele
                </Link>
                <Link to="#home" className="hover:border-b-2 border-blue-950">
                  Test
                </Link>
                <Link
                  to="/contact"
                  className="bg-green-700 text-white py-2 px-7 text-lg  rounded-xl shadow-md hover:scale-110 transform transition-transform duration-300 ease-in-out cursor-pointer flex items-center "
                >
                  <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
                  Kontakt
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    
  );
};

export default Header;
