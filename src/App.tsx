import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StyledComponents from "./pages/StyleComponents";
import Tailwind from "./pages/Tailwind";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styled-components" element={<StyledComponents />} />
        <Route path="/tailwind" element={<Tailwind />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;