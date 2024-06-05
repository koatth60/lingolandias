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
      <section className="w-full h-auto pt-16 flex justify-center md:px-[30x]">
        <div className="h-auto font-satoshi lg:max-w-[1245px] relative lg:my-[80px] max-lg:mb-[260px] max-md:mb-[360px] md:mx-[30px] max-md:px-2 ">
          <div className="flex justify-center gap-20">
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
            <p className="text-xl font-medium text-left max-w-[1000px] mb-4 ">
              {t("teachersP1")}
            </p>
            <p className="text-xl font-medium text-left max-w-[1000px] ">
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
