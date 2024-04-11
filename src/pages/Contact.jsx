import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import foto2 from "../assets/foto2.png";
import { InputDefault } from "../components/Inputs";
import { TextareaDefault } from "../components/Textarea";

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="h-auto teachers font-satoshi items-center 2xl:px-[330px] pt-[80px] lg:px-[50px] md:px-[30px] max-md:px-2 pb-6">
        <div className=" flex max-lg:flex-wrap items-center justify-around">
          <img src={foto2} alt="lingolandias" className="max:xl:w-[250px]" />

          <div className="bg-white flex flex-col items-center p-4 rounded-3xl max-w-[360px] shadow-xl">
            <h3 className="text-center text-2xl text-[#6a1b9a] font-bold">
              Join now!
            </h3>
            <p className="w-3/4 text-center text-[#9c27b0] leading-none mb-2">
              Leave your information and you'll get a special promotion!
            </p>
            <div className="w-full h-[1px] bg-slate-200 mb-6 "></div>
            <form
              action="submit"
              className="flex flex-col items-center gap-6 w-full"
            >
              <InputDefault label="Name" type="text" required />
              <InputDefault label="Number" type="number" required />
              <InputDefault label="Email" type="email" required />
              <TextareaDefault />

              <div>
                <a
                  href="/contact"
                  class="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden text-lg font-medium tracking-tighter text-white bg-[#9c27b0] rounded-lg group"
                >
                  <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#43a047] rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span class="relative">Wysłać</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center text-white flex flex-col items-center">
          <h2 className=" font-bold text-6xl max-xl:text-3xl mt-8">
            Master a new language from anywhere in the world, at your own pace!.
          </h2>
          <h3 className="bg-[#43a047] text-4xl max-xl:text-3xl font-medium p-2 m-2 max-w-[800px] rounded-lg">
            Gain success, while enjoying the journey!
          </h3>
          <p className="max-w-[900px] mt-4 ">
            Unlock the world of language learning on your terms, wherever you
            may be. With the freedom to set your own pace, you can immerse
            yourself in a new language adventure, guided by your curiosity and
            determination. Whether you're studying on the go, from the comfort
            of your home, or amidst the hustle and bustle of daily life, the
            journey to mastering a new language is yours to navigate. Embrace
            the flexibility, embrace the challenge, and embrace the joy of
            discovery as you chart your course towards fluency and beyond
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
