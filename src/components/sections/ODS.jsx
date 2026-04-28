import odsLogo from "../../assets/images/ods-logo.png";
import ods3 from "../../assets/images/ods3.jpg";
import ods4 from "../../assets/images/ods4.jpg";
import ods14 from "../../assets/images/ods14.jpg";
import ods15 from "../../assets/images/ods15.jpg";

export default function ODS() {
    const ods = [
        { title: "Garantizar la salud y el bienestar", number: "03", description: "Garantizar una vida sana y promover el bienestar para todas las personas, en todas las edades, para el año 2030. Este objetivo reconoce que la salud es un derecho fundamental y una condición indispensable para el desarrollo social y económico de los países.", image: ods3, reverse: false, color: "#E5243B" },
        { title: "Garantizar una educación de calidad", number: "04", description: "Proporcionar igualdad de acceso a una formación profesional asequible, eliminar las disparidades de género y riqueza y lograr el acceso universal a una educación superior de calidad.", image: ods4, reverse: true, color: "#DDA63A" },
        { title: "Conservar y usar sosteniblemente los océanos, los mares y los recursos marinos", number: "14", description: " Este objetivo tiene como finalidad proteger los ecosistemas marinos y costeros, ya que los océanos son fundamentales para la vida en el planeta, regulan el clima, producen gran parte del oxígeno que respiramos y son una fuente esencial de alimento y empleo para millones de personas en todo el mundo.", image: ods14, reverse: false, color: "#4C9F38" },
        { title: "Vida de ecosistemas terrestres", number: "15", description: "Busca proteger, restablecer y promover el uso sostenible de los ecosistemas terrestres. Esto incluye la gestión de los bosques, la lucha contra la desertificación y la detención de la pérdida de biodiversidad. ", image: ods15, reverse: true, color: "#C5192D" },
    ];

    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-[1400px] px-6 pt-32 pb-20">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col ml-20 items-center gap-6 md:flex-row md:justify-center">
                        <img
                            src={odsLogo}
                            alt="ODS Logo"
                            className="w-full max-w-[380px] object-contain drop-shadow-xl transition-transform duration-100 hover:scale-105 md:max-w-[420px]"
                        />

                        <h2 className="text-center text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-left md:text-6xl">
                            Objetivos de Desarrollo Sustentable
                        </h2>
                    </div>

                    <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#7AF58F] to-[#8FEAE7]" />
                </div>
            </div>

            <div className="flex flex-col overflow-hidden">
                {ods.map((item, index) => (
                    <article
                        key={index}
                        className="group relative w-full border-b border-slate-100 py-24 transition-colors duration-100 hover:bg-slate-50/50"
                    >
                        <div className={`mx-auto flex max-w-[1300px] flex-col items-center gap-16 px-8 lg:flex-row ${item.reverse ? "lg:flex-row-reverse" : ""}`}>

                            <div className="flex-1 space-y-6">
                                <span className="text-8xl font-black text-slate-100 transition-colors duration-100 group-hover:text-secondary md:text-9xl">
                                    {item.number}
                                </span>

                                <h3 className="text-4xl font-bold tracking-tight text-slate-800 md:text-5xl">
                                    {item.title}
                                </h3>

                                <p className="max-w-md text-xl leading-relaxed text-slate-500">
                                    {item.description}
                                </p>

                                <div className="h-1.5 w-20 rounded-full bg-[#7AF58F]" />
                            </div>

                            <div className="relative flex flex-1 justify-center">
                                <div className="absolute inset-0 -z-10 scale-95 rounded-[40px] bg-gradient-to-br from-[#7AF58F]/10 to-[#8FEAE7]/20 blur-xl transition-transform duration-100 group-hover:scale-[1.02]" />

                                <div className="h-[400px] w-full max-w-sm overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-100 group-hover:shadow-lg">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-contain transition-transform duration-100 group-hover:scale-[1.02]"
                                    />
                                </div>
                            </div>

                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}