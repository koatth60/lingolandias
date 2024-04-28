import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import foto2 from "../assets/foto2.png";
import { InputDefault } from "../components/Inputs";
import { TextareaDefault } from "../components/Textarea";

const Contact = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  return (
    <div>
      <Header />
      <section className="h-auto flex flex-col justify-center teachers items-center pt-[80px]  md:px-[30px] max-md:px-2 pb-6">
      <div className=" h-auto font-satoshi lg:max-w-[1245px] items-center max-lg:flex-col-reverse gap-8 rounded-3xl">
        
        <div className=" flex max-lg:flex-wrap items-center justify-around">
          <img src={foto2} alt="lingolandias" className="max:xl:w-[250px]" />

          <div className="bg-white flex flex-col items-center p-4 rounded-3xl max-w-[360px] shadow-xl">
            <h3 className="text-center text-2xl text-[#6a1b9a] font-bold">
            {t("inputTitle")}
            </h3>
            <p className="w-3/4 text-center text-[#9c27b0] leading-none mb-2">
            {t("inputSub")}
            </p>
            <div className="w-full h-[1px] bg-slate-200 mb-6 "></div>
            <form
              action="submit"
              className="flex flex-col items-center gap-6 w-full"
            >
              <InputDefault label={t("input1")} type="text" required />
              <InputDefault label={t("input2")} type="number" required />
              <InputDefault label={t("input3")} type="email" required />
              <TextareaDefault label= {t("input4")}/>

              <div>
                <a
                  href="/contact"
                  className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden text-lg font-medium tracking-tighter text-white bg-[#9c27b0] rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#43a047] rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative">{t("input5")}</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center text-white flex flex-col items-center">
          <h2 className=" font-bold text-6xl max-xl:text-3xl mt-8">
          {t("contactTitle")}
          </h2>
          <h3 className="bg-[#43a047] text-4xl max-xl:text-3xl font-medium p-2 m-2 max-w-[800px] rounded-lg">
          {t("contactSubTitle")} 
          </h3>
          <p className="max-w-[900px] mt-4 ">
          {t("ContactPara")}
          </p>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
