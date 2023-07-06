import { ResponsiveCardList } from "../../components/ResponsiveCardList";
import { useState, useEffect } from "react";
import { getProfessores } from "../../utils/professores/getProfessores";
import { Generic } from "../../../shared/types";
import { LinkButton } from "../../components/LinkButton";

const initial = {
  professor: [] as Generic[],
};

export function ProfessoresCardList() {
  const [obj, setObject] = useState(initial.professor);
  useEffect(() => {
    getProfessores().then((data) => {
      data.map((element: Generic) => {
        return element;
      });
      setObject(data);
    });
  }, []);
  return (
    <div className="bg-slate-800 h-full">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="mb-8">
          <LinkButton to="/home" className="text-xl text-white underline">
            Voltar Para Home
          </LinkButton>
        </div>
        <div className="text-center pb-12">
          <h2 className="text-2xl font-bold text-cyan-600">Professores</h2>
          <div className="flex items-center justify-between mt-2">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
              Time de Professores
            </h1>
            <LinkButton
              to={`/professores/create`}
              className="bg-green-700 py-3 px-6 text-lg text-white rounded-full"
            >
              Cadastrar Professor
            </LinkButton>
          </div>
        </div>
        <ResponsiveCardList generic={obj} link="/professores/" />
      </section>
    </div>
  );
}
