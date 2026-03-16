import trataAgua from "../../assets/images/trataAgua.jpg";
import gestionAire from "../../assets/images/gestionAire.jpg";
import manejoSuelo from "../../assets/images/manejoSuelo.jpg";
import mejoraProcesos from "../../assets/images/mejoraProcesos.jpg";

export default function MetodosSection() {
  const metodos = [
    {
      number: "01",
      title: "Tratamiento de aguas residuales",
      image: trataAgua,
      description:
        "En Guanajuato se aplican procesos de tratamiento de aguas residuales en plantas especializadas. El agua contaminada pasa por etapas como filtración, sedimentación y procesos biológicos donde bacterias degradan la materia orgánica. Esto permite reducir contaminantes antes de descargar el agua en ríos o reutilizarla en actividades como la agricultura.",
    },
    {
      number: "02",
      title: "Gestión de la calidad del aire",
      image: gestionAire,
      description:
        "Para reducir la contaminación atmosférica se implementan programas como PROAIRE, orientados a disminuir emisiones de vehículos, industrias y quemas contaminantes. También se realizan inspecciones a ladrilleras y otras fuentes industriales para verificar el uso de combustibles permitidos y el cumplimiento de normas ambientales.",
    },
    {
      number: "03",
      title: "Manejo de residuos y remediación del suelo",
      image: manejoSuelo,
      description:
        "La contaminación del suelo se reduce mediante la recolección, separación y disposición controlada de residuos en rellenos sanitarios. Cuando se detectan zonas afectadas por actividades industriales o residuos peligrosos, se aplican procesos de remediación del suelo para retirar, tratar o limpiar la tierra contaminada y disminuir riesgos ambientales y de salud.",
    },
    {
      number: "04",
      title: "Mejora de procesos productivos",
      image: mejoraProcesos,
      description:
        "También se impulsan cambios en actividades productivas, como la tecnificación o sustitución de hornos tradicionales de ladrillo por tecnologías más eficientes o por otros materiales de construcción. Esto disminuye la quema de combustibles contaminantes y reduce la liberación de partículas al aire y al suelo.",
    },
  ];

  return (
    <section id="metodos" className="w-full bg-white scroll-mt-38">
      <div className="w-full bg-[#8FEAE7]/12 py-16">
        <div className="px-6 text-center">
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-[#7AF58F]" />

          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Métodos para reducir la contaminación
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
            En Guanajuato y en municipios como León se aplican distintos métodos
            para disminuir la contaminación del agua, del aire y del suelo,
            combinando tratamiento ambiental, regulación industrial y mejoras en
            los procesos productivos.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {metodos.map((item) => (
            <article
              key={item.number}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-5xl font-black text-emerald-200 md:text-6xl">
                  {item.number}
                </span>

                <div className="h-1.5 w-16 rounded-full bg-[#7AF58F]" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                {item.title}
              </h3>

              {/* Imagen */}
              <img
                src={item.image}
                alt={item.title}
                className="mt-6 h-[220px] w-full rounded-2xl object-cover shadow-md"
              />

              <p className="mt-6 text-justify text-base leading-relaxed text-slate-600 md:text-lg">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}