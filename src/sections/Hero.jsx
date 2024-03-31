import React from "react";
import { levels } from "../Constants";

import QuoteAndInfo from "../components/QuoteAndInfo";
import Levels from "../components/Levels";
import { heropic } from "../assets/export";

const Hero = () => {
  return (
    <section className="h-screen flex-col overflow-hidden font-oswald bg-[#FFFFFF] px-[250px] lg:pb-[170px] max-md:p-2 relative ">
      <div className="flex mt-[90px]">
        <div className="flex flex-col text-left justify-center gap-6">
          <h1 className="text-4xl text-[#75377A] font-bold">
            Unlock Your Language Potential with our Metodology
          </h1>
          <h2 className="text-xl text-[#75377A]  ">
            Embark on a Journey to Master Languages with Ease: Discover Our
            Trusted and Proven Methodology for Achieving Success in Language
            Learning
          </h2>
        </div>
        <img src={heropic} alt="hero pic" width={800} />
      </div>

      <div className="flex max-md:flex-col max-md:items-center  h-auto w-full justify-evenly bg-[#E7E3D8] py-12 absolute left-0 ">
        <QuoteAndInfo />
        <div>
          <h3 className="font-bold text-[#75377A] text-2xl text-center">
            Start by Learning:
          </h3>
          <div className="flex max-lg:flex-col max-md:mt-4 justify-evenly text-ms gap-6 ">
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
