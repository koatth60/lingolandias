import i18n from "i18next";
import LanguageDectector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { levels, teachers, spanishTeachers, testCards, polishTestCards, englishTeachers } from "./Constants";


i18n
  .use(LanguageDectector)
  .use(initReactI18next)
  .init({
    debug: true,
    returnObjects: true,
    lng: "pl",
    resources: {
      pl: {
        translation: {
          // HEADER TRASNLATIONS!!!!
          home: "Strona główna",
          courses: "Kursy",
          teachers: "Nauczyciele",
          contact: "Kontakt",
          collaboration: "Współpraca",

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
          language: levels[2],

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
            methodQ4: "Co jeśli opuścimy zajęcia?",
            methodQ4P: "O nic się nie martw! Okienko na przełożenie zajęć wynosi 24h przed zaplanowanym spotkaniem, a dzięki ludzkiemu podejściu naszych nauczycieli, w wyjątkowych przypadkach, z odpowiednim nastawieniem nawet po upływie 24h uda się coś zdziałać.",



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


          // TEACHERS TRANSLATIONS!!!!

            teacherTitle: 'Poznajmy',
            teacherTitleSpan: 'się',
            teachersP1: 'W naszej szkole mamy przyjemność pracować z wyjątkowymi nauczycielami, którzy są prawdziwymi ekspertami w swojej dziedzinie. To nie tylko profesjonaliści, ale także pasjonaci, którzy kochają to, co robią i pragną przekazywać swoją wiedzę i umiejętności naszym uczniom.',
            teachersP2: 'Nasi nauczyciele są nie tylko wykwalifikowani i kompetentni, ale również pełni entuzjazmu i energii. Ich podejście do nauczania jest innowacyjne i interaktywne, co sprawia, że zajęcia są nie tylko efektywne, ale również inspirujące. Wiedzą, jak zainteresować uczniów i zachęcić ich do aktywnego udziału w procesie nauki.',
            teachersTitle: teachers[2],
            crew: 'Załoga',
            teachersBtn: 'Odwiedzać',


            // SPANISH TEACHERS TRANSLATIONS!!!

            SpaTeachersTitle: 'To są nasi nauczyciele',
            SpaTeachersTitleSpan: 'hiszpańskiego',
            SpaTeachersTitleP1: 'Nasi nauczyciele języka hiszpańskiego są nie tylko wykwalifikowani i kompetentni, ale również pełni entuzjazmu i energii. Ich podejście do nauczania jest innowacyjne i interaktywne, co sprawia, że zajęcia są nie tylko efektywne, ale również inspirujące. Wiedzą jak zainteresować uczniów i zachęcić ich do aktywnego udziału w procesie nauki.',
            SpaTeachersCard: spanishTeachers,



            // ENGLISH TEACHERS TRANSLATIONS!!!
            EngTeachersTitle: 'Oto nasi nauczyciele języka',
            EngTeachersTitleSpan: 'angielskiego',
            EngTeachersP1: 'W naszej szkole mamy przyjemność pracować z wyjątkowymi nauczycielami, którzy są prawdziwymi ekspertami w swojej dziedzinie. To nie tylko profesjonaliści, ale także pasjonaci, którzy kochają to, co robią i pragną przekazywać swoją wiedzę i umiejętności naszym uczniom.',
            EngTeachersP2: 'Nasi nauczyciele angielskiego są nie tylko wykwalifikowani i kompetentni, ale również pełni entuzjazmu i energii. Ich podejście do nauczania jest innowacyjne i interaktywne, co sprawia, że zajęcia są nie tylko efektywne, ale również inspirujące. Wiedzą, jak zainteresować uczniów i zachęcić ich do aktywnego udziału w procesie nauki.',
            EngTeachersCard: englishTeachers,

            // CONTACT TRANSLATIONS!!!!
            inputTitle: "Dołącz teraz!",
            inputSub: 'Zostaw swoje dane, a otrzymasz specjalną promocję!',
            input1: 'Nazwa',
            input2: 'Numer',
            input3: 'Email',
            input4: 'Wiadomość',
            input5: 'Wysłać',
            contactTitle: 'Opanuj nowy język z dowolnego miejsca na świecie, we własnym tempie!.',
            contactSubTitle: 'Odnieś sukces, ciesząc się podróżą!',
            ContactPara: 'Odblokuj świat nauki języków na swoich warunkach, gdziekolwiek się znajdujesz. Mając swobodę ustalania własnego tempa, możesz zanurzyć się w nowej przygodzie językowej, kierując się swoją ciekawością i determinacją. Niezależnie od tego, czy uczysz się w drodze, w zaciszu własnego domu, czy w zgiełku codziennego życia, podróż do opanowania nowego języka należy do Ciebie.',

            

            // COURSES TRANSLATIONS!!!!

            courseTitle: 'Najlepszym rozwiązaniem jest',
            courseSubtitle: 'Odkryj swoje supermoce w nauce języka angielskiego z naszą szkołą! Oferujemy zajęcia indywidualne i w parach , które zapewniają autentyczną, żywą i codzienną naukę języka angielskiego.',
            titleIndividual: 'ZAJĘCIA INDYWIDUALNE',
            titleIndividualP: 'Nasze zajęcia indywidualne pozwalają Ci skupić się na swoich unikalnych celach i potrzebach językowych. Nasi wykwalifikowani nauczyciele wykorzystają swoją wiedzę i doświadczenie, aby zapewnić Ci spersonalizowane lekcje, które pomogą Ci osiągnąć zamierzone cele językowe. Dzięki indywidualnym zajęciom będziesz mógł/mogła rozwijać swoje umiejętności w tempie, który jest dla Ciebie najwygodniejszy.',
            titleCouple: 'ZAJĘCIA W PARACH',
            titleCoupleP: 'Wierzymy również w moc pracy w parach, dlatego oferujemy zajęcia w parach, które umożliwiają Ci praktyczne zastosowanie języka angielskiego w autentycznym kontekście. Podczas tych zajęć będziesz miał/miała możliwość ćwiczenia konwersacji, rozmawiania o różnych tematach i rozwiązywania zadań wraz z innym uczniem o podobnym poziomie zaawansowania. To nie tylko rozwija Twoje umiejętności językowe, ale także umożliwia wymianę doświadczeń i nawiązanie międzynarodowych znajomości.',
            courseP1: 'Jednak wierzymy również w moc pracy w parach i grupach. Nasze zajęcia w parach to doskonała okazja do praktycznego zastosowania nowo zdobytej wiedzy. Będziesz miał/miała możliwość ćwiczenia konwersacji, wymiany zdań i rozwiązywania zadań wraz z innym uczniem o podobnym poziomie zaawansowania. To nie tylko rozwija Twoje umiejętności językowe, ale także umożliwia wymianę doświadczeń i nawiązanie międzynarodowych znajomości.',
            courseP2: 'Nasza metoda nauczania skupia się na aktywnym uczestnictwie każdego ucznia, a nasi nauczyciele wykorzystują różnorodne materiały edukacyjne oraz interaktywne ćwiczenia, aby uczynić naukę języka hiszpańskiego ciekawą i angażującą.',
            courseP3: 'Nie ważne, czy jesteś początkujący czy zaawansowany w języku hiszpańskim, nasza szkoła oferuje programy na każdym poziomie zaawansowania. Nasz zespół nauczycieli z pasją i doświadczeniem jest gotowy, aby pomóc Ci odkryć swoje supermoce w nauce języka hiszpańskiego',
            courseButton: 'Kontakt',
            

            
            // TESTS TRANSLATIONS!!!!

            titleTest: polishTestCards[0],
            textTest: polishTestCards[0],
            buttonTest: polishTestCards[0],

        },
      },
      en: {
        translation: {
          // HEADER TRANSLATIONS!!!
          home: "Home",
          courses: "Courses",
          teachers: "Teachers",
          contact: "Contact",
          collaboration: "Collaboration",

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
          language: levels[0],

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
            methodQ4: "What if we can't attend the scheduled classes?",
            methodQ4P: "Don't worry about anything! The window for rescheduling classes is 24 hours before the scheduled meeting, and thanks to the human approach of our teachers, in exceptional cases, with the right attitude, you will be able to do something even after 24 hours.",

            
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


            
          // TEACHERS TRANSLATIONS!!!!

          teacherTitle: "Let's",
          teacherTitleSpan: 'meet',
          teachersP1: 'At our school we have the pleasure of working with exceptional teachers who are true experts in their field. They are not only professionals, but also enthusiasts who love what they do and want to pass on their knowledge and skills to our students.',
          teachersP2: 'Our teachers are not only qualified and competent, but also full of enthusiasm and energy. Their approach to teaching is innovative and interactive, which makes classes not only effective but also inspiring. They know how to interest students and encourage them to actively participate in the learning process.',
          teachersTitle: teachers[0],
          crew: 'Crew',
          teachersBtn: 'Visit',




            // SPANISH TEACHERS TRANSLATIONS!!!

          SpaTeachersTitle: 'These are our Spanish',
          SpaTeachersTitleSpan: 'teachers',
          SpaTeachersTitleP1: 'Our Spanish teachers are not only qualified and competent, but also full of enthusiasm and energy. Their approach to teaching is innovative and interactive, which makes classes not only effective but also inspiring. They know how to interest students and encourage them to actively participate in the learning process.',
          SpaTeachersCard: spanishTeachers,
          


          // ENGLISH TEACHERS TRANSLATIONS!!!

          EngTeachersTitle: 'These are our English',
          EngTeachersTitleSpan: 'teachers',
          EngTeachersP1: 'At our school we have the pleasure of working with exceptional teachers who are true experts in their field. They are not only professionals, but also enthusiasts who love what they do and want to pass on their knowledge and skills to our students.',
          EngTeachersP2: 'Our English teachers are not only qualified and competent, but also full of enthusiasm and energy. Their approach to teaching is innovative and interactive, which makes classes not only effective but also inspiring. They know how to interest students and encourage them to actively participate in the learning process.',
          EngTeachersCard: englishTeachers,
          

          // CONTACT TRANSLATIONS!!!!
          inputTitle: "Join now!",
          inputSub: "Leave your information and you'll get a special promotion!",
          input1: 'Name',
          input2: 'Number',
          input3: 'Email',
          input4: 'Message',
          input5: 'Send',
          contactTitle: 'Master a new language from anywhere in the world, at your own pace!.',
          contactSubTitle: 'Gain success, while enjoying the journey!',
          ContactPara: "Unlock the world of language learning on your terms, wherever you may be. With the freedom to set your own pace, you can immerse yourself in a new language adventure, guided by your curiosity and determination. Whether you're studying on the go, from the comfort of your home, or amidst the hustle and bustle of daily life, the journey to mastering a new language is yours to navigate.",

          

          
            // COURSES TRANSLATIONS!!!!

            courseTitle: 'The best option is',
            courseSubtitle: 'Discover your superpowers in learning English with our school! We offer individual and pair classes that provide authentic, lively and everyday learning of English.',
            titleIndividual: 'INDIVIDUAL CLASSES',
            titleIndividualP: 'Our one-on-one classes allow you to focus on your unique goals and language needs. Our qualified teachers will use their knowledge and experience to provide you with personalized lessons that will help you achieve your language goals. Thanks to individual classes, you will be able to develop your skills at the pace that is most comfortable for you.',
            titleCouple: 'CLASSES IN COUPLES',
            titleCoupleP: 'We also believe in the power of working in pairs, which is why we offer pair classes that allow you to practice English in an authentic context. During these classes, you will have the opportunity to practice conversation, talk about various topics and solve tasks with another student of a similar level. This not only develops your language skills, but also allows you to exchange experiences and make international contacts.',
            courseP1: 'However, we also believe in the power of working in pairs and groups. Our pair classes are an excellent opportunity to practically apply the newly acquired knowledge. You will have the opportunity to practice conversation, exchange opinions and solve tasks with another student of a similar level. This not only develops your language skills, but also allows you to exchange experiences and make international contacts.',
            courseP2: 'Our teaching method focuses on the active participation of each student, and our teachers use a variety of educational materials and interactive exercises to make learning Spanish interesting and engaging.',
            courseP3: 'Whether you are a beginner or advanced learner in Spanish, our school offers programs for all levels. Our team of passionate and experienced teachers are ready to help you discover your superpowers in learning Spanish',
            courseButton: 'Contact',



            // TESTS TRANSLATIONS!!!!

            titleTest: testCards[0],
            textTest: testCards[0],
            buttonTest: testCards[0],


            
        },
      },
      es: {
        translation: {
          // HEADER TRANSLATIONS!!!
          home: "Inicio",
          courses: "Cursos",
          teachers: "Profesores",
          contact: "Contacto",
          collaboration: "Colaboración",

          // HERO TRANSLATIONS!!!
          hero1: "Bienvenido a las Islas Britanicas.",
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
          language: levels[1],

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
            footMethod: 'Método',
            footContact: 'Contacto',

            footCourses: 'Cursos',
            footEnglish: "Inglés",
            footSpanish: 'Español',
            footPolish: 'Polaco',

            footSocials: 'Nuestras Redes',


            
          // TEACHERS TRANSLATIONS!!!!

          teacherTitle: 'Conozcámonos',
          teacherTitleSpan: 'mejor',
          teachersP1: 'En nuestra escuela tenemos el placer de trabajar con profesores excepcionales que son verdaderos expertos en su campo. No sólo son profesionales, sino también entusiastas que aman lo que hacen y quieren transmitir sus conocimientos y habilidades a nuestros estudiantes.',
          teachersP2: 'Nuestros profesores no sólo están cualificados y son competentes, sino que también están llenos de entusiasmo y energía. Su enfoque de la enseñanza es innovador e interactivo, lo que hace que las clases no sólo sean efectivas sino también inspiradoras. Saben cómo interesar a los estudiantes y animarlos a participar activamente en el proceso de aprendizaje.',
          teachersTitle: teachers[1],
          crew: 'Personal',
          teachersBtn: 'Visitar',

          
           // SPANISH TEACHERS TRANSLATIONS!!!

           SpaTeachersTitle: 'Nuestros profesores de',
           SpaTeachersTitleSpan: 'español',
           SpaTeachersTitleP1: 'Nuestros profesores de español no sólo están cualificados y competentes, sino que también están llenos de entusiasmo y energía. Su enfoque de la enseñanza es innovador e interactivo, lo que hace que las clases no sólo sean efectivas sino también inspiradoras. Saben cómo interesar a los estudiantes y animarlos a participar activamente en el proceso de aprendizaje.',
           SpaTeachersCard: spanishTeachers,


           // ENGLISH TEACHERS TRANSLATIONS!!!

            EngTeachersTitle: 'Estos son nuestros profesores de', 
            EngTeachersTitleSpan: 'inglés',
            EngTeachersP1: 'En nuestra escuela tenemos el placer de trabajar con profesores excepcionales que son verdaderos expertos en su campo. No sólo son profesionales, sino también entusiastas que aman lo que hacen y quieren transmitir sus conocimientos y habilidades a nuestros estudiantes.',
            EngTeachersP2: 'Nuestros profesores de inglés no sólo están cualificados y son competentes, sino que también están llenos de entusiasmo y energía. Su enfoque de la enseñanza es innovador e interactivo, lo que hace que las clases no sólo sean efectivas sino también inspiradoras. Saben cómo interesar a los estudiantes y animarlos a participar activamente en el proceso de aprendizaje.',
            EngTeachersCard: englishTeachers,



          // CONTACT TRANSLATIONS!!!!
          inputTitle: "!Únete ahora!",
          inputSub: "¡Deja tus datos y obtendrás una promoción especial!",
          input1: 'Nombre',
          input2: 'Número',
          input3: 'Correo',
          input4: 'Mensaje',
          input5: 'Enviar',
          contactTitle: 'Domina un nuevo idioma desde cualquier parte del mundo, ¡a tu propio ritmo!.',
          contactSubTitle: '¡Consiga el éxito mientras disfruta del viaje!',
          ContactPara: "Desbloquea el mundo del aprendizaje de idiomas a tu manera, estés donde estés. Con la libertad de marcar tu propio ritmo, podrás sumergirte en una nueva aventura lingüística, guiado por tu curiosidad y determinación. Ya sea que estés estudiando mientras viajas, desde la comodidad de tu hogar o en medio del ajetreo y el bullicio de la vida diaria, el viaje hacia el dominio de un nuevo idioma es tuyo.",


 
            
            // COURSES TRANSLATIONS!!!!

            courseTitle: 'La mejor opcion es',
            courseSubtitle: '¡Descubre tus superpoderes al aprender inglés con nuestra escuela! Ofrecemos clases individuales y en pareja que brindan un aprendizaje del inglés auténtico, animado y cotidiano!.',
            titleIndividual: 'CLASES INDIVIDUALES',
            titleIndividualP: 'Nuestras clases individuales le permiten concentrarse en sus objetivos únicos y necesidades lingüísticas. Nuestros profesores calificados utilizarán su conocimiento y experiencia para brindarte lecciones personalizadas que te ayudarán a alcanzar tus objetivos lingüísticos. Gracias a las clases individuales podrás desarrollar tus habilidades al ritmo que te resulte más cómodo.',
            titleCouple: 'CLASES EN PAREJAS',
            titleCoupleP: 'También creemos en el poder de trabajar en parejas, por eso ofrecemos clases en parejas que te permiten practicar inglés en un contexto auténtico. Durante estas clases tendrás la oportunidad de practicar la conversación, hablar sobre diversos temas y resolver tareas con otro alumno de tu nivel similar. Esto no sólo desarrolla tus habilidades lingüísticas, sino que también te permite intercambiar experiencias y hacer contactos internacionales.',
            courseP1: 'Sin embargo, también creemos en el poder de trabajar en parejas y en grupos. Nuestras clases en pareja son una excelente oportunidad para aplicar de forma práctica los conocimientos recién adquiridos. Tendrás la oportunidad de practicar la conversación, intercambiar opiniones y resolver tareas con otro alumno de tu nivel similar. Esto no sólo desarrolla tus habilidades lingüísticas, sino que también te permite intercambiar experiencias y hacer contactos internacionales.',
            courseP2: 'Nuestro método de enseñanza se centra en la participación activa de cada estudiante, y nuestros profesores utilizan una variedad de materiales educativos y ejercicios interactivos para hacer que aprender español sea interesante y atractivo.',
            courseP3: 'Ya seas principiante o avanzado en español, nuestra escuela ofrece programas para todos los niveles. Nuestro equipo de profesores apasionados y experimentados está listo para ayudarte a descubrir tus superpoderes al aprender español.',
            courseButton: 'Contacto',


            // TESTS TRANSLATIONS!!!!

            titleTest: testCards[1],
            textTest: testCards[1],
            buttonTest: testCards[1],
            
        },
      },
    },
  });
 

