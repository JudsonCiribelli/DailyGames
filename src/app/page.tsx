import { DailyGamesProps } from "@/types/game";
import Container from "./_components/Container-Component/containerComponent";
import { GetDailyGames } from "./data-acess/games/get-Games";
import Link from "next/link";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import { GetAllGames } from "./data-acess/games/get-All-Games.";
import GameContainer from "./_components/Gamer-Container/gameContainer";
import InputComponent from "./_components/Input-Component/inputComponent";

const Home = async () => {
  const dailyGames: DailyGamesProps = await GetDailyGames();
  const data: DailyGamesProps[] = await GetAllGames();

  return (
    <main className="w-full">
      <Container>
        <div>
          <h1 className="text-xl font-bold text-black text-center mt-8 mb-5">
            Jogos exclusivos
          </h1>
          <Link href={`/game/${dailyGames.id}`}>
            <section className="w-full bg-black rounded-lg">
              <div className="w-full max-h-96 h-96 relative rounded-lg">
                <div className="absolute z-20 bottom-0 flex items-center justify-center m-2 gap-3">
                  <p className="font-bold text-xl text-white">
                    {dailyGames.title}
                  </p>
                  <CircleArrowRight size={26} color="#fff" />
                </div>
                <Image
                  src={dailyGames.image_url}
                  alt={dailyGames.title}
                  quality={100}
                  fill={true}
                  className="max-h-86 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                />
              </div>
            </section>
          </Link>
        </div>
        {/* Input Component  */}
        <InputComponent />
        <h1 className="text-xl font-bold text-black text-left mt-8 mb-5">
          Jogos para conhecer
        </h1>

        <h1 className="text-xl font-bold text-black text-center mt-8 mb-5">
          Jogos exclusivos
        </h1>
        <section className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 mb-2">
          {data.map((item) => (
            <GameContainer key={item.id} data={item} />
          ))}
        </section>
      </Container>
    </main>
  );
};
export default Home;
