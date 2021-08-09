import "./styles.css";
import Card from "./components/Cards";
import { useState } from "react";

const menuItems = [
  ["Peesha", 420],
  ["Borgir", 134],
  ["Coke(Snorting wala)", 10],
  ["Coke(peene wala)", 200],
  ["Brownie", 180],
  ["Fried Rice", 95160],
  ["Lassunia", 200],
  ["Shev Puri", 1000]
];
export default function App() {
  const [menu, setMenu] = useState(menuItems);
  return (
    <div className="App">
      <Card menu={menu} setCards={setMenu} />
    </div>
  );
}
