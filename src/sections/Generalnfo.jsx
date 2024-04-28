import React, { useEffect } from "react";
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
  }, []);

  return (
    <section className=" w-full flex justify-center md:px-[30x]">
      <div className="h-auto font-satoshi lg:max-w-[1245px] relative lg:my-[80px] max-lg:mb-[260px] max-md:mb-[360px] md:mx-[30px] max-md:px-2">
        <div className="flex justify-center items-center max-lg:flex-col-reverse p-16  gap-8 bg-[#FFEDD8] rounded-3xl shadow-xl">
          <div className="">
            <h2 className=" font-bold text-[#6a1b9a] xl:text-5xl lg:text-2xl max-lg:text-xl text-center  my-8 pb-3">
              {t("genInfo")}{" "}
              <span className="xl:text-5xl lg:text-2xl max-lg:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
                {t("genInfoSpan")}
              </span>
              ?.
            </h2>
            <p className="text-[#9c27b0] font-medium text-lg ">
              {t("genInfoPara1")}
            </p>
            <p className="mt-4 text-[#9c27b0] font-medium  text-lg">
              {t("genInfoPara2")}
            </p>
            <p className="mt-4 text-[#9c27b0] font-medium text-lg">
              {t("genInfoPara3")}
            </p>
            <p className="mt-4 text-[#9c27b0] font-medium  text-lg">
              {t("genInfoPara4")}
            </p>
            <p className="mt-4 text-[#9c27b0] font-medium  text-lg">
              {t("genInfoPara5")}
            </p>
            {/* <p className="mt-4 text-[#9c27b0] text-lg">
            Jeśli marzysz o odkrywaniu nowych kultur, nawiązywaniu
            międzynarodowych znajomości i rozwijaniu umiejętności
            komunikacyjnych, zapraszamy do naszej szkoły. Tutaj nauka języków
            staje się fascynującą podróżą, pełną przygód i możliwości. Przekonaj
            się sam, jak nauka języków może być nie tylko efektywna, ale również
            satysfakcjonująca i pełna radości. Dołącz do naszej społeczności i
            odkrywaj świat języków razem z nami!
          </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generalnfo;
