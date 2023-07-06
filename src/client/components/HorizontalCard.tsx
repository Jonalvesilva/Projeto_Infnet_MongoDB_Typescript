import type { Generic } from "../../shared/types";
import { LinkButton } from "./LinkButton";
import { Button } from "./Button";

type props = {
  generic: Generic;
  delete?: () => void;
  edit?: string;
};

function reformatDate(dateStr: string) {
  const str = dateStr.slice(0, 10);
  const dArr = str.split("-");
  return dArr[2] + "/" + dArr[1] + "/" + dArr[0];
}

export function HorizontalCard(props: props) {
  const date = reformatDate(`${props.generic.data_nasc}`);
  return (
    <div className="w-[90%] lg:flex lg:justify-center ">
      <div
        className="h-48 w-full md:h-[350px]  lg:h-[400px] lg:w-[400px] flex-none bg-cover rounded-t 
      lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url(https://picsum.photos/200/300.jpg)]"
      ></div>
      <div
        className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t 
      lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 
      flex flex-col justify-between leading-normal lg:h-[400px] lg:w-[500px]"
      >
        <div className="mb-8">
          <div className="text-black font-bold text-xl pb-6 md:text-2xl lg:text-3xl">{`${props.generic.nome} ${props.generic.sobrenome}`}</div>
          <p className="text-slate-700 text-base pb-6 md:text-lg lg:text-2xl">
            {props.generic.area
              ? `Área: ${props.generic.area}`
              : `Turma: ${props.generic.turma}`}
          </p>
          <p className="text-sm text-slate-600 md:text-lg lg:text-xl flex items-center">{`Data Nascimento: ${date}`}</p>
          <div className="pt-10 lg:pt-12 flex gap-4">
            <LinkButton
              to={`${props.edit}${props.generic.hashId}`}
              className="bg-green-700 py-3 px-6 text-md md:text-lg lg:text-xl text-white rounded-full"
            >
              Editar
            </LinkButton>
            <Button
              onClick={props.delete}
              className="bg-red-700 py-3 px-6 text-md md:text-lg lg:text-xl text-white rounded-full"
            >
              Deletar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
