import { HorizontalCard } from "../../components/HorizontalCard";
import { getAluno } from "../../utils/alunos/getAluno";
import type { Generic } from "../../../shared/types";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteAluno } from "../../utils/alunos/deleteAluno";
import toast from "react-simple-toasts";
import { Toast } from "../../components/Toast";
import { LinkButton } from "../../components/LinkButton";

const initial = {
  aluno: {} as Generic,
};

export function AlunosProfile() {
  const params = useParams();
  const navigate = useNavigate();

  const [obj, setObject] = useState(initial.aluno);
  useEffect(() => {
    getAluno(params.id!).then((data: Generic) => {
      if (!data) {
        navigate("/alunos");
      }
      setObject({ ...data, hashId: params.id });
      return data;
    });
  }, []);

  async function onClickDelete() {
    await deleteAluno(params.id!)
      .then(() => {
        toast("Aluno Deletado", {
          render: (message) => (
            <Toast
              className="bg-green-800 p-4 text-white text-lg md:text-xl rounded-full"
              message={message}
            />
          ),
        });
        navigate("/alunos");
      })
      .catch(() => {
        toast("Houve um erro ao deletar o aluno", {
          render: (message) => (
            <Toast
              className="bg-red-700 p-4 text-white text-lg md:text-xl rounded-full"
              message={message}
            />
          ),
        });
      });
  }

  return (
    <div className="bg-slate-800 h-[850px] flex items-center justify-center flex-col">
      <LinkButton to="/alunos" className="text-white mb-10 text-xl underline">
        Voltar Time de Alunos
      </LinkButton>
      <HorizontalCard
        generic={obj}
        delete={onClickDelete}
        edit="/alunos/editar/"
      />
    </div>
  );
}
