import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { HorizontalCard } from "../components/HorizontalCard";
import { englishTeachers } from "../Constants";

// import teacher from "../assets/teacher.png";
// import teacher2 from "../assets/teacher2.png";
// import teacher3 from "../assets/teacher3.png";
// import teacher4 from "../assets/teacher4.png";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
const EnglishTeachers = () => {
  return (
    <div>
      <Header />
      <section className="flex flex-col teachers items-center h-auto font-satoshi 2xl:px-[330px] lg:px-[50px] md:px-[30px] relative py-[140px] max-lg:mb-[260px] max-md:mb-[360px] max-md:px-2">
        <h2 className="xl:text-5xl lg:text-2xl max-lg:text-xl text-white text-center font-bold mb-4 ">
          Oto nasi nauczyciele języka{" "}
          <span className="xl:text-5xl lg:text-2xl max-lg:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
            angielskiego
          </span>
        </h2>
        <p className="text-xl text-white font-medium text-left max-w-[1000px] mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          magni cumque delectus minima? Error autem architecto eveniet maxime ea
          est blanditiis ab eaque. Animi, est dicta placeat hic consectetur
          quas?
        </p>
        <p className="text-xl text-white font-medium text-left max-w-[1000px] mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          magni cumque delectus minima? Error autem architecto eveniet maxime ea
          est blanditiis ab eaque. Animi, est dicta placeat hic consectetur
          quas?
        </p>


        <Carousel
          className="rounded-xl max-w-[68rem] min-h-[26rem]"
          transition={{ duration: 1 }}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 bg-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
         {englishTeachers.map((teacher) => (
            <div key={teacher.name} className="w-full">
              <div className="w-full">
                <HorizontalCard {...teacher} />
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <Footer />
    </div>
  );
};

export default EnglishTeachers;

{
  /* <div className="flex gap-4 flex-wrap justify-center">
          <div className="bg-[#2ee68e]">
            <div className="relative">
              <div class="w-full h-full bg-black absolute z-10 opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center px-2">
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  eveniet sint sed odio quam totam dolores doloribus excepturi!
                  Repellendus quas nemo molestias voluptatum ea qui corporis eos
                  sit aspernatur consequatur?
                </p>
              </div>
              <img
                src={teacher}
                alt=""
                width={400}
                className="cursor-pointer"
              />
            </div>
            <p class="text-center font-bold text-[#4e342e] text-lg">
              Chirstian
            </p>
          </div>
          <div className="bg-[#2ee68e]">
            <div className="relative">
              <div class="w-full h-full bg-black absolute z-10 opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center px-2">
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  eveniet sint sed odio quam totam dolores doloribus excepturi!
                  Repellendus quas nemo molestias voluptatum ea qui corporis eos
                  sit aspernatur consequatur?
                </p>
              </div>
              <img
                src={teacher2}
                alt=""
                width={400}
                className="cursor-pointer"
              />
            </div>
            <p class="text-center font-bold text-[#4e342e] text-lg">Agati</p>
          </div>
          <div className="bg-[#2ee68e]">
            <div className="relative">
              <div class="w-full h-full bg-black absolute z-10 opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center px-2">
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  eveniet sint sed odio quam totam dolores doloribus excepturi!
                  Repellendus quas nemo molestias voluptatum ea qui corporis eos
                  sit aspernatur consequatur?
                </p>
              </div>
              <img
                src={teacher3}
                alt=""
                width={400}
                className="cursor-pointer"
              />
            </div>
            <p class="text-center font-bold text-[#4e342e] text-lg">Ramiro</p>
          </div>
          <div className="bg-[#2ee68e]">
            <div className="relative">
              <div class="w-full h-full bg-black absolute z-10 opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center px-2">
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  eveniet sint sed odio quam totam dolores doloribus excepturi!
                  Repellendus quas nemo molestias voluptatum ea qui corporis eos
                  sit aspernatur consequatur?
                </p>
              </div>
              <img
                src={teacher4}
                alt=""
                width={400}
                className="cursor-pointer"
              />
            </div>
            <p class="text-center font-bold text-[#4e342e] text-lg">Ramon</p>
          </div>
          <div className="bg-[#2ee68e]">
            <div className="relative">
              <div class="w-full h-full bg-black absolute z-10 opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center px-2">
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  eveniet sint sed odio quam totam dolores doloribus excepturi!
                  Repellendus quas nemo molestias voluptatum ea qui corporis eos
                  sit aspernatur consequatur?
                </p>
              </div>
              <img
                src={teacher}
                alt=""
                width={400}
                className="cursor-pointer"
              />
            </div>
            <p class="text-center font-bold text-[#4e342e] text-lg">
              Chirstian
            </p>
          </div>
          <div className="bg-[#2ee68e]">
            <div className="relative">
              <div class="w-full h-full bg-black absolute z-10 opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center px-2">
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  eveniet sint sed odio quam totam dolores doloribus excepturi!
                  Repellendus quas nemo molestias voluptatum ea qui corporis eos
                  sit aspernatur consequatur?
                </p>
              </div>
              <img
                src={teacher2}
                alt=""
                width={400}
                className="cursor-pointer"
              />
            </div>
            <p class="text-center font-bold text-[#4e342e] text-lg">Agati</p>
          </div>
        </div> */
}
