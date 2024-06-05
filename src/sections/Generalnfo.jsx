import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Zaczęło
// estaba en 270px
const Generalnfo = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <section className="w-full flex justify-center md:px-[30x] px-3">
      <div className="h-auto font-satoshi lg:max-w-[1245px] relative xl:my-[50px] mb-[70px] md:mx-[30px]">
        <div className="flex justify-center items-center max-lg:flex-col-reverse lg:p-16 md:px-6 md:py-8 gap-8 bg-white rounded-3xl shadow-xl">
          <div className=" md:px-0 px-2 md:py-0 py-4">
            <h2 className=" font-bold text-[#6a1b9a] xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center xl:my-8 xl:pb-3 pb-6">
              {t("genInfo")}{" "}
              <span className=" font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
                {t("genInfoSpan")}
              </span>
              ?.
            </h2>
            <p className="text-[#9c27b0] font-medium md:text-lg ">
              {t("genInfoPara1")}
            </p>
            <p className="mt-4 text-[#9c27b0] font-medium  md:text-lg">
              {t("genInfoPara2")}
            </p>
            <p className="mt-4 text-[#9c27b0] font-medium md:text-lg">
              {t("genInfoPara3")}
            </p>
            <p className="mt-4 text-[#9c27b0] font-medium  md:text-lg">
              {t("genInfoPara4")}
            </p>
            <p className="mt-4 text-[#9c27b0] font-medium  md:text-lg">
              {t("genInfoPara5")}
            </p>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generalnfo;
