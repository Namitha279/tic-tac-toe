import React from "react";

function Square({ value, onClick }) {
  return (
    <button
      style={{
        width: "60px",
        height: "60px",
        fontSize: "24px",
        fontWeight: "bold",
        margin: "5px",
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
