import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchingData from "../services/api";

function PotionsPage() {
  const [potions, setPotions] = useState([]);

  useEffect(() => {
    fetchingData("/api/secrets").then(setPotions);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {potions.map((el, index) => {
        return (
          <Link to={`/riddle/${index + 1}`} key={index}>
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
