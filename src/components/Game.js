import React, { useState } from "react";
import Board from "./Board";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic-Tac-Toe</h1>
      <Board squares={squares} onSquareClick={handleClick} />
      <p style={{ fontSize: "18px", marginTop: "20px" }}>{status}</p>
      <button
        style={{ marginTop: "10px", padding: "10px 20px", fontSize: "16px" }}
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default Game;
