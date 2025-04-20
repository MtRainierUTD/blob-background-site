import React, { useState } from "react";
import BlobBackground from "./BlobBackground";
import "./index.css";

const themes = {
  nature: {
    background: "linear-gradient(120deg, #e6ffe6, #ccffcc)",
    blobs: ["#7ae582", "#fff799", "#7fffd4", "#aefd72"],
    morphColors: ["#b3ffab", "#ccffd8"],
    textColor: "#174c34",
  },
  twilight: {
    background: "linear-gradient(120deg, #1c1c54, #3a1c71)",
    blobs: ["#4b0082", "#3f00ff", "#6969bf", "#6a467e"],
    morphColors: ["#5050ff", "#6a2b92"],
    textColor: "#f1f1f1",
  },
  sunrise: {
    background: "linear-gradient(120deg, #ffb347, #ff7e87)",
    blobs: ["#ffa07a", "#f08080", "#a33b3b", "#ef80a0"],
    morphColors: ["#fcd483", "#f58b56"],
    textColor: "#5b0011",
  },
};

function App() {
  const [theme, setTheme] = useState("nature");

  const { background, blobs, morphColors, textColor } = themes[theme];

  return (
    <div
      style={{
        background,
        color: textColor,
        transition: "all 0.5s ease",
        minHeight: "100vh",
      }}
    >
      <BlobBackground colors={blobs} morphColors={morphColors} />
      <div className="main-content">
        <h1>Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</h1>
        <p>This is a themed blob background site.</p>

        <div className="theme-buttons">
          <button onClick={() => setTheme("nature")}>🌿 Nature</button>
          <button onClick={() => setTheme("twilight")}>🌌 Twilight</button>
          <button onClick={() => setTheme("sunrise")}>🌅 Sunrise</button>
        </div>
      </div>
    </div>
  );
}

export default App;
