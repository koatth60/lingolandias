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
    <section className="w-full flex justify-center md:px-[30x]">
      <div className="h-auto font-satoshi lg:max-w-[1245px] relative xl:my-[50px] max-lg:mb-[260px] md:mb-[100px] md:mx-[30px] max-md:px-2">
        <div className="flex justify-center items-center max-lg:flex-col-reverse lg:p-16 md:px-6 md:py-8 gap-8 bg-white rounded-3xl shadow-xl">
          <div className="xl:text-5xl lg:text-4xl md:text-3xl">
            <h2 className=" font-bold text-[#6a1b9a] text-center xl:my-8 xl:pb-3 pb-6">
              {t("genInfo")}{" "}
              <span className=" font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
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
