import React from "react";
import { num1, num2, num3, num4 } from "../assets/export";

const Metod = () => {
  return (
    <div>
      <section className="h-auto py-28    flex justify-center items-center font-satoshi  2xl:px-[330px] lg:px-[50px] md:px-[30px] relative  max-lg:mb-[260px] max-md:mb-[360px] max-md:px-2 ">
        <div className="flex items-center gap-4">
          <div className="max-w-[400px] flex flex-col justify-center p-4 bg-[#66bb6a] shadow-2xl rounded-3xl ">
            <h2 className="font-bold text-white xl:text-3xl lg:text-2xl max-lg:text-xl mb-4 text-center">
              Metoda Lingolandias.
            </h2>
            <p className="text-white ">
              Lingolandias tworzą ludzie pełni pasji. Podstawą jest holistyczne
              podejście do języka angielskiego. Bazą jest stworzenie komfortowej
              przestrzeni do stawiania pierwszych kroków w mówieniu, to jest
              najtrudniejsze. Potem krok po kroku wprowadzamy niepostrzeżenie
              zasady gramatyczne, które zawsze budzą obawy uczniów. Staramy się
              to robić na wesoło, bez stresu, akceptując z wielką satysfakcją
              nawet najmniejsze postępy.Zakładamy, że podstawą tego procesu,
              jest zaufanie pomiędzy uczniem a nauczycielem, bez stawiania
              wysokich wymagań. Ważnym elementem jest zabawa językiem, ale z
              ukierunkowaniem na indywidualne potrzeby każdego ucznia.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl ">
            <div className="bg-white py-6 px-8 border-solid h-[300px] text-center text-[#6a1b9a] flex flex-col items-center">
              <img src={num1} alt="" />
              <h3 className="text-xl text-center font-bold mb-4">
                Ile to potrwa?
              </h3>
              <p className="text-start leading-5">
                Nauka języka obcego to proces, dlatego wspólnie ustalimy twoje
                cele i obierzemy indywidualna ścieżkę nauczania, abyś jak
                najszybciej zaczął porozumiewać się w języku angielskim.
              </p>
            </div>
            <div className="bg-[#EABE6C] py-6 px-8  border-solid h-[300px] text-center text-white flex flex-col items-center">
              <img src={num2} alt="" className="" />
              <h3 className="text-xl text-center font-bold mb-4">
                Dlaczego brakuje mi swobody w mówieniu?
              </h3>
              <p className="text-start leading-5">
                Brak swobody w mówieniu w języku angielskim ma różne podłoża
                jednakże naszym zadaniem i celem jest wykrycie twojego
                indywidualnego podłoża tej przypadłości i jego gwarantowana
                eliminacja.
              </p>
            </div>
            <div className="bg-[#81c784] py-6 px-8 border-solid h-[300px] text-center text-[#6a1b9a] flex flex-col items-center">
              <img src={num3} alt="" className="" />
              <h3 className="text-xl text-center font-bold mb-4">
                Czy będziemy uczyć się gramatyki?
              </h3>
              <p className="text-start leading-5">
                I tak i nie. Tak: ponieważ gramatyka jest ważna i kluczowa w
                poprawnej komunikacji. Nie: dzięki naszym metodom nauczysz się
                gramatyki nawet o tym nie wiedząc, więc to tak jakbyś się jej
                nie uczył.
              </p>
            </div>
            <div className="bg-[#ab47bc] py-6 px-8 border-solid h-[300px] text-center text-white flex flex-col items-center ">
              <img src={num4} alt="" className="" />
              <h3 className="text-xl text-center font-bold mb-4">
                Co jeśli nie będziemy mógł pojawić się na zaplanowanych
                zajęciach?
              </h3>
              <p className="text-start leading-5">
                O nic się nie martw! W Lingolandias okienko na przełożenie zajęć
                wynosi 24h przed zaplanowanym spotkaniem, a dzięki ludzkiemu
                podejściu naszych nauczycieli, w wyjątkowych przypadkach, z
                odpowiednim nastawieniem nawet po upływie 24h uda się coś
                zdziałać.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Metod;

// bg-[#40A2D8]
// bg-[#9BCF53] nice grenish
