import reducirPlastico from "../../assets/images/reducirPlastico.jpg";
import separarResiduos from "../../assets/images/separarResiduos.jpg";
import ahorroEnergia from "../../assets/images/ahorroEnergia.jpg";
import cuidarAgua from "../../assets/images/cuidarAgua.jpg";
import transporteSostenible from "../../assets/images/transporteSostenible.jpg";
import actividadesEcologicas from "../../assets/images/actividadesEcologicas.jpg";

export default function PropuestasSection() {

  const acciones = [
    {
      number: "01",
      title: "Reducir el uso de plásticos",
      image: reducirPlastico,
      text: "Los estudiantes y ciudadanos pueden usar botellas reutilizables, bolsas de tela y evitar productos de un solo uso. Esto disminuye la cantidad de residuos que llegan a ríos, mares y basureros."
    },
    {
      number: "02",
      title: "Separar y reciclar residuos",
      image: separarResiduos,
      text: "Clasificar la basura en orgánica, reciclable y no reciclable permite que muchos materiales puedan reutilizarse. En escuelas y hogares se pueden colocar contenedores para facilitar la separación."
    },
    {
      number: "03",
      title: "Ahorrar energía",
      image: ahorroEnergia,
      text: "Apagar luces y aparatos electrónicos cuando no se utilizan, usar focos ahorradores y aprovechar la luz natural ayuda a reducir el consumo de energía y las emisiones contaminantes."
    },
    {
      number: "04",
      title: "Cuidar el agua",
      image: cuidarAgua,
      text: "Cerrar la llave mientras se cepillan los dientes, reparar fugas y reutilizar agua para regar plantas son acciones simples que ayudan a conservar este recurso esencial."
    },
    {
      number: "05",
      title: "Usar transporte sostenible",
      image: transporteSostenible,
      text: "Caminar, usar bicicleta, transporte público o compartir automóvil disminuye la contaminación del aire causada por los vehículos."
    },
    {
      number: "06",
      title: "Participar en actividades ecológicas",
      image: actividadesEcologicas,
      text: "Las personas pueden involucrarse en campañas de reforestación, limpieza de parques o educación ambiental para generar conciencia y mejorar los espacios naturales."
    }
  ];

  return (
    <section id="propuestas" className="w-full scroll-mt-15 bg-white py-24">

      {/* Encabezado */}
      <div className="w-full bg-[#8FEAE7]/12 py-16">
        <div className="px-6 text-center">

          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-[#7AF58F]" />

          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Propuestas y acciones para cuidar el medio ambiente
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-600 text-justify">
            El desarrollo sostenible busca satisfacer nuestras necesidades actuales sin
            comprometer las de las futuras generaciones. Todos podemos contribuir con
            pequeñas acciones que reduzcan la contaminación y ayuden a proteger el planeta.
          </p>

        </div>
      </div>


      {/* Cards */}
      <div className="mx-auto max-w-[1400px] px-6 py-20">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {acciones.map((item) => (

            <article
              key={item.number}
              className="rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)]"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-[220px] w-full rounded-t-3xl object-cover"
              />

              <div className="p-6">

                <div className="mb-4 flex items-center gap-4">

                  <span className="text-4xl font-black text-emerald-200">
                    {item.number}
                  </span>

                  <div className="h-1.5 w-14 rounded-full bg-[#7AF58F]" />

                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600 text-justify">
                  {item.text}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}