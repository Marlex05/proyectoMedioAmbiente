import usoResponsable1 from "../../assets/images/usoResponsable1.jpg";
import usoResponsable2 from "../../assets/images/usoResponsable2.jpg";
import usoResponsable3 from "../../assets/images/usoResponsable3.jpg";

export default function UsoResponsableSection() {
    const recomendaciones = [
        {
            title: "Almacenamiento seguro",
            image: usoResponsable1,
            text: "Guardar los productos en su envase original con la etiqueta legible, en lugares cerrados y fuera del alcance de niños y mascotas. Es importante separar sustancias incompatibles y mantenerlas alejadas de alimentos para evitar reacciones peligrosas o contaminación."
        },
        {
            title: "Uso adecuado de los productos",
            image: usoResponsable2,
            text: "Leer siempre las instrucciones del fabricante antes de utilizar cualquier sustancia química. Utilizar la cantidad recomendada, usar protección como guantes o mascarillas cuando sea necesario y asegurar una buena ventilación abriendo ventanas o puertas. Nunca mezclar sustancias si la etiqueta no lo permite."
        },
        {
            title: "Eliminación responsable",
            image: usoResponsable3,
            text: "Los productos químicos no deben tirarse al desagüe ni a la basura común. Lo adecuado es consultar a las autoridades locales para conocer los puntos de recolección de residuos peligrosos domésticos y cerrar bien los envases antes de llevarlos a estos lugares."
        }
    ];

    const productos = [
        "Desinfectantes para baños y cocinas, sanitizadores y blanqueadores",
        "Productos de limpieza del hogar como jabones, ceras, limpiavidrios, desengrasantes o pinturas",
        "Productos para automóviles como anticongelantes o líquidos para parabrisas",
        "Productos de belleza o cuidado personal como medicamentos, alcohol, cosméticos o tintes",
        "Aerosoles e insecticidas para plagas domésticas",
        "Venenos para roedores",
        "Productos para eliminar malezas y cuidar plantas o jardines",
        "Productos para mascotas como champús antipulgas o desinfectantes",
        "Productos químicos para piscinas",
        "Combustibles como gasolina",
        "Juegos pirotécnicos o pólvora"
    ];

    return (
        <section id="uso-responsable" className="w-full scroll-mt-15 bg-white py-24">

            <div className="w-full bg-[#8FEAE7]/12 py-16">
                <div className="px-6 text-center">
                    <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-[#7AF58F]" />

                    <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                        Uso responsable de sustancias químicas en el hogar
                    </h2>

                    <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-600 text-justify">
                        El uso responsable de sustancias químicas en el hogar consiste en manejarlas
                        cuidadosamente para proteger la salud de las personas, las mascotas y el medio
                        ambiente. Además, ayuda a prevenir accidentes y reduce el riesgo de contaminación
                        dentro del hogar y en los ecosistemas cercanos.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-[1400px] px-6 py-20">
                <h3 className="mb-12 text-center text-2xl font-bold text-slate-900 md:text-3xl">
                    Recomendaciones para evitar contaminación o riesgos de salud
                </h3>

                <div className="grid gap-10 md:grid-cols-3">
                    {recomendaciones.map((item, index) => (
                        <article
                            key={index}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,0,0,0.12)]"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="mb-6 h-[200px] w-[400px] rounded-2xl object-cover object-[center_5%] shadow-md"
                            />

                            <h4 className="text-xl font-bold text-slate-900">
                                {item.title}
                            </h4>

                            <p className="mt-4 text-justify text-base leading-relaxed text-slate-600">
                                {item.text}
                            </p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-[1200px] px-6 pb-10">
                <h3 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">
                    Ejemplos de productos químicos en el hogar
                </h3>

                <ul className="grid gap-4 md:grid-cols-2">
                    {productos.map((item, index) => {
                        const isLastOddItem =
                            productos.length % 2 !== 0 && index === productos.length - 1;

                        return (
                            <li
                                key={index}
                                className={`rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700 ${isLastOddItem ? "md:col-span-2 md:w-[30%] md:justify-self-center text-center" : ""
                                    }`}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>

        </section>
    );
}