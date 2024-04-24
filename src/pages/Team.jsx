import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { teachers } from "../Constants";
import { CardDefault } from "../components/CardDefault";
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div>
      <Header />
      <section className="h-screen font-satoshi teachers 2xl:px-[270px] lg:p-[50px] md:px-[30px]  max-md:px-2  flex flex-col items-center  ">
        <div className="mt-[80px] text-center ">
          <h2 className="xl:text-5xl lg:text-2xl max-lg:text-xl text-white font-bold mb-4">
            Poznajmy{" "}
            <span className="xl:text-5xl lg:text-2xl max-lg:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
              się
            </span>
          </h2>
          <p className="text-xl text-white font-medium text-left max-w-[1000px] mb-4">
            W naszej szkole mamy przyjemność pracować z wyjątkowymi
            nauczycielami, którzy są prawdziwymi ekspertami w swojej dziedzinie.
            To nie tylko profesjonaliści, ale także pasjonaci, którzy kochają
            to, co robią i pragną przekazywać swoją wiedzę i umiejętności naszym
            uczniom.
          </p>
          <p className="text-xl text-white font-medium text-left max-w-[1000px] mb-10">
            Nasi nauczyciele są nie tylko wykwalifikowani i kompetentni, ale
            również pełni entuzjazmu i energii. Ich podejście do nauczania jest
            innowacyjne i interaktywne, co sprawia, że zajęcia są nie tylko
            efektywne, ale również inspirujące. Wiedzą, jak zainteresować
            uczniów i zachęcić ich do aktywnego udziału w procesie nauki.
          </p>
        
        </div>
 
        <div className="flex gap-4">
          {teachers.map((teacher) => (
            <CardDefault key={teacher.title} {...teacher} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
