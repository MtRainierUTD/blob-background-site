import React from "react";
import "./BlobBackground.css";

const BlobBackground = ({ colors, morphColors }) => {
  return (
    <div className="blob-container">
      {/* Standard circle gradient blobs */}
      <div className="blob blob1" style={{ background: colors[0] }} />
      <div className="blob blob2" style={{ background: colors[1] }} />
      <div className="blob blob3" style={{ background: colors[2] }} />
      <div className="blob blob4" style={{ background: colors[3] }} />

        {/* New morphing blobs */}
        <div className="morph-blob morph1" style={{ backgroundColor: morphColors[0] }} />
        <div className="morph-blob morph2" style={{ backgroundColor: morphColors[1] }} />
    </div>
  );
};

export default BlobBackground;
