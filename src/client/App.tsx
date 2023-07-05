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
      </Routes>
    </HistoryRouter>
  );
}
