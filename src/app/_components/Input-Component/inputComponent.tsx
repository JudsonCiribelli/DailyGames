"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSearchGame = (e: FormEvent) => {
    e.preventDefault();

    if (inputValue === "") return;
    router.push(`/game/search/${inputValue}`);
  };

  return (
    <form
      onSubmit={handleSearchGame}
      className="flex gap-2 my-5 items-center justify-between"
    >
      <input
        className="w-full p-2 rounded-lg border-1 outline-none"
        type="text"
        placeholder="Procurando por algum jogo ? "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">
        <Search size={25} color="#ea580c" />
      </button>
    </form>
  );
};

export default InputComponent;
