import { HorizontalCard } from "../../components/HorizontalCard";
import { getProfessor } from "../../utils/professores/getProfessor";
import { deleteProfessor } from "../../utils/professores/deleteProfessor";
import type { Generic } from "../../../shared/types";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { Toast } from "../../components/Toast";
import { LinkButton } from "../../components/LinkButton";

const initial = {
  professor: {} as Generic,
};

export function ProfessorProfile() {
  const params = useParams();
  const navigate = useNavigate();
  const [obj, setObject] = useState(initial.professor);

  useEffect(() => {
    getProfessor(params.id!).then((data: Generic) => {
      if (!data) {
        navigate("/professores");
      }
      setObject({ ...data, hashId: params.id });
      return data;
    });
  }, []);

  async function onClickDelete() {
    await deleteProfessor(params.id!)
      .then(() => {
        toast("Professor Deletado", {
          render: (message) => (
            <Toast
              className="bg-green-800 p-4 text-white text-lg md:text-xl rounded-full"
              message={message}
            />
          ),
        });
        navigate("/professores");
      })
      .catch(() => {
        toast("Houve um erro ao deletar o professor", {
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
      <LinkButton
        to="/professores"
        className="text-white mb-10 text-xl underline"
      >
        Voltar Time de Professores
      </LinkButton>
      <HorizontalCard
        generic={obj}
        delete={onClickDelete}
        edit="/professores/editar/"
      />
    </div>
  );
}
