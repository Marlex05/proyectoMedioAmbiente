import Layout from "../layout/Layout";
import ods3 from "../assets/images/ods3.jpg";
import TecnicasClinicas03 from "../components/sections/TecnicasClinicas03";
import Cuidados03 from "../components/sections/Cuidados03";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ODS3Page() {

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

    const riesgos = [
        {
            title: "Contaminación del aire (Interior y Exterior)",
            desc: "Es el factor de riesgo ambiental más letal. Incluye la exposición a partículas finas (PM2.5) provenientes de la industria y el transporte, así como el humo de combustibles sólidos como leña y carbón utilizados para cocinar en hogares vulnerables.",
        },
        {
            title: "Agua, Saneamiento e Higiene (WASH)",
            desc: "El acceso limitado a agua segura y sistemas de eliminación de excretas inadecuados provoca enfermedades diarreicas, hepatitis y otras infecciones parasitarias.",
        },
        {
            title: "Exposición a Sustancias Químicas",
            desc: "Incluye el manejo inadecuado de plaguicidas en la agricultura, la presencia de metales pesados como el plomo en pinturas o tuberías, y el mercurio en actividades mineras.",
        },
        {
            title: "Agentes Biológicos",
            desc: "Vectores como mosquitos transmiten enfermedades como Dengue, Malaria y Zika. Su propagación puede verse alterada por cambios en el uso de suelo y el clima.",
        },
        {
            title: "Radiación y Riesgos Ocupacionales",
            desc: "Incluye exposición a radiación UV, radón en edificios y entornos laborales peligrosos que no cumplen con normativas de seguridad ambiental.",
            full: true,
        },
    ];

    const enfermedades = [
        "Accidentes cerebrovasculares y cardiopatías isquémicas",
        "Cánceres de pulmón y de piel",
        "Enfermedades respiratorias crónicas",
    ];

    return (
        <Layout>
            <section className="w-full bg-white">

                {/* ODS 03 */}
                <section
                    id="ods03"
                    className="scroll-mt-30 mx-auto max-w-7xl px-8 pt-36 pb-20 flex flex-col lg:flex-row items-center gap-16"
                >
                    <div className="flex-1">
                        <span className="inline-flex items-center gap-2 bg-[#7AF58F22] border border-[#7AF58F88] rounded-full px-5 py-2 text-base font-bold tracking-widest uppercase text-[#3B6D11] mb-7">
                            ODS 03
                        </span>

                        <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-tight">
                            Salud y Bienestar
                        </h1>

                        <p className="mt-8 text-2xl text-slate-600 leading-relaxed text-left md:text-justify">
                            Garantizar una vida sana y promover el bienestar para todas las personas, en todas las edades,
                            para el año 2030. Este objetivo reconoce que la salud es un derecho fundamental y una condición
                            indispensable para el desarrollo social y económico de los países.
                        </p>

                        <div className="mt-8 h-2 w-28 rounded-full bg-[#7AF58F]" />
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="h-[460px] w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                            <img
                                src={ods3}
                                alt="ODS 3 Salud y Bienestar"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </section>

                <TecnicasClinicas03
                    riesgos={riesgos}
                    enfermedades={enfermedades}
                />

                <Cuidados03 />

            </section>
        </Layout>
    );
}