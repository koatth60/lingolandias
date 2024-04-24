import i18n from "i18next";
import LanguageDectector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import { levels } from "./Constants";
// import  levels  from "./Constants";

i18n
  .use(LanguageDectector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "pl",
    resources: {
      pl: {
        translation: {
          // HEADER TRASNLATIONS!!!!
          home: "Strona główna",
          courses: "Kursy",
          teachers: "Nauczyciele",
          contact: "Kontakt",

          // HERO TRANSLATIONS!!!
          hero1: "Witamy Cię prosto z Wysp Brytyjskich.",
          hero2:
            "Jesteś w miejscu gdzie rozpoczęła się nowa era nauczania języków obcych - będzie szybko, przyjemnie i",
          hero2Span: "skutecznie.",
          hero3:
            "Z łatwością wyruszysz w podróż do opanowania języków: odkryj naszą zaufaną i sprawdzoną metodologię osiągania sukcesu w nauce języków. Rozgość się, zapnij pasy i ruszamy!",
          director: "Właścicielka Szkoły",

          // QUOTE AND INFO TRANSLATIOS!!
          start: "Zacznij od nauki:",
          moto: "Nasze motto",
          quote: "Posiadanie innego języka oznacza posiadanie drugiej duszy.",
          autor: "Karol Wielki-",
          follow: "Śledź nas na:",
          //   language: ["ANGIELSKI", "HISZPAŃSKI", "POLSKI"],

          //   GENERAL INFO TRANSLATIONS
          genInfo: "Jak To Się",
          genInfoSpan: "Zaczęło",
          genInfoPara1:
            "Kiedy przyjechałam do Anglii, nie znając jeszcze języka, zmierzyłam się z wyzwaniem komunikowania się w obcym kraju. Poczułam na własnej skórze, jak trudne może być życie, gdy nie możemy swobodnie wyrazić siebie i porozumieć się z innymi.",
          genInfoPara2:
            "To doświadczenie zmusiło mnie do podjęcia nauki języka angielskiego. Odkryłam, że prostota tego języka nie oznacza, że jest to zadanie łatwe. Angielski jest pięknym, ale wymagającym językiem, który warto poznać i opanować.",
          genInfoPara3:
            "Zakochać się w języku angielskim i brytyjskiej organizacji, być opublikowanym w studiach lingwistycznych. Było to dla mnie możliwość pogłębienia wiedzy podstawowej z zakresu angielskiego, jak i hiszpańskiego. Okazało się, że nauka i praktyka obu szkół była nie tylko efektywna, ale także przyjemna. udostępniane przez mnie raz pierwszy, przez moje doświadczenie, które dzieli się w przyszłości, tworząc zasoby szkół obcych. Obcując przez kilka lat z języka angielskiego, wymyślam inny schemat nauki języka, niż znany mi dobrze z innych szkół. To właśnie do umiejętności i dalszych obserwacji postępów naszych uczniów przekonał mnie, że został stworzony przeze mnie szkoła oferująca coś wyjątkowego w zakresie nauk edukacyjnych.\n Najważniejszym zadaniem Lingolandias, jest przekazanie uczniom nie znjącym pącztkowo ani jednego słowa po angielsku, bazy do samodzielnego rozwijania wzbogacania języka. Czasami prowadzi to także do równoczesnej nauki dwóch języków, która okazuję się być nie tylko efektywna ale też przyjemna. To pokazuje, że nasi nauczyciele mają niezwykłą moc i potrafią przekazywać wiedzę w sposób, który sprawia, że nauka języków staje się przyjemnością, a nie tylko koniecznością.",
          genInfoPara4:
            "Przyznam, że jestem dumna z mojej szkoły i nowego podejścia do nauki języków. Kadra nauczycielska to zespół pasjonatów, którzy nie tylko przekazują wiedzę, ale również inspirują i motywują naszych uczniów do samodoskonalenia się. Uczymy języków w sposób praktyczny, dostosowując się do indywidualnych potrzeb każdego ucznia.",
          genInfoPara5:
            "Jeśli marzysz o odkrywaniu nowych kultur, nawiązywaniu międzynarodowych znajomości i rozwijaniu umiejętności komunikacyjnych, zapraszam do mojej szkoły. Sprawię, że nauka języków stanie się fascynującą podróżą, pełną przygód i dalszych możliwości. A więc przekonaj się sam, jak nauka języków może być nie tylko efektywna, ale również satysfakcjonująca i pełna radości. Dołącz do naszej społeczności i odkrywaj świat języków razem z nami!.",

            
            // METHODOLY TRANSLATIONS!!!
            methodH: "Metoda Lingolandias.",
            methodP: "Lingolandias tworzą ludzie pełni pasji. Podstawą jest holistyczne podejście do języka angielskiego. Bazą jest stworzenie komfortowej przestrzeni do stawiania pierwszych kroków w mówieniu, to jest najtrudniejsze. Potem krok po kroku wprowadzamy niepostrzeżenie zasady gramatyczne, które zawsze budzą obawy uczniów. Staramy się to robić na wesoło, bez stresu, akceptując z wielką satysfakcją nawet najmniejsze postępy.Zakładamy, że podstawą tego procesu, jest zaufanie pomiędzy uczniem a nauczycielem, bez stawiania wysokich wymagań. Ważnym elementem jest zabawa językiem, ale z ukierunkowaniem na indywidualne potrzeby każdego ucznia.",
            methodQ1: 'Ile to potrwa?',
            methodQ1P: "Nauka języka obcego to proces, dlatego wspólnie ustalimy twoje cele i obierzemy indywidualna ścieżkę nauczania, abyś jak najszybciej zaczął porozumiewać się w języku angielskim.",
            methodQ2: "Dlaczego brakuje mi swobody w mówieniu?",
            methodQ2P: "Brak swobody w mówieniu w języku angielskim ma różne podłoża jednakże naszym zadaniem i celem jest wykrycie twojego indywidualnego podłoża tej przypadłości i jego gwarantowana eliminacja.",
            methodQ3: "Czy będziemy uczyć się gramatyki?",
            methodQ3P: "I tak i nie. Tak: ponieważ gramatyka jest ważna i kluczowa w poprawnej komunikacji. Nie: dzięki naszym metodom nauczysz się gramatyki nawet o tym nie wiedząc, więc to tak jakbyś się jej nie uczył.",
            methodQ4: "Co jeśli nie będziemy mógł pojawić się na zaplanowanych zajęciach?",
            methodQ4P: "O nic się nie martw! W Lingolandias okienko na przełożenie zajęć wynosi 24h przed zaplanowanym spotkaniem, a dzięki ludzkiemu podejściu naszych nauczycieli, w wyjątkowych przypadkach, z odpowiednim nastawieniem nawet po upływie 24h uda się coś zdziałać.",



            // FOOTER TRANSLATIONS!!!
            footAcademy: 'Akademia',
            footAbout: 'O nas',
            footMethod: 'Metoda',
            footContact: 'Kontakt',

            footCourses: 'Kursy',
            footEnglish: "Angielski",
            footSpanish: 'Hiszpański',
            footPolish: 'Polski',

            footSocials: 'Społecznościowe',
            

        },
      },
      en: {
        translation: {
          // HEADER TRANSLATIONS!!!
          home: "Home",
          courses: "Courses",
          teachers: "Teachers",
          contact: "Contact",

          // HERO TRANSLATIONS!!!
          hero1: "We welcome you from the British Isles.",
          hero2:
            "You are in a place where a new era of foreign language teaching has begun - it will be fast, pleasant and",
          hero2Span: "efficient.",
          hero3:
            "Easily embark on your language learning journey: discover our trusted and proven methodology for language learning success. Make yourself comfortable, fasten your seat belts and let's go!",
          director: "Director of Lingolandias",

          // QUOTE AND INFO TRANSLATIOS!!
          start: "Start by learning:",
          moto: "Our motto",
          quote: "Having another language is like having a second soul.",
          autor: "Charlemagne-",
          follow: "Follow us on:",
          //   language: ["ENGLISH", "SPANISH", "POLISH"],

          //   GENERAL INFO TRANSLATIONS
          genInfo: "How did it",
          genInfoSpan: "start",
          genInfoPara1:
            "When I came to England, not knowing the language yet, I faced the challenge of communicating in a foreign country. I felt firsthand how difficult life can be when we cannot freely express ourselves and communicate with others.",
          genInfoPara2:
            "This experience forced me to start learning English. I discovered that the simplicity of the language does not mean that it is an easy task. English is a beautiful but demanding language that is worth learning and mastering.",
          genInfoPara3:
            "Fall in love with the English language and the British organization, be published in linguistic studies. It was an opportunity for me to deepen my basic knowledge of English and Spanish. It turned out that learning and practicing both schools was not only effective, but also enjoyable. shared by me for the first time, through my experience, which is shared in the future, creating foreign school resources. Having studied English for several years, I have come up with a different language learning scheme than the one I know well from other schools. It was the skills and continued observation of our students' progress that convinced me that I had created a school that offered something unique in the field of educational sciences.\nThe most important task of Lingolandias is to provide students who do not initially know a single word in English with a base to independently develop language enrichment. Sometimes this also leads to learning two languages at the same time, which turns out to be not only effective but also enjoyable. This shows that our teachers have extraordinary power and are able to convey knowledge in a way that makes learning languages a pleasure, not just a necessity.",
          genInfoPara4:
            "I admit that I am proud of my school and its new approach to language learning. The teaching staff is a team of enthusiasts who not only impart knowledge, but also inspire and motivate our students to self-improvement. We teach languages in a practical way, adapting to the individual needs of each student.",
          genInfoPara5:
            "If you dream of discovering new cultures, making international friends and developing communication skills, I invite you to my school. I will make learning languages a fascinating journey, full of adventures and further opportunities. So see for yourself how learning languages can be not only effective, but also satisfying and full of joy. Join our community and discover the world of languages with us!.",


            // METHODOLY TRANSLATIONS!!!
            methodH: "Method Lingolandias.",
            methodP: "Lingolandias is created by passionate people. The basis is a holistic approach to the English language. The basis is to create a comfortable space for taking the first steps in speaking, this is the most difficult thing. Then, step by step, we imperceptibly introduce grammar rules that always arouse students' concerns. We try to do it in a fun way, without stress, accepting even the smallest progress with great satisfaction. We assume that the basis of this process is trust between the student and the teacher, without setting high expectations. An important element is playing with the language, but focusing on the individual needs of each student.",
            methodQ1: 'How long will it take?',
            methodQ1P: "Learning a foreign language is a process, so we will set your goals together and choose an individual teaching path so that you can start communicating in English as soon as possible.",
            methodQ2: "Why do I lack freedom in speaking?",
            methodQ2P: "The lack of freedom in speaking English has various causes, however, our task and goal is to detect your individual causes of this condition and its guaranteed elimination.",
            methodQ3: "Will we learn grammar?",
            methodQ3P: "Yes and no. Yes: because grammar is important and crucial for proper communication. No: thanks to our methods you will learn grammar without even knowing it, so it is as if you were not learning it.",
            methodQ4: "What if we can't show up for the scheduled classes?",
            methodQ4P: "Don't worry about anything! At Lingolandias, the window for rescheduling classes is 24 hours before the scheduled meeting, and thanks to the human approach of our teachers, in exceptional cases, with the right attitude, you will be able to do something even after 24 hours.",

            
            // FOOTER TRANSLATIONS!!!
            footAcademy: 'Academy',
            footAbout: 'About',
            footMethod: 'Method',
            footContact: 'Contact',

            footCourses: 'Courses',
            footEnglish: "English",
            footSpanish: 'Spanish',
            footPolish: 'Polish',

            footSocials: 'Our Socials',
            
        },
      },
      es: {
        translation: {
          // HEADER TRANSLATIONS!!!
          home: "Inicio",
          courses: "Cursos",
          teachers: "Profesores",
          contact: "Contacto",

          // HERO TRANSLATIONS!!!
          hero1: "Eres bienvenido a las Islas Britanicas.",
          hero2:
            "Estás en un lugar donde ha comenzado una nueva era en la enseñanza de lenguas extranjeras: será rápida, agradable y",
          hero2Span: "eficiente.",
          hero3:
            "Embárcate fácilmente en tu viaje de aprendizaje de idiomas: descubre nuestra metodología confiable y probada para lograr el éxito en el aprendizaje de idiomas. ¡Ponte cómodo, abróchate los cinturones y vámonos!",
          director: "Directora de Lingolandias",

          // QUOTE AND INFO TRANSLATIOS!!
          start: "Empieza por aprender:",
          moto: "Nuestro lema",
          quote: "Tener otro idioma es como tener una segunda alma.",
          autor: "Carlomargno-",
          follow: "Síguenos en:",
          //   language: ["INGLÉS", "ESPAÑOL", "POLACO"],

          //   GENERAL INFO TRANSLATIONS
          genInfo: "¿Cómo",
          genInfoSpan: "empezó",
          genInfoPara1:
            "Cuando llegué a Inglaterra, sin saber aún el idioma, me enfrenté al desafío de comunicarme en un país extranjero. Sentí de primera mano lo difícil que puede ser la vida cuando no podemos expresarnos libremente ni comunicarnos con los demás.",
          genInfoPara2:
            "Esta experiencia me obligó a empezar a aprender inglés. Descubrí que la sencillez del lenguaje no significa que sea una tarea fácil. El inglés es un idioma hermoso pero exigente que vale la pena aprender y dominar.",
          genInfoPara3:
            "Enamórate del idioma inglés y de la organización británica, publica en estudios lingüísticos. Fue una oportunidad para mí de profundizar mis conocimientos básicos de inglés y español. Resultó que aprender y practicar ambas escuelas no sólo fue efectivo, sino también divertido. compartido por mí por primera vez, a través de mi experiencia, que se compartirá en el futuro, creando recursos escolares extranjeros. Después de haber estudiado inglés durante varios años, se me ocurrió un esquema de aprendizaje de idiomas diferente al que conozco bien en otras escuelas. Fueron las habilidades y la observación continua del progreso de nuestros estudiantes lo que me convenció de que había creado una escuela que ofrecía algo único en el campo de las ciencias de la educación.\nLa tarea más importante de Lingolandias es proporcionar a los estudiantes que inicialmente no saben una sola palabra en inglés una base para desarrollar de forma independiente el enriquecimiento del lenguaje. A veces esto también lleva a aprender dos idiomas al mismo tiempo, lo que resulta no sólo efectivo sino también divertido. Esto demuestra que nuestros profesores tienen un poder extraordinario y son capaces de transmitir conocimientos de una manera que hace que aprender idiomas sea un placer, no sólo una necesidad.",
          genInfoPara4:
            "Admito que estoy orgullosa de mi escuela y su nuevo enfoque para el aprendizaje de idiomas. El personal docente es un equipo de entusiastas que no solo imparten conocimientos, sino que también inspiran y motivan a nuestros estudiantes a la superación personal. Enseñamos idiomas de forma práctica, adaptándonos a las necesidades individuales de cada alumno.",
          genInfoPara5:
            "Si sueñas con descubrir nuevas culturas, hacer amigos internacionales y desarrollar habilidades comunicativas, te invito a mi escuela. Haré del aprendizaje de idiomas un viaje fascinante, lleno de aventuras y más oportunidades. Así que comprueba por ti mismo cómo aprender idiomas puede ser no sólo efectivo, sino también satisfactorio y lleno de alegría. ¡Únete a nuestra comunidad y descubre el mundo de los idiomas con nosotros!",


            
            // METHODOLY TRANSLATIONS!!!
            methodH: "Metodo Lingolandias.",
            methodP: "Lingolandias está creada por gente apasionada. La base es un enfoque holístico del idioma inglés. La base es crear un espacio cómodo para dar los primeros pasos al hablar, esto es lo más difícil. Luego, paso a paso, introducimos imperceptiblemente reglas gramaticales que siempre despiertan las preocupaciones de los estudiantes. Intentamos hacerlo de forma divertida, sin estrés, aceptando hasta el más mínimo avance con gran satisfacción. Asumimos que la base de este proceso es la confianza entre el alumno y el profesor, sin fijarse altas expectativas. Un elemento importante es jugar con el idioma, pero centrándonos en las necesidades individuales de cada alumno.",
            methodQ1: '¿Cuánto tiempo llevará?',
            methodQ1P: "Aprender un idioma extranjero es un proceso, por lo que estableceremos sus objetivos juntos y elegiremos un camino de enseñanza individual para que pueda comenzar a comunicarse en inglés lo antes posible.",
            methodQ2: "¿Por qué me falta libertad para hablar?",
            methodQ2P: "La falta de libertad para hablar inglés tiene varias causas, sin embargo, nuestra tarea y objetivo es detectar sus causas individuales de esta condición y garantizar su eliminación.",
            methodQ3: "¿Aprenderemos gramática?",
            methodQ3P: "Sí y no. Sí: porque la gramática es importante y crucial para una correcta comunicación. No: gracias a nuestros métodos aprenderás gramática sin siquiera saberla, por lo que es como si no la estuvieras aprendiendo.",
            methodQ4: "¿Qué pasa si no puedo llegar a las clases programadas?",
            methodQ4P: "¡No te preocupes por nada! El plazo para reprogramar las clases es de 24 horas antes de la reunión, y gracias al trato humano de nuestros profesores, en casos excepcionales, con la actitud adecuada, podrás hacer algo incluso después.",

            
            // FOOTER TRANSLATIONS!!!
            footAcademy: 'Academia',
            footAbout: 'Nosotros',
            footMethod: 'Method',
            footContact: 'Contact',

            footCourses: 'Cursos',
            footEnglish: "Inglés",
            footSpanish: 'Español',
            footPolish: 'Polaco',

            footSocials: 'Nuestras Redes',
            
        },
      },
    },
  });
