import { RoutesAuthChecker } from "../components/RouteAuthChecker";

export function Home() {
  return (
    <div className="bg-blue-800 w-full h-full">
      <RoutesAuthChecker />
      <div className=""></div>
    </div>
  );
}
