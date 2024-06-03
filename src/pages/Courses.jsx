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
      <section className="h-auto flex justify-center items-center mt-36 mb-16">
        <div className="flex justify-center h-auto font-satoshi lg:max-w-[1245px] items-center max-lg:flex-col-reverse p-16  gap-8 bg-white rounded-3xl shadow-xl">
          <div className="flex flex-col items-center">
            <h2 className=" font-bold text-[#6a1b9a] xl:text-5xl lg:text-2xl max-lg:text-xl text-center  my-8 pb-3">
              {t("courseTitle")}{" "}
              <span className="xl:text-5xl lg:text-2xl max-lg:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
                Lingolandias.
              </span>
            </h2>
            <p className="text-[#9c27b0] font-medium text-xl text-center   mb-[50px] ">
              {t("courseSubtitle")}
            </p>

            <div>
              <div className="w-full flex justify-between items-center mb-14">
                <div>
                  <img
                    src="https://img.freepik.com/premium-vector/distance-learning-online-education-video-lesson-during-covid-quarantine-student-desk-teacher-screen-distant-study-e-learning-watching-webinar-tutorial-from-home-vector-flat-concept_176411-2310.jpg"
                    width={600}
                    alt=""
                  />
                </div>
                <div className="w-2/4 text-2xl py-2 px-4">
                  <h2 className="text-center text-[#9c27b0] font-bold">
                    {t("titleIndividual")}
                  </h2>
                  <p className="mt-4 text-[#9c27b0] text-lg">
                    {t("titleIndividualP")}
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-row-reverse justify-between items-center mb-8">
                <div>
                  <img
                    src="https://media.licdn.com/dms/image/D4D12AQEbmZ4fDnUokg/article-cover_image-shrink_720_1280/0/1695807995523?e=2147483647&v=beta&t=cs-JZrNTYSCwYh23U4SUSMnCPPu_1diZmcnYnhxaAmA"
                    width={600}
                    alt=""
                  />
                </div>
                <div className="w-2/4 text-2xl py-2 px-4">
                  <h2 className="text-center text-[#9c27b0] font-bold">
                    {t("titleCouple")}
                  </h2>
                  <p className="mt-4 text-[#9c27b0] text-lg">
                    {t("titleCoupleP")}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[#9c27b0] text-lg">{t("courseP1")}</p>
            <p className="mt-4 text-[#9c27b0] text-lg">{t("courseP2")}</p>
            <p className="mt-4 mb-8 text-[#9c27b0] text-lg">{t("courseP3")}</p>

            <div>
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden text-lg font-medium tracking-tighter text-white bg-[#9c27b0] rounded-lg group"
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
