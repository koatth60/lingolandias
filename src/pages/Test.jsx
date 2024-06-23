import Header from "../sections/Header";
import Footer from "../sections/Footer";
import TestCard from "../components/TestCard";
import { testCards } from "../Constants";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Test = () => {
  const { t, i18n } = useTranslation();
  const testTitle = t("titleTest.title");
  const textTest = t("textTest.text");
  const buttonTest = t("buttonTest.button");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <div className="teachers">
      <Header />
      <section className="w-full h-auto pt-16 flex justify-center md:px-[30px] px-3">
        <div className="h-auto font-satoshi lg:max-w-[1245px] relative lg:my-[80px] md:mt-12 mb-16 mt-8  ">
          <div className="flex flex-col md:flex-row justify-center items-center lg:gap-20 md:gap-4 text-lg gap-y-6">
            {testCards.map((card, index) => (
              <TestCard
                key={index}
                {...card}
                testTitle={testTitle}
                textTest={textTest}
                buttonTest={buttonTest}
                langIndex={index}
              />
            ))}
          </div>
          <div className="bg-white text-[#9c27b0] mt-10 p-6 rounded-xl shadow-lg ">
            <p className="text-lg font-medium text-left max-w-[1000px] mb-4 ">
              {t("teachersP1")}
            </p>
            <p className="text-lg font-medium text-left max-w-[1000px] ">
              {t("teachersP2")}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Test;
