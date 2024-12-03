import React from "react";
import Square from "./Square";

function Board({ squares, onSquareClick }) {
  return (
    <div>
      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: "flex" }}>
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return (
              <Square
                key={index}
                value={squares[index]}
                onClick={() => onSquareClick(index)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
