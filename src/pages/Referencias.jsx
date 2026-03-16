import Layout from "../layout/Layout";

export default function Referencias() {

  const referencias = [

    {
      text: "Comisión Estatal del Agua de Guanajuato. (s. f.). Programas de drenaje y tratamiento de aguas residuales.",
      url: "https://agua.guanajuato.gob.mx/programas.php"
    },

    {
      text: "Comisión Nacional del Agua. (2022). Calidad del agua y tratamiento en México.",
      url: "https://www.gob.mx/conagua"
    },

    {
      text: "Consejo Colombiano de Seguridad. (2022, enero 20). Manejo seguro de productos químicos en el hogar.",
      url: "https://ccs.org.co/portfolio/manejo-seguro-de-productos-quimicos-en-el-hogar/"
    },

    {
      text: "Junta de Castilla y León. (s. f.). Consejos para prevenir accidentes con productos químicos en el hogar.",
      url: "https://www.saludcastillayleon.es/es/sanidadambiental/productos-quimicos-salud/consejos-prevenir-accidentes-productos-quimicos-hogar"
    },

    {
      text: "Mandujano, E. (2023). Políticas de agua en Guanajuato. Senado de la República."
    },

    {
      text: "NTCD Noticias. (s. f.). Supervisión de ladrilleras para reducir la contaminación del aire en León.",
      url: "https://ntcd.mx/noticias-paot-leon-supervision-ladrilleras-contaminacion-aire"
    },

    {
      text: "Organización Mundial de la Salud. (2017). Guías sobre la calidad del agua potable.",
      url: "https://www.who.int"
    },

    {
      text: "Organización para el Desarrollo Sustentable. (2023). Acciones concretas para cuidar nuestra casa común.",
      url: "https://ods.com.ar/acciones-concretas-para-cuidar-nuestra-casa-comun/"
    },

    {
      text: "Periódico AM. (2023, enero 20). Preparan en Guanajuato proyecto para cambiar producción de ladrillos por blocks y reducir contaminación.",
      url: "https://www.am.com.mx/economia/2023/01/20/prepara-guanajuato-proyecto-para-cambiar-produccion-de-ladrillos-por-blocks-resolver-problema-de-contaminacion-643641.html"
    },

    {
      text: "Periódico AM. (2024, marzo 25). Guanajuato trata la mitad de las aguas residuales.",
      url: "https://www.am.com.mx/guanajuato/2024/3/25/guanajuato-trata-la-mitad-de-las-aguas-residuales-699722.html"
    },

    {
      text: "Pérez Ramos, A. M., et al. (2024). Análisis fisicoquímico de las partículas PM2.5 presentes en el aire de la ciudad de Guanajuato. ResearchGate."
    },

    {
      text: "Secretaría de Medio Ambiente y Ordenamiento Territorial. (s. f.). Calidad del aire en Guanajuato.",
      url: "https://smaot.guanajuato.gob.mx/sitio/calidad-del-aire"
    },

    {
      text: "Secretaría de Medio Ambiente y Ordenamiento Territorial. (s. f.). Gestión integral de residuos y protección del suelo en Guanajuato.",
      url: "https://smaot.guanajuato.gob.mx"
    },

    {
      text: "Secretaría de Medio Ambiente y Recursos Naturales. (s. f.). Acciones para cuidar el medio ambiente.",
      url: "https://www.gob.mx/semarnat/acciones-y-programas/acciones-para-cuidar-el-medio-ambiente-17102"
    },

    {
      text: "Secretaría de Medio Ambiente y Recursos Naturales. (s. f.). Remediación de suelos contaminados.",
      url: "https://www.gob.mx/semarnat"
    },

    {
      text: "Sistema de Aseo Público de León. (s. f.). Gestión integral de residuos sólidos urbanos.",
      url: "https://www.leon.gob.mx"
    },

    {
      text: "U.S. Environmental Protection Agency. (2023). Reverse osmosis.",
      url: "https://www.epa.gov"
    },

    {
      text: "UNESCO. (2020). The United Nations world water development report 2020. UNESCO Publishing.",
      url: "https://www.unesco.org"
    },

    {
      text: "Universidad de Guanajuato. (2020). Estudio de la contaminación de suelos del Estado de Guanajuato por metales y metaloides. Jóvenes en la Ciencia."
    },

    {
      text: "Villanueva, S., et al. (2017). Evaluación de la contaminación por elementos traza en suelos agrícolas del suroeste de Guanajuato. Acta Universitaria."
    }

  ];

  return (
    <Layout>

      <section className="w-full bg-white">

        {/* Encabezado */}
        <div className="w-full bg-[#8FEAE7]/12 py-16">
          <div className="px-6 text-center">

            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-[#7AF58F]" />

            <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Referencias
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
              Fuentes consultadas para la elaboración de la información presentada
              en este proyecto sobre contaminación ambiental y uso responsable de
              sustancias químicas.
            </p>

          </div>
        </div>

        {/* Lista de referencias */}
        <div className="mx-auto max-w-[1100px] px-6 py-20">

          <div className="space-y-6 text-slate-700 text-lg leading-relaxed">

            {referencias.map((ref, index) => (
              <p key={index} className="pl-8 -indent-8">

                {ref.text}{" "}

                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 underline hover:text-emerald-800 break-all"
                >
                  {ref.url}
                </a>

              </p>
            ))}

          </div>

        </div>

      </section>

    </Layout>
  );
}