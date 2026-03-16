import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import ImpactoQuimicoHero from "../components/sections/ImpactoQuimicoHero";
import ContaminantesSection from "../components/sections/ContaminantesSection";
import MetodosSection from "../components/sections/MetodosSection";
import TecnologiaSection from "../components/sections/TecnologiaSection";
import UsoResponsableSection from "../components/sections/UsoResponsableSection";

export default function ImpactoQuimico() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <Layout>
      <ImpactoQuimicoHero />
      <ContaminantesSection />
      <MetodosSection />
      <TecnologiaSection />
      <UsoResponsableSection />
    </Layout>
  );
}