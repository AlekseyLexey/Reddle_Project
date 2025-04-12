<<<<<<< HEAD
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
=======
import secrets from "../../../secrets.json";
import { useState } from "react";
import './potionsPage.css'


function PotionsPage() {
  const [potions, setPotions] = useState([
    ...secrets.simple_riddles,
    ...secrets.medium_riddles,
    ...secrets.hard_riddles
  ]);
  console.log(potions);

  return (
    <div className="potions-container">
      <div className="head">Выберите напиток </div>
      {potions.map((el, index) => {
        return (
          <div key={index}>
>>>>>>> feat/StylePotionsPage
            <img
              src={`potion-images/${el.image}`}
              alt="potion"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
            <div>{el.author}</div>
<<<<<<< HEAD
          </Link>
=======
          </div>
>>>>>>> feat/StylePotionsPage
        );
      })}
    </div>
  );
}

export default PotionsPage;
