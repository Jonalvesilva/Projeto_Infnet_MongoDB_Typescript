import { Link } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import { useGlobalStore } from "../useGlobalStore";
import { logout } from "../utils/logout";
import { Button } from "../components/Button";

const props = {
  logotipo: "logo.png",
  title: "Escola Técnica Casemiro Filho",
};

export function Appbar() {
  const isLoading = useGlobalStore((state) => state.isLoading);
  const isAuthenticated = useGlobalStore((state) => state.isAuthenticated);
  return (
    <div className="h-[120px] w-full flex bg-slate-900 sticky">
      <div id="div-logo" className="w-[250px]">
        <Link to="/">
          <img src={props.logotipo} className="w-full h-full p-3" alt=""></img>
        </Link>
      </div>
      <div
        id="div-title"
        className="w-full flex text-white text-md font-bold pr-2 justify-end items-center md:text-2xl lg:text-3xl"
      >
        {!isAuthenticated && <h2>{props.title}</h2>}
        {isAuthenticated && <FuncionarioView />}

        {isAuthenticated && (
          <Button
            children={`Sair`}
            onClick={logout}
            className="bg-white text-black py-2 px-2 text-lg rounded-xl md:px-4 md:text-2xl"
          />
        )}
        {isLoading && <FiLoader className="animate-spin ml-4" />}
      </div>
    </div>
  );
}

export function FuncionarioView() {
  const funcionario = useGlobalStore((state) => state.funcionario);
  return (
    <div className="flex flex-row items-center gap-4 mr-2 md:mr-6">
      <img
        src="https://picsum.photos/200/200"
        className="rounded-full w-10 md:w-14"
      ></img>
      <span className="text-lg text-white font-bold text-center md:text-2xl">
        {funcionario.nome} {funcionario.sobrenome}
      </span>
    </div>
  );
}
