import { useState } from "react";
import PotionsPage from '../pages/PotionsPage'

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
  );
}

export default App;

