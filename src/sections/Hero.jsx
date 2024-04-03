import React from "react";
import { levels } from "../Constants";

import QuoteAndInfo from "../components/QuoteAndInfo";
import Levels from "../components/Levels";
import { heropic } from "../assets/export";

const Hero = () => {
  return (
    <section className="h-auto flex-col font-satoshi bg-[#FFFFFF] 2xl:px-[330px] lg:px-[50px] md:px-[30px] relative lg:mb-[350px] max-lg:mb-[260px] max-md:mb-[360px] max-md:px-2">
      <div className="lg:flex justify-around lg:mt-[90px] max-lg:mt-[80px] max-md:mt-[60px]">
        <div className="flex flex-col text-left justify-center lg:gap-6 max-lg:gap-2 ">
          <div >
            <h1 className="xl:text-4xl text-[#75377A] font-satoshi font-bold lg:text-2xl max-lg:text-2xl max-lg:text-center">
              Unlock Your Language Potential with our <span className="xl:text-4xl lg:text-2xl max-lg:text-2xl font-bold bg-orange-500 text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
              Metodology.
            </span>
            </h1>
            
          </div>
          <h2 className="xl:text-xl text-[#75377A] lg:text-md max-lg:text-center">
            Embark on a Journey to Master Languages with Ease: Discover Our
            Trusted and Proven Methodology for Achieving Success in Language
            Learning
          </h2>
        </div>
        <div className="max-lg:flex justify-center">
          <img
            src={heropic}
            alt="hero pic"
            className="xl:w-[1250px] lg:w-[700px] md:w-[400px] "
          />
        </div>
      </div>

      <div className="flex max-md:items-center max-lg:flex-col-reverse h-auto w-full justify-evenly bg-[#E7E3D8] 2xl:px-[330px] xl:py-12 lg:py-10 max-lg:py-6 md:px-[30px] absolute left-[0] xl:bottom-[-340px] lg:bottom-[-260px] max-md:gap-6">
        <QuoteAndInfo />
        <div>
          <h3 className="font-semibold text-[#75377A] xl:text-2xl lg:text-xl text-center">
            Start by Learning:
          </h3>
          <div className="flex justify-center text-ms gap-6 ">
            {levels.map((level) => (
              <Levels key={level.title} {...level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
