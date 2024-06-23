/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const TestCard = ({langIndex, testTitle, textTest, buttonTest, poster, link}) => {
  
const titleTestCard = testTitle[langIndex];
const textTestCard = textTest[langIndex];
const buttonTestCard = buttonTest[langIndex];

  const {  i18n } = useTranslation();
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);


  return (
    <div className="lg:max-w-md w-full bg-white border border-gray-200 rounded-lg shadow-lg ">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={poster}
          alt="language image"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#9c27b0]">
            {titleTestCard}
          </h5>
        </a>
        <p className="mb-3 font-normal text-[#9c27b0] ">
          {textTestCard}
        </p>
        <a
          href={link}
          className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-[#43a047] rounded-lg hover:bg-[#9c27b0] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {buttonTestCard}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
        </a>
      </div>
    </div>
  );
};

export default TestCard;
