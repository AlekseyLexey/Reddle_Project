import { useState } from "react";
import { Link } from "react-router-dom";

import secrets from "../../../secrets.json";

function PotionsPage() {
  const [potions, setPotions] = useState([
    ...secrets.simple_riddles,
    ...secrets.medium_riddles,
    ...secrets.hard_riddles
  ]);
  console.log(potions);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {potions.map((el, index) => {
        return (
          <Link to={`/riddle/${index}`} key={index}>
            <img
              src={`potion-images/${el.image}`}
              alt="potion"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
            <div>{el.author}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default PotionsPage;
