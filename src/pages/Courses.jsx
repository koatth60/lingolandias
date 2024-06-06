import { useEffect } from "react";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Courses = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);
  return (
    <div>
      <Header />
      <section className="h-auto flex justify-center items-center lg:mt- md:mt-28 mt-24 mb-16 md:px-[30x] px-3">
        <div className="flex justify-center h-auto font-satoshi lg:max-w-[1245px] items-center lg:p-16 md:px-6 md:py-8 gap-8 bg-white rounded-3xl shadow-xl">
          <div className="flex flex-col items-center md:px-0 px-2 md:py-0 py-4">
            <h2 className=" font-bold text-[#6a1b9a] xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center xl:my-8 xl:pb-3 md:pb-6 pb-4">
              {t("courseTitle")}{" "}
              <span className=" font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
                Lingolandias.
              </span>
            </h2>
            <p className="text-[#9c27b0] font-medium md:text-xl  text-lg md:text-center md:mb-[50px] mb-[30px] ">
              {t("courseSubtitle")}
            </p>

            <div>
              <div className="w-full md:flex md:flex-row-reverse md:justify-between  items-center mb-14">
                <div className="md:w-2/4 lg:text-2xl md:text-xl py-2 lg:px-4">
                  <h2 className="text-center text-[#9c27b0] text-lg font-bold">
                    {t("titleIndividual")}
                  </h2>
                  <p className="mt-4 text-[#9c27b0] md:text-lg">
                    {t("titleIndividualP")}
                  </p>
                </div>

                <div>
                  <img
                    className="lg:w-[600px] md:w-[300px]"
                    src="https://img.freepik.com/premium-vector/distance-learning-online-education-video-lesson-during-covid-quarantine-student-desk-teacher-screen-distant-study-e-learning-watching-webinar-tutorial-from-home-vector-flat-concept_176411-2310.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className="w-full md:flex  justify-between items-center mb-8">
                <div className="md:w-2/4 lg:text-2xl text-xl py-2 lg:px-4">
                  <h2 className="text-center text-[#9c27b0] font-bold">
                    {t("titleCouple")}
                  </h2>
                  <p className="mt-4 text-[#9c27b0] text-lg">
                    {t("titleCoupleP")}
                  </p>
                </div>

                <div>
                  <img
                    className="lg:w-[600px] md:w-[300px]"
                    src="https://dit.mx/wp-content/uploads/2020/04/Virtual-meeting-person.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-[#9c27b0] text-lg">{t("courseP1")}</p>
            <p className="mt-4 text-[#9c27b0] text-lg">{t("courseP2")}</p>
            <p className="mt-4 mb-8 text-[#9c27b0] text-lg">{t("courseP3")}</p>

            <div>
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden lg:text-lg font-medium tracking-tighter text-white bg-[#9c27b0] rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#43a047] rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative"> {t("courseButton")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
