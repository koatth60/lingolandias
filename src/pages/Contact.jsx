/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { heropic } from "../assets/export.js";
import { InputDefault } from "../components/Inputs";
import { TextareaDefault } from "../components/Textarea";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new FormData instance
    const formData = new FormData();
    formData.append("name", name);
    formData.append("number", number);
    formData.append("email", email);
    formData.append("message", message);

         // "https://lingolandias-server.onrender.com/contact"

    // Send a POST request to your backend server
    fetch('http://localhost:3000/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        number: number,
        email: email,
        message: message,
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const text = await response.text();
        return text ? JSON.parse(text) : {};
      })
      .then((data) => {
        // Handle the response from your server
        if (data.success) {

          setName("");
          setNumber("");
          setEmail("");
          setMessage("");
          // The email was sent successfully
          alert("Email sent successfully");
        } else {
          // There was an error sending the email
          alert("Error sending email: " + data.error);
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Header />
      <section className="h-auto flex flex-col justify-center teachers items-center md:pt-[80px] pt-[40px] md:px-[30px] px-3 pb-6">
        <div className=" h-auto font-satoshi mt-14 lg:max-w-[1245px] items-center max-lg:flex-col-reverse gap-8 rounded-3xl">
        <div className="flex flex-col lg:flex-row items-center justify-center md:justify-around lg:gap-0 gap-8">
            <img
              src={heropic}
              
              alt="lingolandias"
              className="xl:w-[600px] lg:w-[500px]  rounded-full"
            />

            <div className="bg-white flex flex-col items-center p-4 rounded-3xl lg:max-w-[360px] md:w-[560px] w-[370px] lg:h-auto md:h-[650px] shadow-xl">
              <h3 className="text-center lg:text-2xl md:text-3xl text-2xl text-[#6a1b9a] font-bold">
                {t("inputTitle")}
              </h3>
              <p className="w-3/4 text-center text-[#9c27b0] leading-none mb-2">
                {t("inputSub")}
              </p>
              <div style={{ width: '100%', height: '2px', backgroundColor: '#cbd5e1', marginBottom: '24px', marginTop: '18px' }}></div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-6 w-full"
              >
                <InputDefault
                  label={t("input1")}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  
                />
                <InputDefault
                  label={t("input2")}
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
                <InputDefault
                  label={t("input3")}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextareaDefault
                  label={t("input4")}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <div>
                  <button
                    type="submit"
                    className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden text-lg font-medium tracking-tighter text-white bg-[#9c27b0] rounded-lg group"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#43a047] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">{t("input5")}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center text-white flex flex-col items-center">
            <h2 className=" font-bold xl:text-6xl md:text-5xl text-3xl mt-8">
              {t("contactTitle")}
            </h2>
            <h3 className="bg-[#43a047] xl:text-4xl md:text-3xl text-xl font-medium p-2 m-2 max-w-[800px] rounded-lg">
              {t("contactSubTitle")}
            </h3>
            <p className="max-w-[900px] mt-4 ">{t("ContactPara")}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
