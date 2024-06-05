import Video from "../components/Video";
import { Link } from "react-router-dom";
const Videos = () => {
  return (
    <section className=" w-full flex justify-center md:px-[30x] px-3">
      <div className=" h-auto font-satoshi lg:max-w-[1245px] relative flex justify-center items-center  lg:p-16 md:px-6 md:py-8 gap-8 bg-white rounded-3xl shadow-xl xl:my-[50px] max-lg:mb-[260px] max-md:mb-[360px] md:mx-[30px] ">
        <div className="flex flex-col items-center md:px-0 px-2 md:py-0 py-4">
          <h2 className=" font-bold text-[#6a1b9a] xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center xl:my-8 xl:pb-3 pb-6">
            Studenci zadowoleni z{" "}
            <span className="font-bold bg-[#43a047] text-white xl:w-[220px] md:w-[150px] max-md:w-[130px] max-md:text-center rounded-2xl px-2 pb-1 ">
              Lingolandias.
            </span>
          </h2>
          <p className="text-[#9c27b0] font-medium md:text-xl text-lg text-center xl:mb-[50px] lg:mb-[35px] md:mb-[20px] mb-4">
            Nigdy nie jest za późno, aby zacząć się uczyć. Każdy moment jest
            okazją do poszerzenia swojej wiedzy i rozwoju
          </p>

          <div >
            <div className="w-full md:flex flex-row-reverse md:justify-between md:mb-14 mb-9">
             
              <div className="md:w-2/4  py-2 md:px-4">
                <h2 className="text-center text-[#9c27b0] lg:text-2xl text-xl font-bold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h2>
                <p className="mt-4 text-[#9c27b0] lg:text-lg">
                  Najbardziej inspirującym aspektem naszej szkoły jest to, że
                  osoby, które przychodzą do nas nie znając ani jednego słowa
                  angielskiego, po dwóch latach nauki kontynuują rozwijanie
                  umiejętności języka hiszpańskiego na wysokim poziomie
                  angielskiego.
                </p>
              </div>
              <div className="md:w-2/4 ">
                <Video />
              </div>
            </div>

            <div className="w-full md:flex justify-between md:mb-14 mb-9">
              
              <div className="md:w-2/4  py-2 md:px-4">
                <h2 className="text-center text-[#9c27b0] lg:text-2xl text-xl font-bold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h2>
                <p className="mt-4 text-[#9c27b0] lg:text-lg">
                  Najbardziej inspirującym aspektem naszej szkoły jest to, że
                  osoby, które przychodzą do nas nie znając ani jednego słowa
                  angielskiego, po dwóch latach nauki kontynuują rozwijanie
                  umiejętności języka hiszpańskiego na wysokim poziomie
                  angielskiego.
                </p>
              </div>

              <div className=" md:w-2/4 ">
                <Video />
              </div>
            </div>

            <div className="w-full md:flex flex-row-reverse md:justify-between md:mb-14 mb-9">

              
              <div className="md:w-2/4  py-2 md:px-4">
                <h2 className="text-center text-[#9c27b0] lg:text-2xl text-xl font-bold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h2>
                <p className="mt-4 text-[#9c27b0] lg:text-lg">
                  Najbardziej inspirującym aspektem naszej szkoły jest to, że
                  osoby, które przychodzą do nas nie znając ani jednego słowa
                  angielskiego, po dwóch latach nauki kontynuują rozwijanie
                  umiejętności języka hiszpańskiego na wysokim poziomie
                  angielskiego.
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
              className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden lg:text-lg font-medium tracking-tighter text-white bg-[#9c27b0] rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#43a047] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Kontakt</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
