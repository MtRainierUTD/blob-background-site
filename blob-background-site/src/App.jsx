import React from "react";
import BlobBackground from "./BlobBackground";
import "./index.css";

function App() {
  return (
    <>
      <BlobBackground />
      <div className="main-content">
        <h1>Welcome to My Blob Site</h1>
        <p>This is a test layout with floating animated blobs in the background.</p>
      </div>
    </>
  );
}

export default App;
