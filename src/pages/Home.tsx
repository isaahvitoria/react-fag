import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <h1 className="text-2xl font-bold">Escolha a página:</h1>
      <Link to="/tailwind" className="text-blue-500 underline">
        Página com Tailwind
      </Link>
      <Link to="/styled-components" className="text-blue-500 underline">
        Página com Styled Components
      </Link>
    </div>
  );
}
