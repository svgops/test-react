import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Click anywhere below the text</h1>
      <h2>It is a canvas for you</h2>
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={e => {
          alert(e.clientX);
        }}
      />
    </div>
  );
}
