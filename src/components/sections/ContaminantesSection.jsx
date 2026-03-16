import agua from "../../assets/images/contaminacionAgua.jpg";
import suelo from "../../assets/images/contaminacionSuelo.jpg";
import aire from "../../assets/images/contaminacionAire.jpg";

export default function ContaminantesSection() {
    const contaminantes = [
        {
            id: "agua",
            title: "Contaminantes en el Agua",
            intro:
                "El agua en Guanajuato enfrenta desafíos por vertidos industriales y lixiviados de residuos sólidos.",
            image: agua,
            imageClassName: "h-[340px] max-w-lg",
            points: [
                "Metales pesados y metaloides: se han documentado altas concentraciones que superan los límites en cuerpos de agua.",
                "Cromo hexavalente: contaminante histórico vinculado a la industria química.",
                "Compuestos agrícolas: nitratos, fosfatos, plaguicidas y fertilizantes químicos.",
                "Hidrocarburos y petroquímicos derivados de actividad industrial en zonas como Salamanca.",
            ],
            bgClass: "bg-white",
        },
        {
            id: "suelo",
            title: "Contaminantes en el Suelo",
            intro:
                "El suelo se ve afectado por el mal manejo de residuos peligrosos y prácticas agrícolas.",
            image: suelo,
            imageClassName: "h-[305px] max-w-md",
            points: [
                "Metales de interés toxicológico: cadmio, plomo, arsénico, cromo, mercurio, níquel y zinc.",
                "Elementos Traza: Contaminación detectada en suelos agrícolas del suroeste del estado por el uso continuo de agroquímicos.",
                "Sustancias ácidas y alcalinas provenientes de desechos industriales que alteran el pH y la microbiota del suelo.",
            ],
            bgClass: "bg-[#8FEAE7]/12",
        },
        {
            id: "aire",
            title: "Contaminantes en el Aire",
            intro:
                "Las emisiones atmosféricas provienen principalmente de fuentes fijas y móviles.",
            image: aire,
            imageClassName: "h-[3435x] max-w-xl",
            points: [
                "Gases de combustión: dióxido de azufre, monóxido de carbono, dióxido de carbono y óxidos de nitrógeno.",
                "Compuestos volátiles como clorofluorocarbonos y otros hidrocarburos emitidos por procesos industriales.",
            ],
            bgClass: "bg-white",
        },
    ];

    return (
        <section id="contaminantes" className="w-full scroll-mt-38">
            <div className="w-full bg-slate-50 py-16">
                <div className="px-6 text-center">

                    <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                        Contaminantes químicos del agua, aire y suelo presentes en Guanajuato
                    </h2>

                    <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
                        Identificación de los principales contaminantes químicos presentes
                        en el agua, el suelo y el aire dentro del estado de Guanajuato.
                    </p>

                </div>
            </div>

            <div className="flex flex-col">
                {contaminantes.map((item, index) => (
                    <article
                        key={item.id}
                        id={item.id}
                        className={`group w-full border-t border-slate-100 transition-colors duration-200 hover:bg-slate-50 ${item.bgClass}`}
                    >
                        <div className="mx-auto max-w-[1400px] px-6 py-20">
                            <div className="grid items-start gap-10 lg:grid-cols-[120px_1fr]">
                                <div className="text-6xl font-black text-slate-100 transition-colors duration-200 group-hover:text-emerald-200 md:text-7xl">
                                    0{index + 1}
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-600">
                                        {item.intro}
                                    </p>

                                    <div className="mt-8 h-1.5 w-20 rounded-full bg-[#7AF58F]" />

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`mt-12 mx-auto w-full rounded-2xl object-contain shadow-lg ${item.imageClassName}`}
                                    />

                                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                                        {item.points.map((point, pointIndex) => {
                                            const isLastOddItem =
                                                item.points.length % 2 !== 0 &&
                                                pointIndex === item.points.length - 1;

                                            return (
                                                <div
                                                    key={pointIndex}
                                                    className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] ${isLastOddItem ? "md:col-span-2 md:mx-auto md:max-w-[48%]" : ""
                                                        }`}
                                                >
                                                    <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                                                        {point}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}