import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Curriculo from "./pages/Curriculo";
import CartaApresentacao from "./pages/CartaApresentacao";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curriculo" element={<Curriculo />} />
      <Route
        path="/carta-apresentacao"
        element={<CartaApresentacao />}
      />
    </Routes>
  );
}