import Layout from "../layout/Layout";
import ods4 from "../assets/images/ods4.jpg";
import TecnicasClinicas04 from "../components/sections/TecnicasClinicas04";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ODS4Page() {

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

                {/* ODS 04 */}
                <section
                    id="ods04"
                    className="scroll-mt-30 mx-auto max-w-7xl px-8 pt-36 pb-20 flex flex-col lg:flex-row items-center gap-16"
                >
                    <div className="flex-1">
                        <span className="inline-flex items-center gap-2 bg-[#DDA63A]/15 border border-[#DDA63A]/40 rounded-full px-5 py-2 text-base font-bold tracking-widest uppercase text-[#8A641D] mb-7">
                            ODS 04
                        </span>

                        <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-tight">
                            Educación de Calidad
                        </h1>

                        <p className="mt-8 text-2xl text-slate-600 leading-relaxed text-justify">
                            Proporcionar igualdad de acceso a una formación profesional asequible,
                            eliminar las disparidades de género y riqueza y lograr el acceso universal
                            a una educación superior de calidad.
                        </p>

                        <div className="mt-8 h-2 w-28 rounded-full bg-[#DDA63A]" />
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="h-[460px] w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                            <img
                                src={ods4}
                                alt="ODS 4 Educación de Calidad"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </section>

                <TecnicasClinicas04 />

            </section>
        </Layout>
    );
}