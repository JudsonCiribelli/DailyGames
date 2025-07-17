"use client";
import { CircleX, Pencil } from "lucide-react";
import { useState } from "react";

const CardComponent = () => {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("");

  const handleShowButton = () => {
    setShowInput(!showInput);

    if (input !== "") {
      setGameName(input);
    }

    setInput("");
  };
  return (
    <div className="w-full bg-slate-800 p-4 h-44 rounded-lg text-white flex flex-col justify-between">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            type="text"
            className="w-full bg-white rounded-lg p-1 text-black outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>
            <CircleX size={24} onClick={handleShowButton} />
          </button>
        </div>
      ) : (
        <button
          className="self-start cursor-pointer hover:scale-110 duration-200 transition-all"
          onClick={handleShowButton}
        >
          <Pencil size={24} />
        </button>
      )}
      {gameName && (
        <div>
          <span className="text-white">Jogo Favorito: </span>
          <p className="text-white font-bold">{gameName}</p>
        </div>
      )}
      {!gameName && <p className="font-bold text-white">Adicionar jogo</p>}
    </div>
  );
};

export default CardComponent;
