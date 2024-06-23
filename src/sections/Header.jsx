import { useState, useEffect } from "react";
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
      className={`flex justify-center font-satoshi md:px-[30px] md:py-0 py-2 px-3 w-full fixed top-0 z-50 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="flex justify-between lg:w-[1245px] w-full">
        <div className="md:my-2 max-md:flex max-md:items-center ">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="xl:w-[240px] lg:w-[221px] md:w-[230px] w-[190px] lg:my-1  cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex justify-between items-center xl:gap-7 ">
          <nav className=" lg:flex justify-around items-center hidden xl:text-lg lg:text-md  text-white font-satoshi font-medium lg:w-[500px] p-3  ">
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
       
          <div>
            <Link
              to="/contact"
              className="relative lg:inline-flex hidden items-center justify-center xl:px-8 py-2 md:px-6 overflow-hidden text-lg font-medium tracking-tighter text-white border rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#43a047] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative"> {t("contact")}</span>
            </Link>
          </div>
        </div>

        <div
            className="lg:hidden md:text-5xl text-3xl flex items-center justify-center text-[#23085A]"
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

        {isOpen && (
          <div
            className="absolute md:top-[69px] top-[60px] left-0 w-full h-[40vh] bg-[#81c784]  flex items-center justify-center lg:hidden"
            style={{
              transition:
                "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
              opacity: isOpen ? 1 : 0,
              transform: `translateY(${isOpen ? "0" : "-100%"})`,
            }}
          >
            <div className="text-center md:text-xl text-lg h-full flex flex-col justify-evenly text-white font-satoshi">
              <Link to="/" className="hover:border-b-2 border-blue-950">
              {t("home")}

              </Link>
              <Link to="/courses" className="hover:border-b-2 border-blue-950">
              {t("courses")}

              </Link>
              <Link to="/team" className="hover:border-b-2 border-blue-950">
              {t("teachers")}

              </Link>
              <Link to="/test" className="hover:border-b-2 border-blue-950">
                Test
              </Link>
              <Link
                to="/contact"
                className="bg-[#9c27b0] text-white py-3 px-7 rounded-xl shadow-md hover:scale-110 transform transition-transform duration-300 ease-in-out cursor-pointer flex items-center "
              >
                <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
                {t("contact")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
