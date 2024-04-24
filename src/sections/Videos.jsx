import React from "react";
import Video from "../components/Video";
import { Link } from "react-router-dom";
const Videos = () => {
  return (
    <div className="md:px-[30x]">
    <section className=" w-full flex justify-center md:px-[30x]">
      <div className="flex justify-center h-auto font-satoshi lg:max-w-[1245px] items-center max-lg:flex-col-reverse p-16  gap-8 bg-white rounded-3xl shadow-xl">
        <div className="flex flex-col items-center">
          <h2 className=" font-bold text-[#6a1b9a] xl:text-5xl lg:text-2xl max-lg:text-xl text-center  my-8 pb-3">
            Studenci zadowoleni z{" "}
            <span className="xl:text-5xl lg:text-2xl max-lg:text-2xl font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
              Lingolandias
            </span>
            .
          </h2>
          <p className="text-[#9c27b0] font-medium text-xl text-center mb-[50px] ">
            Nigdy nie jest za późno, aby zacząć się uczyć. Każdy moment jest
            okazją do poszerzenia swojej wiedzy i rozwoju
          </p>

        <div>
          <div className="w-full flex justify-between mb-14">
            <div className=" w-2/4 ">
              <Video />
            </div>
            <div className="w-2/4 text-2xl py-2 px-4">
              <h2 className="text-center text-[#9c27b0] font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h2>
              <p className="mt-4 text-[#9c27b0] text-lg">
                Najbardziej inspirującym aspektem naszej szkoły jest to, że
                osoby, które przychodzą do nas nie znając ani jednego słowa
                angielskiego, po dwóch latach nauki kontynuują rozwijanie
                umiejętności języka hiszpańskiego na wysokim poziomie
                angielskiego.
              </p>
            </div>
          </div>


          <div className="w-full flex flex-row-reverse justify-between mb-14">
            <div className=" w-2/4 ">
              <Video />
            </div>
            <div className="w-2/4 text-2xl py-2 px-4">
              <h2 className="text-center text-[#9c27b0] font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h2>
              <p className="mt-4 text-[#9c27b0] text-lg">
                Najbardziej inspirującym aspektem naszej szkoły jest to, że
                osoby, które przychodzą do nas nie znając ani jednego słowa
                angielskiego, po dwóch latach nauki kontynuują rozwijanie
                umiejętności języka hiszpańskiego na wysokim poziomie
                angielskiego.
              </p>
            </div>
          </div>


          <div className="w-full flex  justify-between mb-14">
            <div className=" w-2/4 ">
              <Video />
            </div>
            <div className="w-2/4 text-2xl py-2 px-4">
              <h2 className="text-center text-[#9c27b0] font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h2>
              <p className="mt-4 text-[#9c27b0] text-lg">
                Najbardziej inspirującym aspektem naszej szkoły jest to, że
                osoby, które przychodzą do nas nie znając ani jednego słowa
                angielskiego, po dwóch latach nauki kontynuują rozwijanie
                umiejętności języka hiszpańskiego na wysokim poziomie
                angielskiego.
              </p>
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
              <span className="relative">Kontakt</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Videos;
