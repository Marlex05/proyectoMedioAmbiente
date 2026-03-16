import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ImpactoQuimico from "./pages/ImpactoQuimico";
import Referencias from "./pages/Referencias";
import Propuestas from "./pages/Propuestas";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      
      <Route
        path="/impacto-quimico"
        element={<ImpactoQuimico />}
      />

      <Route
        path="/propuestas"
        element={<Propuestas />}
      />

      <Route
        path="/referencias"
        element={<Referencias />}
      />

    </Routes>
  );
}