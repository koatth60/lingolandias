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
      <section className="w-full h-screen pt-40 flex justify-center md:px-[30x]">
        <div className="h-auto  flex gap-16 font-satoshi lg:max-w-[1245px] relative lg:my-[80px] max-lg:mb-[260px] max-md:mb-[360px] md:mx-[30px] max-md:px-2 shadow-sm">
         {/* <TestCard /> */}

         {testCards.map((card, index) => (
          <TestCard 
          key={index} 
          {...card} 
          testTitle={testTitle}
          textTest={textTest}
          buttonTest={buttonTest}
          langIndex = {index}
          />
         ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Test;
