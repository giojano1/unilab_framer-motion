import { Reorder } from "framer-motion";
import { useState } from "react";
const cardList = [
  {
    id: 1,
    title: "Card 1",
    desc: "This is card 1",
    bg: "yellow",
  },
  {
    id: 2,
    title: "Card 2",
    desc: "This is card 2",
    bg: "green",
  },
  {
    id: 3,
    title: "Card 3",
    desc: "This is card 3",
    bg: "blue",
  },
  {
    id: 4,
    title: "Card 4",
    desc: "This is card 4",
    bg: "pink",
  },
];
export default function Animation2() {
  const [cards, setCards] = useState(cardList);

  return (
    <div className="flex justify-center my-5">
      <Reorder.Group values={cards} onReorder={setCards}>
        {cards.map((card) => (
          <Reorder.Item key={card.id} value={card} className="mb-5">
            <div
              className={`
                w-[200px] min-h-[100px] shadow rounded-lg p-5
                ${card.bg === "yellow" && "bg-yellow-200"}
              ${card.bg === "green" && "bg-green-200"},
             ${card.bg === "blue" && "bg-blue-200"}
               ${card.bg === "pink" && "bg-pink-200"}
              `}
            >
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
