import Layout from "../layout/Layout";
import ods14 from "../assets/images/ods3.jpg";
import octavioImg from "../assets/images/octavio-aburto.jpeg";
import InvestigadorCard from "../components/sections/InvestigadorCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ODSCatorcePage() {

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

                {/* ODS 14 */}
                <section
                    id="ods14"
                    className="scroll-mt-30 mx-auto max-w-7xl px-8 pt-36 pb-20 flex flex-col lg:flex-row items-center gap-16"
                >
                    <div className="flex-1">
                        <span className="inline-flex items-center gap-2 bg-[#4C9F38]/15 border border-[#4C9F38]/40 rounded-full px-5 py-2 text-base font-bold tracking-widest uppercase text-[#2F6F22] mb-7">
                            ODS 14
                        </span>

                        <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-tight">
                            Vida Submarina
                        </h1>

                        <p className="mt-8 text-2xl text-slate-600 leading-relaxed text-left md:text-justify">
                            Conservar y usar sosteniblemente los océanos, los mares y los recursos marinos.
                            Este objetivo tiene como finalidad proteger los ecosistemas marinos y costeros,
                            ya que los océanos son fundamentales para la vida en el planeta, regulan el clima,
                            producen gran parte del oxígeno que respiramos y son una fuente esencial de alimento
                            y empleo para millones de personas en todo el mundo.
                        </p>

                        <div className="mt-8 h-2 w-28 rounded-full bg-[#4C9F38]" />
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="h-[460px] w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                            <img
                                src={ods14}
                                alt="ODS 14 Vida Submarina"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </section>

                <InvestigadorCard
                    id="investigador-ods14"
                    nombre="Dr. Octavio Aburto-Oropeza"
                    rol="Biólogo marino mexicano especializado en ecología y conservación de ecosistemas marinos"
                    imagen={octavioImg}
                    color="#4C9F38"
                    descripcion={[
                        "El Dr. Octavio Aburto-Oropeza es un biólogo marino mexicano especializado en ecología y conservación de ecosistemas marinos. Ha trabajado en instituciones como la Universidad Autónoma de Baja California Sur y el Scripps Institution of Oceanography.",
                        "Su trayectoria se enfoca en el estudio de arrecifes, manglares y pesquerías, así como en la relación entre biodiversidad y productividad marina. Su currículo incluye numerosas publicaciones científicas, participación en proyectos internacionales de conservación y colaboración con organizaciones como National Geographic.",
                        "También ha contribuido al diseño y evaluación de áreas marinas protegidas, así como al análisis del impacto de las actividades humanas en los océanos.",
                    ]}
                    trabajoTitulo="Mangroves in the Gulf of California increase fishery yields"
                    trabajoDescripcion={[
                        "Uno de sus trabajos más importantes es “Mangroves in the Gulf of California increase fishery yields” (2008), publicado en Proceedings of the National Academy of Sciences (PNAS).",
                        "En este estudio demuestra que los manglares funcionan como zonas de crianza esenciales para muchas especies marinas, aumentando significativamente la biomasa de peces e invertebrados de importancia comercial.",
                        "Sus resultados evidencian que la conservación de estos ecosistemas no solo protege la biodiversidad, sino que también incrementa la productividad pesquera y beneficia a las comunidades humanas que dependen de estos recursos.",
                        "Esta investigación contribuye directamente al ODS 14: Vida submarina, ya que resalta la importancia de proteger ecosistemas costeros clave, promueve el manejo sostenible de los recursos marinos y apoya la creación de políticas de conservación que integren el bienestar ambiental y económico.",
                    ]}
                    referencias={[
                        {
                            text: "Aburto-Oropeza, O., Ezcurra, E., Danemann, G., Valdez, V., Murray, J., & Sala, E. (2008). Mangroves in the Gulf of California increase fishery yields. Proceedings of the National Academy of Sciences, 105(30), 10456–10459. https://doi.org/10.1073/pnas.0804601105",
                            url: "https://doi.org/10.1073/pnas.0804601105",
                        },
                    ]}
                />

            </section>
        </Layout>
    );
}