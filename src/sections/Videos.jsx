/* eslint-disable react/no-unescaped-entities */
import Video from "../components/Video";
import { Link } from "react-router-dom";
const Videos = () => {
  return (
    <section className=" w-full flex justify-center md:px-0 px-3">
      <div className=" h-auto font-satoshi lg:max-w-[1245px] relative flex justify-center items-center  lg:p-16 md:px-6 md:py-8 gap-8 bg-white rounded-3xl shadow-xl xl:my-[50px] max-lg:mb-[260px] max-md:mb-[360px] md:mx-[30px] ">
        <div className="flex flex-col items-center md:px-0 px-3 md:py-0 py-5">
          <h2 className=" font-bold text-[#6a1b9a] xl:text-5xl lg:text-4xl  text-3xl text-center xl:my-8 xl:pb-3 pb-6">
            Students satisfied with{" "}
            <span className="font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
              Lingolandias.
            </span>
          </h2>
          <p className="text-[#9c27b0] font-medium md:text-xl text-lg text-center xl:mb-[50px] lg:mb-[35px] md:mb-[20px] mb-5">
            "It's never too late to start learning. Every moment is an
            opportunity to expand your knowledge and development."
          </p>

          <div>
            <div className="w-full md:flex flex-row-reverse md:justify-between items-center md:mb-14 mb-9">
              <div className="md:w-2/4  py-2 md:px-4">
                <h2 className="text-center text-[#9c27b0] lg:text-2xl text-lg font-bold">
                  Hello, I'm Magda, a Spanish student.
                </h2>
                <p className="md:mt-4 mt-3 text-[#9c27b0] text-lg">
                  Fascinated by languages and cultures, I chose to learn
                  Spanish. 
                </p>
              </div>
              <div className="md:w-2/4 ">
                <Video />
              </div>
            </div>

            <div className="w-full md:flex justify-between items-center md:mb-14 mb-9">
              <div className="md:w-2/4  py-2 md:px-4">
                <h2 className="text-center text-[#9c27b0] lg:text-2xl text-xl font-bold">
                  Hi this is Carlos, pleased to meet you.
                </h2>
                <p className="md:mt-4 mt-3 text-[#9c27b0] text-lg">
                  Meet Carlos, another language enthusiast from Spain. He's also
                  embarked on the journey of learning English. 
                  
                </p>
              </div>

              <div className=" md:w-2/4 ">
                <Video />
              </div>
            </div>

            <div className="w-full md:flex flex-row-reverse md:justify-between items-center md:mb-14 mb-9">
              <div className="md:w-2/4  py-2 md:px-4">
                <h2 className="text-center text-[#9c27b0] lg:text-2xl text-xl font-bold">
                  Hi there! Ramon here, an English student.
                </h2>
                <p className="md:mt-4 mt-3 text-[#9c27b0] text-lg">
                  Ramon, from Spain, is on a journey to learn English. Despite
                  the language's complexities, he's making consistent progress.
                  
                </p>
              </div>
              <div className=" md:w-2/4 ">
                <Video />
              </div>
            </div>
          </div>

          <div>
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden text-lg font-medium tracking-tighter text-white bg-[#9c27b0] rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#43a047] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
