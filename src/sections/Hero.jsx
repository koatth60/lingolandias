import { levels } from "../Constants";
import { Link } from "react-router-dom";
import QuoteAndInfo from "../components/QuoteAndInfo";
import Levels from "../components/Levels";
import { heroGif } from "../assets/export";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const langs = t("language.title");

  return (
    <section
      id="home"
      className=" w-full pt-20 flex justify-center md:px-[30x]"
    >
      <div className="h-auto font-satoshi lg:w-[1245px] relative xl:mb-[350px] lg:mb-[300px] md:mb-[230px] md:mx-[30px] sm:px-2">
        <div className="lg:flex xl:pb-20 lg:pb-14 justify-center xl:mt-[90px] lg:mt-[50px] md:mt-[20px] lg:mb-0 md:mb-16 lg:gap-[40px]">
          <div className="lg:max-w-[600px] flex flex-col text-left justify-center xl:gap-11 lg:gap- lg:mb-0 md:mb-12">
            <div>
              <h1 className="xl:text-6xl text-white font-satoshi font-bold lg:text-5xl md:text-4xl lg:text-start md:text-center lg:mb-5 md:mb-4">
                {t("hero1")}
              </h1>
              <h2 className="xl:text-3xl lg:px-0 md:px-24 text-white font-satoshi font-bold lg:text-2xl md:text-2xl lg:text-start md:text-center md:mb-3">
                {t("hero2")}{" "}
                <span className="xl:text-3xl lg:text-2xl md:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
                  {t("hero2Span")}
                </span>
              </h2>
            </div>
            <h2 className="xl:text-xl lg:px-0 md:px-24 lg:mb-0 md:mb-8 text-white font-medium lg:text-md lg:text-start md:text-center ">
              {t("hero3")}
            </h2>
            <div className="flex lg:justify-start md:justify-center">
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden text-lg font-medium tracking-tighter text-white bg-[#9c27b0] rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#43a047] rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative"> {t("contact")}</span>
              </Link>
            </div>
          </div>
          <div className="max-lg:flex justify-center rounded-full">
            <img
              src={heroGif}
              alt="hero pic"
              className="lg:w-[1500px] border-2 lg:rounded-full "
            />
            <figcaption className="text-center text-white italic text-xl">
              {t("director")}
            </figcaption>
          </div>
        </div>

        <div className="flex flex-row-reverse max-md:items-center max-lg:flex-col-reverse h-auto w-full lx:justify-between lg:justify-around lg:max-w-[1230px] xl:py-12 lg:py-10 md:px-[60x]  absolute left-[0] xl:bottom-[-340px] lg:bottom-[-260px]  ">
          <QuoteAndInfo />
          <div className="mr-6">
            <h3 className="font-medium text-white xl:text-2xl lg:text-xl text-center">
              <span className="xl:text-3xl lg:text-2xl max-lg:text-2xl  bg-white text-[#3949ab]  xl:w-[220px] md:w-[150px]  max-md:w-[130px] max-md:text-center rounded-2xl px-3 pb-2 ">
                {t("start")}
              </span>
            </h3>
            <div className="flex justify-center text-ms gap-6 ">
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
