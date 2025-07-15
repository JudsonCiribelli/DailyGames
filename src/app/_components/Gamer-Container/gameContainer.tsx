import { DailyGamesProps } from "@/types/game";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface GameContainerProps {
  data: DailyGamesProps;
}

const GameContainer = ({ data }: GameContainerProps) => {
  return (
    <Link href={`/game/${data.id}`}>
      <section className="w-full bg-slate-200 p-4 mb-5 rounded-lg">
        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image
            src={data.image_url}
            alt={data.title}
            quality={100}
            fill={true}
            className="max-h-86 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm font-bold px-2 text-black text-ellipsis truncate whitespace-normal">
            {data.title}
          </p>
          <CircleArrowRight size={25} />
        </div>
      </section>
    </Link>
  );
};

export default GameContainer;
