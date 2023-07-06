import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { browserHistory } from "./browserHistory";
import { Appbar } from "./components/Appbar";
import { SignIn } from "./routes/login/SignIn";
import { SignUp } from "./routes/login/SignUp";
import { AuthChecker } from "./components/AuthChecker";
import { Home } from "./routes/Home";
import { AlunosCardList } from "./routes/alunos/AlunosCardList";
import { AlunosProfile } from "./routes/alunos/AlunoProfile";
import { CreateAluno } from "./routes/alunos/CreateAluno";
import { EditAluno } from "./routes/alunos/EditAluno";

export function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <AuthChecker />
      <Appbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/alunos" element={<AlunosCardList />} />
        <Route path="/alunos/:id" element={<AlunosProfile />} />
        <Route path="/alunos/create" element={<CreateAluno />} />
        <Route path="/alunos/editar/:id" element={<EditAluno />} />
      </Routes>
    </HistoryRouter>
  );
}
