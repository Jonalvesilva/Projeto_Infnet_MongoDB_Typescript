import { RoutesAuthChecker } from "../components/RouteAuthChecker";
import { HomeCard } from "../components/HomeCard";

export function Home() {
  return (
    <div className="bg-slate-800 h-full lg:h-[850px]">
      <RoutesAuthChecker />

      <h2 className="text-white text-lg font-semibold pt-10 md:pt-[100px] pb-6 px-2 text-center md:text-3xl">
        Bem Vindo ao Portal da Escola Casemiro Filho
      </h2>

      <div className=" w-[90%] mx-auto flex flex-col gap-4  pb-10 items-center lg:flex-row lg:justify-around md:my-12">
        <HomeCard
          title="Alunos"
          subtitle="Por meio do estudo você encontrará tudo que precisa para conquistar seus sonhos."
          img="aluno.jpg"
          buttonTitle="Gerenciar alunos"
          linkTo="/alunos"
        />
        <HomeCard
          title="Professores"
          subtitle="A educação é uma arma que deixa mais poderoso quem a usa, sem machucar ninguém."
          img="professor.jpg"
          buttonTitle="Gerenciar professores"
          linkTo="/professores"
        />
        <HomeCard
          title="Diretores"
          subtitle="O homem nasceu para aprender tanto quanto a vida lhe permita."
          img="diretor.jpg"
          buttonTitle="Gerenciar diretores"
          linkTo="/diretores"
        />
      </div>
    </div>
  );
}
