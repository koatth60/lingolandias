// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { HorizontalCard } from "../components/HorizontalCard";
import { englishTeachers } from "../Constants";
import { useTranslation } from "react-i18next";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
const EnglishTeachers = () => {
  const { t, i18n } = useTranslation();
  const englishTeachersCard = t("EngTeachersCard");

  // eslint-disable-next-line no-undef
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);
  return (
    <div>
      <Header />
      <section className="flex flex-col teachers items-center h-auto font-satoshi md:px-[30px] relative pt-[140px] pb-14 ">
        <div className="lg:max-w-[1245px] flex flex-col items-center bg-white rounded-3xl py-[60px] md:px-[30px] shadow-xl ">
          <h2 className="xl:text-5xl lg:text-2xl max-lg:text-xl text-[#6a1b9a] text-center font-bold mb-4 ">
            {t("EngTeachersTitle")}{" "}
            <span className="xl:text-5xl lg:text-2xl max-lg:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px]  rounded-2xl px-2 pb-1 ">
              {t("EngTeachersTitleSpan")}
            </span>
          </h2>
          <p className="text-xl text-[#9c27b0] font-medium text-left max-w-[1000px] mb-6">
            {t("EngTeachersP1")}
          </p>
          <p className="text-xl text-[#9c27b0] font-medium text-left max-w-[1000px] mb-6">
            {t("EngTeachersP2")}
          </p>

          <Carousel
            className="rounded-xl max-w-[68rem] min-h-[26rem] overflow-hidden"
            transition={{ duration: 1 }}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="black"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="black"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            {englishTeachers.map((teacher, index) => (
              <div key={teacher.name} className="w-full">
                <div className="w-full">
                  <HorizontalCard
                    {...teacher}
                    description={
                      englishTeachersCard[index].description[
                        i18n.language === "es"
                          ? 1
                          : i18n.language === "pl"
                          ? 2
                          : 0
                      ]
                    }
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EnglishTeachers;
