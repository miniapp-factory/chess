"use client";

import { useState } from "react";

 // eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ChessGameProps {}

export function ChessGame({}: ChessGameProps) {
  const [board, setBoard] = useState<string[][]>([
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Chess Game</h2>
      <div className="grid grid-cols-8 gap-0">
        {board.flatMap((row, rowIndex) =>
          row.map((piece, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-12 h-12 flex items-center justify-center border border-gray-300"
            >
              <span className="text-2xl">{piece}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
