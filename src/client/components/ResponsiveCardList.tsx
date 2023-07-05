import { LinkButton } from "./LinkButton";
import type { Generic } from "../../shared/types";

type props = {
  generic: Generic[];
};

export function ResponsiveCardList(props: props) {
  const arr = props.generic;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {arr.map((element, index) => {
        const image = `https://loremflickr.com/320/240/dog?random=${index}`;
        return (
          <div
            key={index}
            className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center"
          >
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={image}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                {`${element.nome} ${element.sobrenome}`}
              </p>
              <p className="text-base text-gray-400 font-normal">
                {element.area
                  ? `Área: ${element.area}`
                  : `Turma: ${element.turma}`}
              </p>
            </div>
            <LinkButton
              to={`/alunos/${element.hashId}`}
              className="bg-blue-600 mt-6 py-3 px-6 text-lg text-white rounded-full"
            >
              Ver Perfil
            </LinkButton>
          </div>
        );
      })}
    </div>
  );
}
