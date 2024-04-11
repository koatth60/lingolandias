import { poland, spain, uk, polandsquare, spainsquare, uksquare} from "../assets/export.js";

const levels = [
  {
  imgURL: uk ,
  title: "ANGIELSKI",
  
},
{
  imgURL: spain,
  title: "HISZPAŃSKI",

},
{
  imgURL: poland,
  title: "POLSKI",
  
}
];

const teachers = [
  {
    quote: '"Learning is a treasure that will follow its owner everywhere."',
    title : "Nauczyciele Języka Angielskiego",
    crew : '7',
    flag : uksquare,
    link: "/enteachers"
  },
  {
    quote: '"El aprendizaje es un tesoro que sigue a su dueño en todas partes."',
    title : "Nauczyciele Języka Hiszpańskiego",
    crew : '2',
    flag : uksquare,
    link: "/esteachers"
  },
  {
    quote: '"Nauka to skarb, który towarzyszy swemu właścicielowi wszędzie."',
    title : "nauczyciele Języka Polskiego Jako Języka Obcego ",
    crew : '5',
    flag : uksquare,
    link: "/enteachers"
  }
]

export { levels, teachers };
