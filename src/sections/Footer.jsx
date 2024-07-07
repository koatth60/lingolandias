import { logofooter } from "../assets/export";
import { useEffect } from "react";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);
  // bg-[#9c27b0]
  return (
    <footer className="bg-[#9c27b0] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="lg:flex lg:items-center">
              <img src={logofooter} className="h-36 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Lingolandias
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                {" "}
                {t("footAcademy")}
              </h2>
              <ul className="text-white  font-medium">
                <li className="mb-2">
                  <a href="https://flowbite.com/" className="hover:underline">
                    {t("footAbout")}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://flowbite.com/" className="hover:underline">
                    {t("footMethod")}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://flowbite.com/" className="hover:underline">
                    {t("footContact")}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Test
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                {t("footCourses")}
              </h2>
              <ul className="text-white ">
                <li className="mb-2">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    {" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                      {t("footEnglish")}
                    </a>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://flowbite.com/" className="hover:underline">
                    {t("footSpanish")}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://flowbite.com/" className="hover:underline">
                    {t("footPolish")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                {t("footSocials")}
              </h2>
              <ul className="text-white ">
                <li className="mb-2">
                  <a
                    href="https://www.facebook.com/lingolandias"
                    className="hover:underline"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline" target="_blank">
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline" target="_blank">
                    Twitter
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline" target="_blank">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Lingolandias™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/lingolandias"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/lingolandias/?hl=es-es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-[0.9rem] h-[0.9rem]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.056 1.86.248 2.292.415a4.608 4.608 0 0 1 1.675 1.09c.48.48.84 1.049 1.09 1.676.167.432.36 1.086.415 2.292.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.206-.248 1.86-.415 2.292a4.608 4.608 0 0 1-1.09 1.675 4.608 4.608 0 0 1-1.676 1.09c-.432.167-1.086.36-2.292.415-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.206-.056-1.86-.248-2.292-.415a4.608 4.608 0 0 1-1.675-1.09 4.608 4.608 0 0 1-1.09-1.676c-.167-.432-.36-1.086-.415-2.292C2.175 15.746 2.163 15.366 2.163 12s.012-3.584.07-4.849c.056-1.206.248-1.86.415-2.292a4.608 4.608 0 0 1 1.09-1.675 4.608 4.608 0 0 1 1.676-1.09c.432-.167 1.086-.36 2.292-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.014 7.052.072 5.745.13 4.838.313 4.112.57a6.52 6.52 0 0 0-2.362 1.482A6.52 6.52 0 0 0 .27 4.112C.013 4.838-.13 5.745-.072 7.052.014 8.332 0 8.735 0 12s.014 3.668.072 4.948c.058 1.307.241 2.214.498 2.94a6.52 6.52 0 0 0 1.482 2.362 6.52 6.52 0 0 0 2.362 1.482c.726.257 1.633.44 2.94.498 1.28.058 1.683.072 4.948.072s3.668-.014 4.948-.072c1.307-.058 2.214-.241 2.94-.498a6.52 6.52 0 0 0 2.362-1.482 6.52 6.52 0 0 0 1.482-2.362c.257-.726.44-1.633.498-2.94.058-1.28.072-1.683.072-4.948s-.014-3.668-.072-4.948c-.058-1.307-.241-2.214-.498-2.94a6.52 6.52 0 0 0-1.482-2.362 6.52 6.52 0 0 0-2.362-1.482c-.726-.257-1.633-.44-2.94-.498C15.668.014 15.265 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.837 3.837 0 1 1 0-7.674 3.837 3.837 0 0 1 0 7.674zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>

            <a
              href="https://www.instagram.com/lingolandias/?hl=es-es"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UC_your_channel_id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.007 3.007 0 0 0-2.119-2.121C19.617 3.642 12 3.642 12 3.642s-7.617 0-9.379.423A3.007 3.007 0 0 0 .502 6.186C.08 7.95.08 12 .08 12s0 4.05.422 5.814a3.007 3.007 0 0 0 2.119 2.121c1.762.423 9.379.423 9.379.423s7.617 0 9.379-.423a3.007 3.007 0 0 0 2.119-2.121C23.92 16.05 23.92 12 23.92 12s0-4.05-.422-5.814ZM9.545 15.454V8.545L15.818 12 9.545 15.454Z" />
              </svg>
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
