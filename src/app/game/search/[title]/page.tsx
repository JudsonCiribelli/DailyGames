import Container from "@/app/_components/Container-Component/containerComponent";
import GameContainer from "@/app/_components/Gamer-Container/gameContainer";
import InputComponent from "@/app/_components/Input-Component/inputComponent";
import { GetGameByTitle } from "@/app/data-acess/games/get-Game-Title";
import { DailyGamesProps } from "@/types/game";

const SearchPage = async ({
  params: { title },
}: {
  params: { title: string };
}) => {
  const games: DailyGamesProps[] = await GetGameByTitle(title);

  return (
    <main className="w-full text-black">
      <Container>
        <InputComponent />
        <h1 className="text-2xl font-bold mt-5 mb-8">
          Veja o que encontramos!
        </h1>
        {!games && (
          <p className="text-xl text-red-500 font-bold">
            Este jogo não foi encotrado!
          </p>
        )}
        <section className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 mb-2">
          {games &&
            games.map((item) => <GameContainer key={item.id} data={item} />)}
        </section>
      </Container>
    </main>
  );
};

export default SearchPage;
