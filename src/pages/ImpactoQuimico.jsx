import Layout from "../layout/Layout";
import ImpactoQuimicoHero from "../components/sections/ImpactoQuimicoHero";
import ContaminantesSection from "../components/sections/ContaminantesSection";
import MetodosSection from "../components/sections/MetodosSection";
import TecnologiaSection from "../components/sections/TecnologiaSection";
import UsoResponsableSection from "../components/sections/UsoResponsableSection";

export default function ImpactoQuimico() {
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