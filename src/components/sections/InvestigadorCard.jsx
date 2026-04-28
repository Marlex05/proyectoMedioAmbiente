export default function InvestigadorCard({
    id,
    nombre,
    rol,
    imagen,
    descripcion = [],
    trabajoTitulo,
    trabajoDescripcion = [],
    referencias = [],
    color = "#7AF58F",
}) {
    return (
        <section id={id} className="scroll-mt-25 mx-auto max-w-7xl px-8 py-20">
            <h2 className="text-5xl font-black mb-4 text-slate-900">
                Investigador destacado
            </h2>

            <div
                className="h-2 w-28 rounded-full mb-12"
                style={{ backgroundColor: color }}
            />

            <article className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
                <div className="mb-8">
                    <h3 className="text-4xl font-black text-slate-900 mb-3">
                        {nombre}
                    </h3>

                    <p
                        className="text-xl font-semibold leading-relaxed"
                        style={{ color }}
                    >
                        {rol}
                    </p>
                </div>

                <div className="w-full md:float-right md:ml-10 md:mb-6 md:w-[380px] lg:w-[430px]">
                    <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100">
                        <img
                            src={imagen}
                            alt={nombre}
                            className="w-full h-[430px] object-cover rounded-[1.5rem]"
                        />
                    </div>
                </div>

                <div className="space-y-6 text-xl text-slate-600 leading-relaxed text-left md:text-justify">
                    {descripcion.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}

                    <h4 className="pt-6 text-3xl font-bold text-slate-800">
                        Trabajo destacado
                    </h4>

                    <p className="text-2xl font-bold text-slate-900 text-left">
                        {trabajoTitulo}
                    </p>

                    {trabajoDescripcion.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}

                    <div className="clear-both" />

                    <div
                        className="mt-10 border-l-4 rounded-r-2xl px-7 py-5"
                        style={{ borderColor: color, backgroundColor: `${color}18` }}
                    >
                        <h4 className="text-3xl font-bold text-slate-800 mb-5">
                            Referencias
                        </h4>

                        <div className="space-y-4">
                            {referencias.map((ref, i) => (
                                <a
                                    key={i}
                                    href={ref.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block text-lg text-slate-700 leading-relaxed underline decoration-slate-300 hover:text-slate-900"
                                >
                                    {ref.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}