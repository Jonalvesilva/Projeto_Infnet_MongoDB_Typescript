import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Appbar } from "./components/Appbar";
import { SignIn } from "./routes/login/SignIn";
import { Home } from "./routes/Home";

export function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
