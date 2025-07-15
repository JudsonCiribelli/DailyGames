import { DailyGamesProps } from "@/types/game";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface GameContainerProps {
  data: DailyGamesProps;
}

const GameContainer = ({ data }: GameContainerProps) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-black text-center mt-8 mb-5">
        Jogos exclusivos
      </h1>
      <Link href={`/game/${data.id}`}>
        <section className="w-full bg-black rounded-lg">
          <div className="w-full max-h-96 h-96 relative rounded-lg">
            <div className="absolute z-20 bottom-0 flex items-center justify-center m-2 gap-3">
              <p className="font-bold text-xl text-white">{data.title}</p>
              <CircleArrowRight size={26} color="#fff" />
            </div>
            <Image
              src={data.image_url}
              alt={data.title}
              quality={100}
              fill={true}
              className="max-h-86 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            />
          </div>
        </section>
      </Link>
    </div>
  );
};

export default GameContainer;
