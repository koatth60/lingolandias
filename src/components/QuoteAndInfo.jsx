import { facebook, instagram, twitter, youtube } from "../assets/export";
import { useTranslation } from "react-i18next";

const QuoteAndInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="font-satoshi h-auto max-w-[630px] max-lg:flex max-md:flex-col max-md:gap-6 border-l-[1px] border-white">
      <div className="flex flex-col items-end">
        <p className="text-white font-medium max-lg:text-center flex gap-x-1 xl:text-3xl lg:text-xl text-end ">
        {t("moto")}

        </p>
        <p className="text-white text-end max-lg:text-center flex gap-x-1 xl:text-3xl lg:text-xl mb-3">
        {t("quote")}

        </p>
        <h2 className="xl:text-3xl lg:text-xl text-white text-end italic font-medium  ">
        {t("autor")}

        </h2>
      </div>

      <div className="lg:flex lg:gap-6 xl:mt-6 lg:mt-5 justify-end items-center">
        <p className="font-medium text-white  xl:text-2xl lg:text-xl max-md:text-center">
        {t("follow")}

        </p>
        <div className="flex justify-center gap-4">
          <div className="flex gap-3 justify-center  items-center hover:scale-110 transform transition-transform duration-300 ease-in-out">
            <a
              href="https://www.facebook.com/lingolandias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook logo" width={46} />
            </a>
          </div>
          <div className="flex gap-3 justify-center items-center hover:scale-110 transform transition-transform duration-300 ease-in-out">
            <a
              href="https://www.instagram.com/lingolandias/?hl=es-es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram logo" width={42} />
            </a>
          </div>
          <div className="flex gap-3 justify-center items-center hover:scale-110 transform transition-transform duration-300 ease-in-out">
            <a
              href="https://www.instagram.com/lingolandias/?hl=es-es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter logo" width={48} />
            </a>
          </div>
          <div className="flex gap-3 justify-center items-center hover:scale-110 transform transition-transform duration-300 ease-in-out">
            <a
              href="https://www.instagram.com/lingolandias/?hl=es-es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="youtube logo" width={52} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteAndInfo;
