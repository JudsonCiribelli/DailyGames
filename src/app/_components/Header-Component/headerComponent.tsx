import { GameControllerIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className="w-full flex items-center justify-evenly h-32 bg-slate-200">
      <div className="flex gap-3 ">
        <Link href="/">
          <h1 className="text-xl text-black font-bold">
            Daily
            <span className="text-xl font-bold text-orange-400">Games</span>
          </h1>
        </Link>
        <Link href="/" className="p-1  rounded-lg border-1 font-medium text-sm">
          Games
        </Link>
        <Link
          href="/profile"
          className="p-1  rounded-lg border-1 font-medium text-sm"
        >
          Perfil
        </Link>
      </div>
      <div>
        <Link href="/formData">
          <GameControllerIcon size={32} />
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
