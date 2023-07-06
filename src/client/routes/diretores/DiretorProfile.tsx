import { HorizontalCard } from "../../components/HorizontalCard";
import { getDiretor } from "../../utils/diretores/getDiretor";
import { deleteDiretor } from "../../utils/diretores/deleteDiretor";
import type { Generic } from "../../../shared/types";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { Toast } from "../../components/Toast";
import { LinkButton } from "../../components/LinkButton";

const initial = {
  diretor: {} as Generic,
};

export function DiretorProfile() {
  const params = useParams();
  const navigate = useNavigate();
  const [obj, setObject] = useState(initial.diretor);

  useEffect(() => {
    getDiretor(params.id!).then((data: Generic) => {
      if (!data) {
        navigate("/diretores");
      }
      setObject({ ...data, hashId: params.id });
      return data;
    });
  }, []);

  async function onClickDelete() {
    await deleteDiretor(params.id!)
      .then(() => {
        toast("Diretor Deletado", {
          render: (message) => (
            <Toast
              className="bg-green-800 p-4 text-white text-lg md:text-xl rounded-full"
              message={message}
            />
          ),
        });
        navigate("/diretores");
      })
      .catch(() => {
        toast("Houve um erro ao deletar o diretor", {
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
        to="/diretores"
        className="text-white mb-10 text-xl underline"
      >
        Voltar Time de Diretores
      </LinkButton>
      <HorizontalCard
        generic={obj}
        delete={onClickDelete}
        edit="/diretores/editar/"
      />
    </div>
  );
}
