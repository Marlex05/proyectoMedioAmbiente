import odsLogo from "../../assets/images/ods-logo.png";
import pdfODS12 from "../../assets/ods12-infografia.pdf";

const odsImages = import.meta.glob("../../assets/images/ods*.jpg", {
    eager: true,
    import: "default",
});
export default function ODS() {
    const ods = [
        {
            number: "01",
            title: "Fin de la pobreza",
            description: "Poner fin a la pobreza en todas sus formas en todo el mundo, garantizando el acceso a recursos básicos, servicios esenciales y protección social.",
        },
        {
            number: "02",
            title: "Hambre cero",
            description: "Poner fin al hambre, lograr la seguridad alimentaria, mejorar la nutrición y promover la agricultura sostenible.",
        },
        {
            number: "03",
            title: "Salud y bienestar",
            description: "Garantizar una vida sana y promover el bienestar para todas las personas en todas las edades.",
        },
        {
            number: "04",
            title: "Educación de calidad",
            description: "Garantizar una educación inclusiva, equitativa y de calidad, y promover oportunidades de aprendizaje durante toda la vida para todos.",
        },
        {
            number: "05",
            title: "Igualdad de género",
            description: "Lograr la igualdad entre los géneros y empoderar a todas las mujeres y niñas.",
        },
        {
            number: "06",
            title: "Agua limpia y saneamiento",
            description: "Garantizar la disponibilidad de agua y su gestión sostenible, así como el saneamiento para todos.",
        },
        {
            number: "07",
            title: "Energía asequible y no contaminante",
            description: "Garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos.",
        },
        {
            number: "08",
            title: "Trabajo decente y crecimiento económico",
            description: "Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos.",
        },
        {
            number: "09",
            title: "Industria, innovación e infraestructura",
            description: "Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible, y fomentar la innovación.",
        },
        {
            number: "10",
            title: "Reducción de las desigualdades",
            description: "Reducir la desigualdad en y entre los países.",
        },
        {
            number: "11",
            title: "Ciudades y comunidades sostenibles",
            description: "Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.",
        },
        {
            number: "12",
            title: "Producción y consumo responsables",
            description: "Garantizar modalidades de consumo y producción sostenibles.",
        },
        {
            number: "13",
            title: "Acción por el clima",
            description: "Adoptar medidas urgentes para combatir el cambio climático y sus efectos.",
        },
        {
            number: "14",
            title: "Vida submarina",
            description: "Conservar y utilizar de forma sostenible los océanos, los mares y los recursos marinos.",
        },
        {
            number: "15",
            title: "Vida de ecosistemas terrestres",
            description: "Proteger, restablecer y promover el uso sostenible de los ecosistemas terrestres y detener la pérdida de biodiversidad.",
        },
        {
            number: "16",
            title: "Paz, justicia e instituciones sólidas",
            description: "Promover sociedades pacíficas e inclusivas, facilitar el acceso a la justicia y construir instituciones eficaces y responsables.",
        },
        {
            number: "17",
            title: "Alianzas para lograr los objetivos",
            description: "Fortalecer los medios de implementación y revitalizar la Alianza Mundial para el Desarrollo Sostenible.",
        },
    ];

    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-[1400px] px-6 pt-32 pb-16">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
                        <img
                            src={odsLogo}
                            alt="ODS Logo"
                            className="w-full max-w-[340px] object-contain drop-shadow-xl transition-transform duration-100 hover:scale-105 md:max-w-[400px]"
                        />

                        <h2 className="text-center text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-left md:text-6xl">
                            Objetivos de Desarrollo Sustentable
                        </h2>
                    </div>

                    <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#7AF58F] to-[#8FEAE7]" />
                </div>
            </div>

            <div className="mx-auto max-w-[1200px] px-6 pb-24">
                <div className="flex flex-col gap-8">
                    {ods.map((item) => (
                        <article
                            key={item.number}
                            className="group flex flex-col gap-8 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:flex-row md:items-center"
                        >
                            <div className="flex shrink-0 justify-center md:w-[230px]">
                                <div className="h-[190px] w-[190px] overflow-hidden rounded-3xl bg-white p-4 shadow-sm">
                                    <img
                                        src={odsImages[`../../assets/images/ods${Number(item.number)}.jpg`]}
                                        alt={`ODS ${item.number} ${item.title}`}
                                        className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            <div className="flex-1">
                                <span className="mb-3 inline-flex rounded-full bg-[#7AF58F]/15 px-4 py-2 text-sm font-bold tracking-widest text-[#2E5E1A]">
                                    ODS {item.number}
                                </span>

                                <h3 className="text-3xl font-black text-slate-900 md:text-4xl">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-xl leading-relaxed text-slate-600 text-left md:text-justify">
                                    {item.description}

                                    {item.number === "12" && (
                                        <>
                                            {" "}
                                            <a
                                                href={pdfODS12}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline hover:text-blue-800"
                                            >
                                                Propuestas de entornos saludables y seguros para personas mayores
                                            </a>
                                        </>
                                    )}
                                    
                                </p>

                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}