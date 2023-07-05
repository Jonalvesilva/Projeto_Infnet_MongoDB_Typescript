import { ResponsiveCardList } from "../../components/ResponsiveCardList";
import { useState, useEffect } from "react";
import { getAlunos } from "../../utils/alunos/getAlunos";
import { Generic } from "../../../shared/types";

const initial = {
  aluno: [] as Generic[],
};

export function AlunosCardList() {
  const [obj, setObject] = useState(initial.aluno);
  useEffect(() => {
    getAlunos().then((data) => {
      data.map((element: Generic) => {
        return element;
      });
      setObject(data);
    });
  }, []);
  return (
    <div className="bg-slate-800 h-full">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-2xl font-bold text-cyan-600">Alunos</h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Conheça nosso time de alunos
          </h1>
        </div>
        <ResponsiveCardList generic={obj} />
      </section>
    </div>
  );
}
