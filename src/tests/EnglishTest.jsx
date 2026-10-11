import bank from "./banks/en.js";
import LevelTestRunner from "./LevelTestRunner.jsx";

export default function EnglishTest() {
  return <LevelTestRunner bank={bank} endpoint="/englishscore" testKey="en" />;
}
