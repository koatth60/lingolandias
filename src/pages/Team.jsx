/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { teachers } from "../Constants";
import { CardDefault } from "../components/CardDefault";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t, i18n } = useTranslation();
  const teachersTitle = t("teachersTitle.title");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);
  return (
    <div className="teachers">
      <Header />
      <section className="h-auto flex flex-col items-center lg:pt-28 pt-20 mb-16 md:mx-[30px] md:px-0 px-3">
        <div className="h-auto font-satoshi lg:max-w-[1245px] ">
          <div className=" text-center flex flex-col items-center ">
            <h2 className="xl:text-5xl lg:text-4xl text-3xl text-white font-bold mb-4">
              {t("teacherTitle")}{" "}
              <span className=" max-lg:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
                {t("teacherTitleSpan")}
              </span>
            </h2>
            <p className="text-xl text-white font-medium text-left w-full mb-4">
              {t("teachersP1")}
            </p>
            <p className="text-xl text-white font-medium text-left w-full mb-10">
              {t("teachersP2")}
            </p>
          </div>

          <div className="flex gap-4 lg:flex-nowrap flex-wrap justify-center">
            {teachers.map((teacher, index) => (
              <CardDefault
                key={index}
                {...teacher}
                teachersTitle={teachersTitle}
                langIndex={index}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
