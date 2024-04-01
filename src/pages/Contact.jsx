import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import foto2 from "../assets/foto2.png";
import dontmiss from "../assets/dontmiss.png";

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="h-screen font-satoshi flex flex-col items-center">
        <div className="mt-[80px] flex items-center">
          <img src={foto2} alt="lingolandias" />

          <div>
            <img src={dontmiss} alt="dont miss" width={600} />
          </div>

          <div className="bg-red-600 flex flex-col items-center p-4 rounded-3xl">
            <h3 className="text-center text-2xl">Join now!</h3>
            <p className="w-3/4 text-center leading-none mb-2">
              Leave your information and you'll get a special promotion!
            </p>
            <div className="w-full h-[1px] bg-black mb-6 "></div>
            <form action="submit" className="flex flex-col gap-6 w-full">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name *"
                required
                className="py-1 px-2 rounded h-10"
              />
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Number *"
                required
                className="py-1 px-2 rounded h-10"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email *"
                required
                className="py-1 px-2 rounded h-10"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className="py-1 px-2 rounded locked-textarea"
                placeholder="Your message..."
              ></textarea>
              <input
                type="button"
                name="button"
                id="button"
                className="bg-blue-500 p-2 rounded-full cursor-pointer"
                value="Send"
              />
            </form>
          </div>
        </div>
        <div className="text-center flex flex-col items-center">
          <h2 className=" font-semibold text-4xl text-[#75377A]  mt-8">
            Master a new language from anywhere in the world, at your own pace!.
          </h2>
          <h3 className="bg-orange-500 text-4xl text-white p-2 m-2 max-w-[800px] rounded-lg">Gain success, while enjoying the journey!</h3>
          <p className="max-w-[900px] mt-4 ">
            Unlock the world of language learning on your terms, wherever you
            may be. With the freedom to set your own pace, you can immerse
            yourself in a new language adventure, guided by your curiosity and
            determination. Whether you're studying on the go, from the comfort
            of your home, or amidst the hustle and bustle of daily life, the
            journey to mastering a new language is yours to navigate. Embrace
            the flexibility, embrace the challenge, and embrace the joy of
            discovery as you chart your course towards fluency and beyond
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
