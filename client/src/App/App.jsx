import { useState } from "react";

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
    >
      <QuestionsPotionPage />
    </div>
  );
}

export default App;
