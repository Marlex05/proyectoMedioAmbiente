import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ODS3Page from "./pages/odsTres";
import ImpactoQuimico from "./pages/ImpactoQuimico";
import Referencias from "./pages/Referencias";
import Propuestas from "./pages/Propuestas";
import ODS4Page from "./pages/odsCuatro";
import ODSCatorcePage from "./pages/odsCatorce";
import ODSQuincePage from "./pages/odsQuince";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/odsTres" element={<ODS3Page />} />
      <Route path="/odsCuatro" element={<ODS4Page />} />
      <Route path="/odsCatorce" element={<ODSCatorcePage />} />
      <Route path="/odsQuince" element={<ODSQuincePage />} />
      <Route path="/impacto-quimico" element={<ImpactoQuimico />} />
      <Route path="/propuestas" element={<Propuestas />} />
      <Route path="/referencias" element={<Referencias />} />
    </Routes>
  );
}