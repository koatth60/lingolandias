import React from "react";
import agata from "../assets/agata.png";
import agata2 from "../assets/agata2.png";


// estaba en 270px
const Generalnfo = () => {
  return (
    <section className="font-satoshi 2xl:px-[330px] lg:p-[50px] md:px-[30px] mt-[50px] max-md:px-2">
      <div className="flex justify-center items-center max-lg:flex-col-reverse py-4 md:mb-[60px] gap-8 ">
        <img src={agata} alt="our teachers" className="rounded-e-3xl xl:w-[500px] lg:w-[400px] md:w-[600px] "/>

        <div className="">
          <h2 className=" font-bold text-[#23085A] xl:text-3xl lg:text-2xl max-lg:text-xl text-center border-b-4 my-8 pb-3">
            Our Academy
          </h2>
          <p className="text-slate-700 text-lg ">
            We are a Colombia-based Spanish school that prides itself on dynamic
            interactive lessons – to help you get the most out of your learning
            experience. Our Spanish School is in Poblado, Medellin and offers
            students a great language learning experience by combining Spanish
            courses and authentic cultural experiences. We enable students to
            fully immerse themselves in the culture of Colombia for maximum
            enjoyment and learning benefit.
          </p>
          <p className="mt-7 text-slate-700 text-lg">
            We know that, when it comes to language, studying and learning are
            not the same thing. That is why we combine proven classroom
            techniques with modern technology to provide first-class Spanish
            lessons here in Medellín, Colombia.
          </p>
        
        </div>
      </div>
      <div className="flex justify-center items-center max-lg:flex-col py-4 gap-8">
        <div className="">
          <h2 className=" font-bold text-[#23085A] xl:text-3xl lg:text-2xl md:text-lg max-lg:text-xl text-center border-b-4 my-8 pb-3">
            More about us
          </h2>
          <p className="text-slate-700 text-lg">
            Lingolandias to ludzie pełni pasji. Nauczyciele, którzy dzięki
            swojemu naturalnemu i holistycznemu podejściu do języka angielskiego
            i jego nauki stworzą wspólnie z tobą bezpieczna, pełna zabawy
            językowej przestrzeń. Naturalne i luźne podejście do języka
            angielskiego gwarantuje przyswajanie wiedzy nawet wówczas gdy o tym
            nie wiesz, i to właśnie w tym tkwi magia Lingolandias. Rozmawiasz,
            poznajesz sekrety gramatyki, przyswajasz słownictwo o tym nie
            wiedząc- a to wszystko w atmosferze zrozumienia, empatii i
            spełniania indywidualnych potrzeb każdego z naszych uczniów.
          </p>
        
        </div>
        <img src={agata2} alt="our teachers" className="rounded-s-3xl xl:w-[500px] lg:w-[400px]  md:w-[600px] "/>
      </div>
    </section>
  );
};

export default Generalnfo;
