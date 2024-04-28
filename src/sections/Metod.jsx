import React, { useEffect } from "react";

import { num1, num2, num3, num4 } from "../assets/export";
import { useTranslation } from "react-i18next";

const Metod = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  return (
    <div>
      <section className=" w-full flex justify-center md:px-[30x]">
        <div className="flex items-center gap-4 h-auto font-satoshi lg:max-w-[1245px] relative lg:my-[80px] max-lg:mb-[260px] max-md:mb-[360px] md:mx-[30px] max-md:px-2">
          <div className="max-w-[400px] flex flex-col justify-center p-4 bg-gradient-radial shadow-2xl rounded-3xl ">
            <h2 className="font-bold text-white xl:text-3xl lg:text-2xl max-lg:text-xl mb-4 text-center">
              {t("methodH")}
            </h2>
            <p className="text-white font-medium">{t("methodP")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl ">
            <div className="bg-white py-6 px-8 border-solid h-[300px] text-center text-[#6a1b9a] flex flex-col items-center">
              <img src={num1} alt="" />
              <h3 className="text-xl text-center font-bold mb-4">
                {t("methodQ1")}
              </h3>
              <p className="text-start leading-5 font-medium">
                {t("methodQ1P")}
              </p>
            </div>
            <div className="bg-[#EABE6C] py-6 px-8  border-solid h-[300px] text-center text-white flex flex-col items-center">
              <img src={num2} alt="" className="" />
              <h3 className="text-xl text-center font-bold mb-4">
                {t("methodQ2")}
              </h3>
              <p className="text-start leading-5 font-medium">
                {t("methodQ2P")}
              </p>
            </div>
            <div className="bg-[#81c784] py-6 px-8 border-solid h-[300px] text-center text-[#6a1b9a] flex flex-col items-center">
              <img src={num3} alt="" className="" />
              <h3 className="text-xl text-center font-bold mb-4">
                {t("methodQ3")}
              </h3>
              <p className="text-start leading-5 font-medium">
                {t("methodQ3P")}
              </p>
            </div>
            <div className="bg-[#ab47bc] py-6 px-8 border-solid h-[300px] text-center text-white flex flex-col items-center ">
              <img src={num4} alt="" className="" />
              <h3 className="text-xl text-center font-bold mb-4">
                {t("methodQ4")}
              </h3>
              <p className="text-start leading-5 font-medium">
                {t("methodQ4P")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Metod;

// bg-[#40A2D8]
// bg-[#9BCF53] nice grenish
