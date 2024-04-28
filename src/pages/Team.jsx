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
  }, []);
  return (
    <div className="teachers">
      <Header />
      <section className="h-auto md:mx-[30px]  max-md:px-2  flex flex-col items-center  ">
        <div className="h-auto font-satoshi lg:max-w-[1245px] lg:my-[60px] max-lg:mb-[260px] max-md:mb-[360px]  max-md:px-2">
          <div className="mt-[80px] text-center ">
            <h2 className="xl:text-5xl lg:text-2xl max-lg:text-xl text-white font-bold mb-4">
              {t("teacherTitle")}{" "}
              <span className="xl:text-5xl lg:text-2xl max-lg:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
                {t("teacherTitleSpan")}
              </span>
            </h2>
            <p className="text-xl text-white font-medium text-left max-w-[1000px] mb-4">
              {t("teachersP1")}
            </p>
            <p className="text-xl text-white font-medium text-left max-w-[1000px] mb-10">
              {t("teachersP2")}
            </p>
          </div>

          <div className="flex gap-4">
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
