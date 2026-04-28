import infografiaTecnicas from "../../assets/images/infografiaTecnicas.jpg";

export default function TecnicasClinicas03({ riesgos, enfermedades }) {
    return (
        <section
            id="tecnicas-clinicas-ods03"
            className="scroll-mt-30 mx-auto max-w-7xl px-8 py-20"
        >
            <h2 className="text-5xl font-black mb-4 text-slate-900">
                Técnicas Clínicas
            </h2>
            <div className="h-2 w-28 rounded-full bg-[#7AF58F] mb-12" />

            <h3 className="text-3xl font-bold text-slate-800 mb-8">
                Identificación de factores de riesgo
            </h3>

            {/* Banner */}
            <div className="flex items-center gap-6 bg-[#8FEAE7]/10 border border-[#8FEAE7] rounded-3xl px-8 py-7 mb-10">
                <span className="text-6xl font-black text-[#0F6E56] whitespace-nowrap">23%</span>
                <p className="text-xl text-slate-700 leading-relaxed text-justify">
                    Según la Organización Mundial de la Salud (OMS), aproximadamente el 23% de todas las muertes
                    mundiales están vinculadas a riesgos ambientales. Los principales factores identificados son:
                </p>
            </div>

            {/* Riesgos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                {riesgos.map((item, i) => (
                    <div
                        key={i}
                        className={`bg-white border border-slate-200 border-l-4 border-l-[#7AF58F] rounded-3xl p-7 shadow-sm ${item.full ? "md:col-span-2" : ""}`}
                    >
                        <p className="text-2xl font-bold text-slate-800 mb-3">
                            {item.title}
                        </p>
                        <p className="text-xl text-slate-600 leading-relaxed text-justify">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Texto adicional completo */}
            <p className="text-xl text-slate-700 leading-relaxed mb-5 text-justify">
                La exposición a estos factores no solo causa enfermedades agudas, sino que es un motor principal
                de Enfermedades No Transmisibles (ENT), como:
            </p>

            {/* Enfermedades */}
            <div className="flex flex-wrap gap-3 mb-14">
                {enfermedades.map((e, i) => (
                    <span
                        key={i}
                        className="bg-[#7AF58F]/15 border border-[#7AF58F]/40 rounded-full px-5 py-3 text-lg text-[#2E5E1A]"
                    >
                        {e}
                    </span>
                ))}
            </div>

            {/* Infografía */}
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
                Infografía
            </h3>

            <div className="rounded-3xl overflow-hidden border shadow-md">
                <img
                    src={infografiaTecnicas}
                    alt="Infografía técnicas clínicas"
                    className="w-full object-contain"
                />
            </div>
        </section>
    );
}