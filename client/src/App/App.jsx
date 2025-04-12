import { useState } from "react";
import PotionsPage from '../pages/PotionsPage'

import QuestionsPotionPage from "../pages/QuestionsPotionPage";

function App() {
  return (
    <div
      style={{
        background: "url('/back.webp')",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    ><PotionsPage /></div>
    
      <QuestionsPotionPage />
    </div>
 dev
  );
}

export default App;
