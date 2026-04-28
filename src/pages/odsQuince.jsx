import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import ods15 from "../assets/images/ods4.jpg";
import patriciaImg from "../assets/images/patricia-balvanera.jpeg";
import InvestigadorCard from "../components/sections/InvestigadorCard";

export default function ODSQuincePage() {
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
            <section className="w-full bg-white">

                {/* ODS 15 */}
                <section
                    id="ods15"
                    className="scroll-mt-30 mx-auto max-w-7xl px-8 pt-36 pb-20 flex flex-col lg:flex-row items-center gap-16"
                >
                    <div className="flex-1">
                        <span className="inline-flex items-center gap-2 bg-[#C5192D]/10 border border-[#C5192D]/30 rounded-full px-5 py-2 text-base font-bold tracking-widest uppercase text-[#8F1322] mb-7">
                            ODS 15
                        </span>

                        <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-tight">
                            Vida de Ecosistemas Terrestres
                        </h1>

                        <p className="mt-8 text-2xl text-slate-600 leading-relaxed text-left md:text-justify">
                            Busca proteger, restablecer y promover el uso sostenible de los ecosistemas terrestres.
                            Esto incluye la gestión de los bosques, la lucha contra la desertificación y la detención
                            de la pérdida de biodiversidad.
                        </p>

                        <div className="mt-8 h-2 w-28 rounded-full bg-[#C5192D]" />
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="h-[460px] w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                            <img
                                src={ods15}
                                alt="ODS 15 Vida de Ecosistemas Terrestres"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </section>

                <InvestigadorCard
                    id="investigadora-ods15"
                    nombre="Dra. Patricia Balvanera"
                    rol="Ecóloga mexicana especializada en biodiversidad y servicios ecosistémicos"
                    imagen={patriciaImg}
                    color="#C5192D"
                    descripcion={[
                        "La Dra. Patricia Balvanera es una ecóloga mexicana reconocida internacionalmente, investigadora del Instituto de Ecología A.C. (INECOL) y asociada a la UNAM.",
                        "Su trabajo se centra en el estudio de la biodiversidad y los servicios ecosistémicos, es decir, los beneficios que los ecosistemas brindan a los seres humanos.",
                        "Su currículo destaca por una amplia producción científica en revistas internacionales, participación en evaluaciones globales sobre biodiversidad y colaboración con redes científicas internacionales.",
                        "Además, ha contribuido al desarrollo de políticas ambientales y a la formación de nuevos investigadores, integrando el conocimiento ecológico en la toma de decisiones para el manejo sostenible de los recursos naturales.",
                    ]}
                    trabajoTitulo="Quantifying the evidence for biodiversity effects on ecosystem functioning and services"
                    trabajoDescripcion={[
                        "Uno de sus trabajos más importantes es “Quantifying the evidence for biodiversity effects on ecosystem functioning and services” (2006), publicado en la revista Ecology Letters.",
                        "En este estudio, Balvanera y sus colaboradores analizaron múltiples investigaciones para demostrar que una mayor biodiversidad mejora el funcionamiento de los ecosistemas, aumentando su estabilidad, productividad y capacidad de recuperación ante cambios ambientales.",
                        "Esta investigación es fundamental para el ODS 15: Vida de ecosistemas terrestres, ya que proporciona evidencia científica sólida de que la conservación de la biodiversidad no solo protege a las especies, sino que también garantiza servicios esenciales como la polinización, la regulación del agua y el almacenamiento de carbono.",
                        "Además, respalda la implementación de estrategias de restauración ecológica y políticas públicas enfocadas en la sostenibilidad, contribuyendo a frenar la degradación de los ecosistemas terrestres.",
                    ]}
                    referencias={[
                        {
                            text: "Balvanera, P., Pfisterer, A. B., Buchmann, N., He, J.-S., Nakashizuka, T., Raffaelli, D., & Schmid, B. (2006). Quantifying the evidence for biodiversity effects on ecosystem functioning and services. Ecology Letters, 9(10), 1146–1156. https://doi.org/10.1111/j.1461-0248.2006.00963.x",
                            url: "https://doi.org/10.1111/j.1461-0248.2006.00963.x",
                        },
                    ]}
                />

            </section>
        </Layout>
    );
}