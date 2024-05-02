import Image from "next/image";
import Side from "./Side/sidebar";
import Cartas from "./cartoes/card";
import Foot from "./footer/Foot";


export default function Home() {
  return (
  <div>
  <Side></Side>
  <Cartas></Cartas>
  <Foot></Foot>
  </div>
  );
}
