import { TextField } from "../../components/TextField";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGlobalStore } from "../../useGlobalStore";
import { FiLoader } from "react-icons/fi";
import { updateDiretor } from "../../utils/diretores/updateDiretor";
import toast from "react-simple-toasts";
import { Toast } from "../../components/Toast";
import { LinkButton } from "../../components/LinkButton";

const initialEditDiretor = {
  nome: "",
  sobrenome: "",
  area: "",
  data_nasc: new Date(),
};

export function EditDiretor() {
  const navigate = useNavigate();
  const params = useParams();
  const isLoading = useGlobalStore((state) => state.isLoading);
  const setIsLoading = useGlobalStore((state) => state.setIsLoading);
  const [form, setForm] = useState(initialEditDiretor);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    await updateDiretor(form, params.id!)
      .then(() => {
        toast("O diretor foi editado com sucesso", {
          render: (message) => (
            <Toast
              className="bg-green-800 p-4 text-white text-lg md:text-xl rounded-full"
              message={message}
            />
          ),
        });
        navigate(`/diretores/${params.id}`);
      })
      .catch(() => {
        toast("Não foi possível editar o diretor", {
          render: (message) => (
            <Toast
              className="bg-red-600 p-4 text-white text-lg md:text-xl rounded-full"
              message={message}
            />
          ),
        });
      });
  }

  return (
    <div className="bg-slate-800 h-[850px]">
      <div className="w-full text-center pt-10">
        <LinkButton
          to={`/diretores/${params.id}`}
          className="text-xl text-white underline"
        >
          Voltar Para Perfil Diretor
        </LinkButton>
      </div>
      <h1 className="text-center font-bold italic text-white font-serif py-12 text-2xl md:text-3xl ">
        Editar Diretor
      </h1>

      <form
        className="flex flex-col gap-2 mx-2 md:mx-auto md:max-w-screen-md"
        onSubmit={(event) => onSubmit(event)}
      >
        <label className="text-lg text-white">Nome:</label>
        <TextField
          placeholder="Digite o Nome"
          className={`h-12 rounded-xl px-2 my-2 text-lg`}
          value={form.nome}
          onChange={(nome) => setForm({ ...form, nome })}
          required
        />
        <label className="text-lg text-white">Sobrenome:</label>
        <TextField
          placeholder="Digite o Nome"
          className={`h-12 rounded-xl px-2 my-2 text-lg`}
          value={form.sobrenome}
          onChange={(sobrenome) => setForm({ ...form, sobrenome })}
          required
        />
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col w-full">
            <label className="text-lg text-white">Área:</label>
            <TextField
              placeholder="Digite a Área ou Cargo"
              className={`h-12 rounded-xl px-2 my-2 text-lg`}
              value={form.area}
              onChange={(area) => setForm({ ...form, area })}
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-lg text-white">Data Nascimento:</label>
            <input
              type="date"
              className={`h-12 rounded-xl px-2 my-2 text-lg`}
              onChange={(event) => {
                const a = event.target.value.split("-");
                const data_nasc = new Date(
                  Number(a[0]),
                  Number(a[1]) - 1,
                  Number(a[2])
                );
                setForm({ ...form, data_nasc });
              }}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-2 w-full h-10 bg-green-700 text-white"
        >
          {isLoading ? (
            <FiLoader className="text-white animate-spin text-lg inline" />
          ) : (
            `Enviar`
          )}
        </button>
      </form>
    </div>
  );
}
