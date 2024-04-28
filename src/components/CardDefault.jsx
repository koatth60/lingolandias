import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


export const CardDefault =({ quote, teachersTitle, langIndex, crew, link }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, []);


  const cardTitle = teachersTitle[langIndex]
  return (
    <Card className="mt-6 w-[340px]">
      <CardHeader color="blue-gray" className="relative h-[206px]">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-[#6a1b9a] font-satoshi font-bold"
        >
          {cardTitle}
        </Typography>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-2 text-[#9c27b0] font-satoshi  "
        >
          {t("crew")}: {crew}
        </Typography>
        <Typography className="text-[#9c27b0]">{quote}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-center">
        <Link to={link}>
          <div>
            <span className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg font-medium tracking-tighter text-white bg-[#43a047]  rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#9c27b0] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">{t("teachersBtn")}</span>
            </span>
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
}
//   Załoga: {crew}
// odwiedzać
