import reverseOsmosis from "../../assets/images/reverseOsmosis.jpg";
import reverseOsmosisD from "../../assets/images/reverseOsmosisD.jpg";

export default function TecnologiaSection() {
  return (
    <section id="tecnologia" className="w-full scroll-mt-38 bg-[#8FEAE7]/10 py-24">
      <div className="mx-auto max-w-[1400px] px-6">

        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-[#7AF58F]" />

          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Tecnología para tratar contaminantes
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
            Algunas tecnologías utilizadas en otros países permiten eliminar
            contaminantes del agua con mayor eficiencia que muchos métodos
            tradicionales.
          </p>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">

          <div className="space-y-8">

            <p className="text-lg leading-relaxed text-slate-700 text-justify">
              Una tecnología utilizada en varios países para eliminar
              contaminantes del agua es la <strong>ósmosis inversa</strong>.
              Este método se utiliza ampliamente en países como Israel,
              Estados Unidos y España para limpiar agua contaminada o salada.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 text-justify">
              La ósmosis inversa consiste en hacer pasar el agua a través de
              una membrana especial con poros extremadamente pequeños.
              Esta membrana permite que pase el agua limpia, pero retiene
              contaminantes como sales, metales pesados, bacterias y otros
              compuestos químicos.
            </p>

            <img
              src={reverseOsmosis}
              alt="Sistema de ósmosis inversa"
              className="h-[320px] w-full rounded-2xl mt-40 object-cover shadow-lg"
            />

          </div>

          <div className="space-y-8">

            <img
              src={reverseOsmosisD}
              alt="Diagrama de ósmosis inversa"
              className="h-[360px] w-[490px] rounded-2xl ml-15 object-contain shadow-lg"
            />

            <p className="text-lg leading-relaxed text-slate-700 text-justify">
              Este proceso funciona aplicando presión al agua para que atraviese
              la membrana. Al final del proceso se obtiene agua mucho más limpia
              y segura para su consumo o reutilización.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 text-justify">
              En comparación con algunos métodos tradicionales utilizados en
              México, como la cloración o la filtración básica, la ósmosis
              inversa es una tecnología más avanzada porque puede eliminar una
              mayor cantidad de contaminantes químicos y metales pesados.
              Sin embargo, también es más costosa y requiere equipos
              especializados para su instalación y mantenimiento.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 text-justify">
              Esta tecnología ha sido fundamental para mejorar la calidad del
              agua en regiones donde el agua natural presenta altos niveles
              de contaminación o salinidad.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}