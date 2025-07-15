import Container from "@/app/_components/Container-Component/containerComponent";
import { GetData } from "@/app/data-acess/games/get-Data";
import { GetDailyGames } from "@/app/data-acess/games/get-Games";
import { DailyGamesProps } from "@/types/game";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const GameDetails = async ({ params: { id } }: { params: { id: number } }) => {
  const data: DailyGamesProps = await GetData(id);
  const dailyGames: DailyGamesProps = await GetDailyGames();

  if (!data) {
    redirect("/");
  }
  console.log(data);

  return (
    <main className="w-full">
      <div className=" bg-black h-80 sm:h-96 w-full relative">
        <Image
          src={data.image_url}
          fill={true}
          alt={data.title}
          quality={100}
        />
      </div>
      <Container>
        <div className="flex flex-col mt-2 gap-4">
          <h1 className="text-2xl text-black font-bold">{data.title}</h1>
          <p className="text-black text-sm mt-4">{data.description}</p>
          <div className="flex flex-col">
            <h2 className="font-bold text-black text-lg">Categorias</h2>
            <div className="flex mb-4">
              {data.categories.map((item) => (
                <div
                  key={data.id}
                  className="bg-slate-300 mr-1 p-1 rounded-lg border-1"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <h2 className="font-bold text-black text-lg">Plataformas</h2>
            <div className="flex mb-4">
              {data.platforms.map((item) => (
                <div
                  key={data.id}
                  className="bg-slate-300 mr-1 p-1 rounded-lg border-1"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-black font-semibold">
            Data de lançamento:{" "}
            <span className="text-muted-foreground font-normal">
              {data.release}
            </span>
          </h2>

          <div className="flex flex-col mb-4">
            <h1 className="text-xl font-bold text-black mb-2">
              Outros jogos que recomendamos:
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
        </div>
      </Container>
    </main>
  );
};

export default GameDetails;
