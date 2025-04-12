import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import QuestionsPotionPage from "../pages/QuestionsPotionPage";
import PotionsPage from "../pages/PotionsPage";

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
      <Router>
        <Routes>
          <Route path="/" element={<PotionsPage />} />
          <Route path="/riddle/:id" element={<QuestionsPotionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
