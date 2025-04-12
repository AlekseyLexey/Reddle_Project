import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";
import potionsData from "../../../secrets.json";
import ingredients from "../../../ingredients.json";

const QuestionsPotionPage = () => {
  const [answers, setAnswers] = useState([]);
  const [isSuccess, setSuccess] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { hard_riddles, medium_riddles, simple_riddles } = potionsData;
  const allRiddles = [...simple_riddles, ...medium_riddles, ...hard_riddles];
  const data = ingredients.ingredients;
  const allIngredients = [
    ...data.liquids_and_powders,
    ...data.magical_ingredients,
    ...data.plant_based_ingredients,
    ...data.unusual_additions
  ];

  const potion = allRiddles[id];

  if (!potion) {
    return <Typography variant="h2">Зелье не найдено</Typography>;
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
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px" }}
      >
        К ЗЕЛЬЯМ!
      </Button>
      <Box
        sx={{
          position: "sticky",
          top: "0",
          left: "0",
          color: "#000"
        }}
      >
        <Typography
          variant="h5"
          sx={{
            backgroundColor: "#FDDC5C",
            padding: "10px"
          }}
        >
          {potion.riddle}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FDDC5C",
            marginBottom: "30px",
            padding: "5px"
          }}
        >
          Собрано {answers.length} из {potion.answer.length} ингредиентов.
        </Typography>
      </Box>

      {!isSuccess ? (
        <Grid container spacing={1} justifyContent="center">
          {allIngredients.map((ingr, i) => (
            <Grid item key={i}>
              <Card
                sx={{
                  width: "200px",
                  cursor: "pointer",
                  backgroundColor: "#333",
                  color: "#fff",
                  borderRadius: "12px"
                }}
                onClick={() =>
                  setAnswers((prev) => {
                    return [...prev, ingr.name];
                  })
                }
              >
                <CardContent>
                  <Typography variant="body1">
                    {i + 1} {ingr.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : isSuccess === "Верно" ? (
        <Box textAlign="center">
          <Typography variant="h3" sx={{ color: "green" }}>
            ВЕРНО!
          </Typography>
          <img
            src={`/potion-images/${potion.image}`}
            alt="Potion"
            sx={{ marginTop: "20px", maxWidth: "100%" }}
          />
        </Box>
      ) : (
        <Box textAlign="center">
          <Typography variant="h3" sx={{ color: "red" }}>
            К сожалению нет(((
          </Typography>
          <img
            src="failPotion.png"
            alt="FailImg"
            sx={{ marginTop: "20px", maxWidth: "100%" }}
          />
        </Box>
      )}
    </>
  );
};

export default QuestionsPotionPage;
