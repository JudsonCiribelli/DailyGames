import Container from "../_components/Container-Component/containerComponent";
import userImg from "../../../public/user.jpg";
import Image from "next/image";
import { Share } from "lucide-react";
import CardComponent from "./_components/Card-Component/cardComponent";
import { Metadata } from "next";

export const MetadaProfile: Metadata = {
  title: "Meu perfil - Daily Games",
  description: "Perfil do desenvolvedor",
};

const ProfilePage = () => {
  return (
    <main className="w-full ">
      <Container>
        <section className="flex flex-col items-center justify-between mt-8 mb-6 relative gap-3 sm:flex-row">
          <div className="w-full flex flex-col items-center gap-4 text-lg sm:flex-row justify-center sm:justify-normal">
            <Image
              src={userImg}
              className="rounded-full w-56 h-56 object-cover"
              alt="Imagem de usuarios"
            />
            <h1 className="text-2xl font-bold">Judson Ciribelli</h1>
          </div>
          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-between">
            <button className="text-white bg-slate-700 p-2 rounded-lg">
              Configurações
            </button>
            <button className="text-white bg-slate-700 p-2 rounded-lg">
              <Share size={24} />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row mb-5">
          <div className="flex-grow flex-wrap">
            <CardComponent />
          </div>
          <div className="flex-grow flex-wrap">
            <CardComponent />
          </div>
          <div className="flex-grow flex-wrap">
            <CardComponent />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default ProfilePage;
