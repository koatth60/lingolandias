import React from "react";
import { levels } from "../Constants";

import QuoteAndInfo from "../components/QuoteAndInfo";
import Levels from "../components/Levels";
import { heropic } from "../assets/export";

const Hero = () => {
  return (
    <section id="home" className="h-auto  font-satoshi  2xl:px-[330px] lg:px-[50px] md:px-[30px] relative lg:mb-[350px] max-lg:mb-[260px] max-md:mb-[360px] max-md:px-2 ">
      <div className="lg:flex justify-around lg:mt-[90px] max-lg:mt-[80px] max-md:mt-[60px] lg:gap-[80px]">
        <div className="flex flex-col text-left justify-center lg:gap-11 max-lg:gap-2 ">
          <div>
            <h1 className="xl:text-6xl text-white font-satoshi font-bold lg:text-2xl max-lg:text-2xl max-lg:text-center lg:mb-5">
            Witamy Cię prosto z Wysp Brytyjskich.
            </h1>
            <h2 className="xl:text-3xl text-white font-satoshi font-bold lg:text-2xl max-lg:text-2xl max-lg:text-center">
              Jesteś w miejscu gdzie rozpoczęła się nowa era nauczania języków
              obcych - będzie szybko, przyjemnie i{" "}
              <span className="xl:text-3xl lg:text-2xl max-lg:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
                skutecznie.
              </span>
            </h2>
          </div>
          <h2 className="xl:text-xl text-white lg:text-md max-lg:text-center">
            Z łatwością wyruszysz w podróż do opanowania języków: odkryj naszą
            zaufaną i sprawdzoną metodologię osiągania sukcesu w nauce języków.       
            <br />
            Rozgość się, zapnij pasy i ruszamy!
          </h2>
          <div>
            <a
              href="/contact"
              class="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden text-lg font-medium tracking-tighter text-white bg-[#9c27b0] rounded-lg group"
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#43a047] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span class="relative">Kontakt</span>
            </a>
          </div>



        </div>
        <div className="max-lg:flex justify-center">
          <img
            src={heropic}
            alt="hero pic"
            className="xl:w-[1100px] lg:w-[700px] md:w-[400px] lg:rounded-3xl "
          />
          <figcaption className="text-center text-white italic text-xl">
          Właścicielka Szkoły
          </figcaption>
        </div>
      </div>

      <div className="flex flex-row-reverse max-md:items-center max-lg:flex-col-reverse h-auto w-full justify-between  2xl:px-[330px] xl:py-12 lg:py-10 max-lg:py-6 md:px-[30px] absolute left-[0] xl:bottom-[-340px] lg:bottom-[-260px] max-md:gap-6">
        <QuoteAndInfo />
        <div>
          <h3 className="font-medium text-white xl:text-2xl lg:text-xl text-center">
            <span className="xl:text-3xl lg:text-2xl max-lg:text-2xl  bg-white text-[#3949ab]  xl:w-[220px] md:w-[150px]  max-md:w-[130px] max-md:text-center rounded-2xl px-3 pb-2 ">
              Zacznij od nauki:
            </span>
          </h3>
          <div className="  flex justify-center text-ms gap-6">
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

// bg-[#E7E3D8]
// bg-[#E3CCAE]
// Zacznij od nauki:
// bg-[#EABE6C]
// bg-[#FF9BD2]

// text-[#75377A] original title color
