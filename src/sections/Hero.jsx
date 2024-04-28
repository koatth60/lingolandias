import React from "react";
import { levels } from "../Constants";
import { Link } from "react-router-dom";
import QuoteAndInfo from "../components/QuoteAndInfo";
import Levels from "../components/Levels";
import { heropic } from "../assets/export";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const langs = t("language.title");

  return (
    <section id="home" className=" w-full flex justify-center md:px-[30x]">
      <div className="h-auto font-satoshi lg:w-[1245px] relative lg:mb-[350px] max-lg:mb-[260px] max-md:mb-[360px] md:mx-[30px] max-md:px-2">
        <div className="lg:flex justify-around lg:mt-[90px] max-lg:mt-[80px] max-md:mt-[60px] lg:gap-[80px]">
          <div className="max-w-[680px] flex flex-col text-left justify-center lg:gap-11 max-lg:gap-2 ">
            <div>
              <h1 className="xl:text-6xl text-white font-satoshi font-bold lg:text-2xl max-lg:text-2xl max-lg:text-center lg:mb-5">
                {t("hero1")}
              </h1>
              <h2 className="xl:text-3xl text-white font-satoshi font-bold lg:text-2xl max-lg:text-2xl max-lg:text-center">
                {t("hero2")}{" "}
                <span className="xl:text-3xl lg:text-2xl max-lg:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
                  {t("hero2Span")}
                </span>
              </h2>
            </div>
            <h2 className="xl:text-xl text-white font-medium lg:text-md max-lg:text-center">
              {t("hero3")}
            </h2>
            <div>
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden text-lg font-medium tracking-tighter text-white bg-[#9c27b0] rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#43a047] rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative"> {t("contact")}</span>
              </Link>
            </div>
          </div>
          <div className="max-lg:flex justify-center">
            <img
              src={heropic}
              alt="hero pic"
              className="xl:w-[1100px] lg:w-[700px] md:w-[400px] lg:rounded-3xl "
            />
            <figcaption className="text-center text-white italic text-xl">
              {t("director")}
            </figcaption>
          </div>
        </div>

        <div className="flex flex-row-reverse max-md:items-center max-lg:flex-col-reverse h-auto w-full justify-between lg:max-w-[1230px] xl:py-12 lg:py-10 max-lg:py-6 md:px-[60x] absolute left-[0] xl:bottom-[-340px] lg:bottom-[-260px] max-md:gap-6">
          <QuoteAndInfo />
          <div>
            <h3 className="font-medium text-white xl:text-2xl lg:text-xl text-center">
              <span className="xl:text-3xl lg:text-2xl max-lg:text-2xl  bg-white text-[#3949ab]  xl:w-[220px] md:w-[150px]  max-md:w-[130px] max-md:text-center rounded-2xl px-3 pb-2 ">
                {t("start")}
              </span>
            </h3>
            <div className="flex justify-center text-ms gap-6">
              {levels.map((level, index) => (
                <Levels
                  key={index}
                  imgURL={level.imgURL}
                  langs={langs}
                  langIndex={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// bg-[#E7E3D8]
// bg-[#E3CCAE]
// Zacznij od nauki:
// bg-[#EABE6C]
// bg-[#FF9BD2]

// text-[#75377A] original title color
