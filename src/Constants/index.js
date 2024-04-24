import {
  poland,
  spain,
  uk,
  polandsquare,
  spainsquare,
  uksquare,
} from "../assets/export.js";


const levels = [
  {
    imgURL: uk,
    title: "ANGIELSKI"
  },
  {
    imgURL: spain,
    title: "HISZPAŃSKI"
  },
  {
    imgURL: poland,
    title: "POLSKI"
  },
];
const spanishTeachers = [
  {
    name: "Christian Guerrero",
    description:
      "Hello everyone, my name is Christian Leonardo Guerrero, an Environmental Engineer and language teacher born in the beautiful country of Colombia. I have been teaching English for 5 years in high schools and public institutes in Colombia and more than 3 years teaching Spanish to foreigners from Poland, the United States, the United Kingdom, and other countries and also to people like you who are passionate about learning languages. I like to teach with passion using didactic strategies that will surely be fun and interesting for you. I hope I can have the opportunity to be your Spanish teacher and show you how great this language is.",
  },
  {
    name: "Carlos Mendoza",
    description:
      "Hello there, my name is Carlos Mendoza and I'm an Environmental Engineer with a profound passion for language teaching. Hailing from the captivating nation of Colombia, I've spent more than 6 enriching years shaping young minds in English within public institutions in my homeland. What's more, over the past 2 years, I've had the privilege of guiding individuals from various corners of the globe in mastering Spanish. It's not just about teaching for me – it's about sparking curiosity and enthusiasm. If you're as fervent about language learning as I am, I'd be thrilled to be your Spanish instructor and unveil the wonders of this remarkable language.",
  },
  

  
];

const englishTeachers = [
  {
    name: "Agata Kozlowska",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique est at diam varius, vel molestie nulla consectetur. Vivamus consectetur urna quis neque rhoncus, id vestibulum leo consectetur. Integer nec purus ac magna efficitur pharetra. Aliquam non ipsum a risus fermentum mattis. Suspendisse potenti. Sed sodales diam nec nisl luctus, at bibendum ipsum interdum. Nulla facilisi. Quisque sed ante vel magna faucibus lobortis. Etiam in risus vel arcu fermentum vestibulum. Aliquam erat volutpat. Sed accumsan nulla at nulla pellentesque fermentum. Sed dignissim, eros vel fermentum facilisis, risus mauris finibus justo, vitae lacinia nulla nulla id ante."
  },
  {
    name: "Weronika Lingolandias",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique est at diam varius, vel molestie nulla consectetur. Vivamus consectetur urna quis neque rhoncus, id vestibulum leo consectetur. Integer nec purus ac magna efficitur pharetra. Aliquam non ipsum a risus fermentum mattis. Suspendisse potenti. Sed sodales diam nec nisl luctus, at bibendum ipsum interdum. Nulla facilisi. Quisque sed ante vel magna faucibus lobortis. Etiam in risus vel arcu fermentum vestibulum. Aliquam erat volutpat. Sed accumsan nulla at nulla pellentesque fermentum. Sed dignissim, eros vel fermentum facilisis, risus mauris finibus justo, vitae lacinia nulla nulla id ante."
  },
  {
    name: "Natalia Lingolandias",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique est at diam varius, vel molestie nulla consectetur. Vivamus consectetur urna quis neque rhoncus, id vestibulum leo consectetur. Integer nec purus ac magna efficitur pharetra. Aliquam non ipsum a risus fermentum mattis. Suspendisse potenti. Sed sodales diam nec nisl luctus, at bibendum ipsum interdum. Nulla facilisi. Quisque sed ante vel magna faucibus lobortis. Etiam in risus vel arcu fermentum vestibulum. Aliquam erat volutpat. Sed accumsan nulla at nulla pellentesque fermentum. Sed dignissim, eros vel fermentum facilisis, risus mauris finibus justo, vitae lacinia nulla nulla id ante."
  },
  {
    name: "Teacher Lingolandias",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique est at diam varius, vel molestie nulla consectetur. Vivamus consectetur urna quis neque rhoncus, id vestibulum leo consectetur. Integer nec purus ac magna efficitur pharetra. Aliquam non ipsum a risus fermentum mattis. Suspendisse potenti. Sed sodales diam nec nisl luctus, at bibendum ipsum interdum. Nulla facilisi. Quisque sed ante vel magna faucibus lobortis. Etiam in risus vel arcu fermentum vestibulum. Aliquam erat volutpat. Sed accumsan nulla at nulla pellentesque fermentum. Sed dignissim, eros vel fermentum facilisis, risus mauris finibus justo, vitae lacinia nulla nulla id ante."
  },
  
]
const teachers = [
  {
    quote: '"Learning is a treasure that will follow its owner everywhere."',
    title: "Nauczyciele Języka Angielskiego",
    crew: englishTeachers.length,
    flag: uksquare,
    link: "/enteachers",
  },
  {
    quote:
      '"El aprendizaje es un tesoro que sigue a su dueño en todas partes."',
    title: "Nauczyciele Języka Hiszpańskiego",
    crew: spanishTeachers.length,
    flag: uksquare,
    link: "/esteachers",
  },
  {
    quote: '"Nauka to skarb, który towarzyszy swemu właścicielowi wszędzie."',
    title: "nauczyciele Języka Polskiego Jako Języka Obcego ",
    crew: englishTeachers.length,
    flag: uksquare,
    link: "/enteachers",
  },
];


export { levels, teachers, spanishTeachers , englishTeachers};
