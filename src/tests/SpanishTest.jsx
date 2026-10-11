import bank from "./banks/es.js";
import LevelTestRunner from "./LevelTestRunner.jsx";

export default function SpanishTest() {
  return <LevelTestRunner bank={bank} endpoint="/spanishscore" testKey="es" />;
}
