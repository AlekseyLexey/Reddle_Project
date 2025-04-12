import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import potionsData from "../../../secrets.json";
import ingredients from "../../../ingredients.json";

const QuestionsPotionPage = () => {
  const [answers, setAnswers] = useState([]);
  const [isSuccess, setSuccess] = useState(null);
  //   const { id } = useParams();

  const { hard_riddles, medium_riddles, simple_riddles } = potionsData;
  const allRiddles = [...simple_riddles, ...medium_riddles, ...hard_riddles];
  const data = ingredients.ingredients;
  const allIngredients = [
    ...data.liquids_and_powders,
    ...data.magical_ingredients,
    ...data.plant_based_ingredients,
    ...data.unusual_additions
  ];

  const potion = allRiddles["1"];

  if (!potion) {
    return <div>Зелье не найдено</div>;
  }
  useEffect(() => {
    if (potion.answer.length === answers.length) {
      if (
        JSON.stringify(potion.answer.sort()).toLowerCase() ===
        JSON.stringify(answers.sort()).toLowerCase()
      ) {
        setSuccess("Верно");
      } else {
        setSuccess("Не верно");
      }
    }
  }, [answers]);

  return (
    <>
      <a href="/">К ЗЕЛЬЯМ!</a>
      <h5 style={{ backgroundColor: "#333", fontSize: "30px" }}>
        {potion.riddle}
      </h5>
      <div style={{ backgroundColor: "#333", marginBottom: "30px" }}>
        Собрано {answers.length} из {potion.answer.length} ингридиентов.
      </div>
      {!isSuccess ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {allIngredients.map((ingr, i) => (
            <div
              style={{
                display: "flex",
                width: "200px",
                minHeight: "50px",
                cursor: "pointer",
                backgroundColor: "#333",
                borderRadius: "12px",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
              onClick={() =>
                setAnswers((prev) => {
                  return [...prev, ingr.name];
                })
              }
              key={i}
            >
              {i + 1} {ingr.name}
            </div>
          ))}
        </div>
      ) : isSuccess === "Верно" ? (
        <div>
          <h4>ВЕРНО!</h4>
          <img src={`/potion-images/${potion.image}`} alt="Potion" />
        </div>
      ) : (
        <div style={{}}>
          <h4>К сожалению нет(</h4>
          <img src="failPotion.png" alt="FailImg" />
        </div>
      )}
    </>
  );
};

export default QuestionsPotionPage;
