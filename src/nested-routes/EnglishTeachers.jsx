// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { HorizontalCard } from "../components/HorizontalCard";
import { englishTeachers } from "../Constants";
import { useTranslation } from "react-i18next";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
const EnglishTeachers = () => {
  const { t, i18n } = useTranslation();
  const englishTeachersCard = t("EngTeachersCard");

  const [limit, setLimit] = useState(2);

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

      <section className="flex flex-col teachers items-center h-auto font-satoshi md:px-[30px] relative md:pt-[120px] pt-[100px] pb-14 px-3 ">
        <div className="lg:max-w-[1245px] flex flex-col items-center bg-white rounded-3xl md:py-[60px] py-5 md:px-[30px] px-3 shadow-xl">
          <h2 className="xl:text-5xl md:text-4xl text-3xl text-[#6a1b9a] text-center font-bold mb-4 ">
            {t("EngTeachersTitle")}{" "}
            <span className="font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px]  max-md:text-center rounded-2xl px-2 pb-1 ">
              {t("EngTeachersTitleSpan")}
            </span>
          </h2>
          <p className="md:text-xl text-lg text-[#9c27b0] font-medium text-left max-w-[1000px] mb-6">
            {t("EngTeachersP1")}
          </p>
          <p className="md:text-xl text-lg text-[#9c27b0] font-medium text-left max-w-[1000px] mb-6">
            {t("EngTeachersP2")}
          </p>
          <Carousel
            className="rounded-xl xl:max-w-[68rem]  xl:min-h-[26rem] "
            transition={{ duration: 1 }}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="black"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4 bg-gradient-radial  rounded-full"
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
                className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-gradient-radial  rounded-full"
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
              <div key={index} className="w-full">
                <div className="w-full lg:block hidden ">
                  <HorizontalCard
                    name={teacher.name}
                    maxWidth={"49.9rem"}
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
          {englishTeachers.slice(0, limit).map((teacher, index) => (
            <div key={index} className="w-full">
              <div className="w-full lg:hidden block ">
                <HorizontalCard
                  name={teacher.name}
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

<button
  onClick={() => setLimit(limit + 2)}
  className="flex flex-row-reverse items-center justify-center text-[#6a1b9a] text-xl font-bold py-2 px-4 rounded-xl mt-4 gap-1"
  style={{
    display: limit >= englishTeachers.length ? "none" : "inline-flex",
  }}
>
  <svg
    className="rtl:rotate-180 w-3.5 h-3.5 mr-2" // Adjust margin here for spacing
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
  <span>Load more</span>
</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EnglishTeachers;
