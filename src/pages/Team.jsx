import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import teacher from "../assets/teacher.png";
import teacher2 from "../assets/teacher2.png";
import teacher3 from "../assets/teacher3.png";
import teacher4 from "../assets/teacher4.png";
const Team = () => {
  return (
    <div>
      <Header />
      <section className="h-screen flex flex-col items-center ">
        <div className="mt-[110px] text-center ">
          <h2 className="text-4xl text-[#75377A] font-bold mb-4">
            Meet Our Crew
          </h2>
          <p className="text-xl text-[#75377A] w-[1000px] mb-4">
            Step into the world of language learning with our team of
            exceptional educators who elevate the art of teaching to new
            heights. Our language teachers are more than just instructors; they
            are mentors, guides, and catalysts for transformation. With a wealth
            of knowledge and experience in linguistics, cultural studies, and
            pedagogy, they bring a depth of understanding that goes beyond
            grammar rules and vocabulary lists.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="bg-[#E7E3D8]">
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
            <p class="text-center font-oswald text-[#75377A] text-lg">
              Chirstian
            </p>
          </div>
          <div className="bg-[#E7E3D8]">
            <div className="relative">
            <div class="w-full h-full bg-black absolute z-10 opacity-0 hover:opacity-60 transition-opacity duration-500 flex items-center px-2">
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
            <p class="text-center font-oswald text-[#75377A] text-lg">Agati</p>
          </div>
          <div className="bg-[#E7E3D8]">
            <div className="relative">
              <div class="w-full h-full bg-blue-500 absolute z-10 opacity-0 hover:opacity-90 transition-opacity duration-500 flex items-center px-2">
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
            <p class="text-center font-oswald text-[#75377A] text-lg">Ramiro</p>
          </div>
          <div className="bg-[#E7E3D8]">
            <div className="relative">
              <div class="w-full h-full bg-blue-500 absolute z-10 opacity-0 hover:opacity-90 transition-opacity duration-500 flex items-center px-2">
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
            <p class="text-center font-oswald text-[#75377A] text-lg">Ramon</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
