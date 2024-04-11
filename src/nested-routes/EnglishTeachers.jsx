import React from "react";
import teacher from "../assets/teacher.png";
import teacher2 from "../assets/teacher2.png";
import teacher3 from "../assets/teacher3.png";
import teacher4 from "../assets/teacher4.png";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
const EnglishTeachers = () => {
  return (
    <div>
      <Header />
      <section className="h-auto  font-satoshi  2xl:px-[330px] lg:px-[50px] md:px-[30px] relative my-[100px] max-lg:mb-[260px] max-md:mb-[360px] max-md:px-2 ">
        <h2 className="xl:text-3xl lg:text-2xl max-lg:text-xl text-[#4e342e]  font-bold mb-4 text-center">
          Oto nasi nauczyciele języka angielskiego
        </h2>
        <p className="text-lg text-[#4e342e]  text-left max-w-[1000px] mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          mollitia officiis et ratione rerum recusandae facilis delectus minima
          cumque! Molestias natus corrupti enim fugiat quos maxime porro placeat
          rem sunt.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EnglishTeachers;
