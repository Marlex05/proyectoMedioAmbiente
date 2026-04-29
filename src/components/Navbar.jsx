import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (path, sectionId) => {
    if (location.pathname === path) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path, { state: { scrollTo: sectionId } });
    }
  };

  const dropdownButtonClass =
    "rounded-xl px-3 py-3 text-left transition-colors hover:bg-slate-100 hover:text-emerald-700";

  return (
    <nav className="sticky top-6 z-50 mx-auto w-[95%] max-w-[1700px]">
      <div className="rounded-3xl border border-white/30 bg-white/80 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-secondary/45">
        <div className="flex items-center justify-between rounded-3xl bg-gradient-to-r from-secondary/10 via-transparent to-[#8FEAE7]/10 px-12 py-6">
          <Link to="/" className="group flex items-center gap-4">
            <div className="relative flex h-10 w-10 items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-secondary rotate-45 transition-transform duration-500 group-hover:rotate-90" />
              <span className="relative text-lg font-bold text-white">M</span>
            </div>

            <h1 className="text-2xl font-light uppercase tracking-[0.2em] text-slate-800">
              Medio <span className="font-bold text-emerald-600">Ambiente</span>
            </h1>
          </Link>

          <div className="ml-auto hidden items-center justify-end gap-10 text-sm font-bold uppercase tracking-widest text-slate-600 lg:flex">
            <Link to="/" className="group relative transition-colors hover:text-emerald-700">
              Inicio
            </Link>

            {/* ODS 03 */}
            <div className="group relative py-2">
              <Link to="/odsTres" className="relative transition-colors hover:text-emerald-700">
                ODS 03
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full z-[60] w-[300px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="rounded-2xl border border-white/40 bg-white/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <div className="flex flex-col gap-1 text-[13px] font-semibold tracking-wide text-slate-700">
                    <button onClick={() => goToSection("/odsTres", "ods03")} className={dropdownButtonClass}>
                      Salud y bienestar
                    </button>
                    <button onClick={() => goToSection("/odsTres", "tecnicas-clinicas-ods03")} className={dropdownButtonClass}>
                      Técnicas clínicas
                    </button>
                    <button onClick={() => goToSection("/odsTres", "cuidados-ods03")} className={dropdownButtonClass}>
                      Cuidados del paciente geriátrico
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ODS 04 */}
            <div className="group relative py-2">
              <Link to="/odsCuatro" className="relative transition-colors hover:text-emerald-700">
                ODS 04
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full z-[60] w-[340px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="rounded-2xl border border-white/40 bg-white/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <div className="flex flex-col gap-1 text-[13px] font-semibold tracking-wide text-slate-700">
                    <button onClick={() => goToSection("/odsCuatro", "ods04")} className={dropdownButtonClass}>
                      Educación de calidad
                    </button>
                    <button onClick={() => goToSection("/odsCuatro", "tecnicas-clinicas-ods04")} className={dropdownButtonClass}>
                      Técnicas clínicas
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ODS 14 */}
            <div className="group relative py-2">
              <Link to="/odsCatorce" className="relative transition-colors hover:text-emerald-700">
                ODS 14
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full z-[60] w-[320px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="rounded-2xl border border-white/40 bg-white/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <div className="flex flex-col gap-1 text-[13px] font-semibold tracking-wide text-slate-700">
                    <button onClick={() => goToSection("/odsCatorce", "ods14")} className={dropdownButtonClass}>
                      Vida submarina
                    </button>
                    <button onClick={() => goToSection("/odsCatorce", "investigador-ods14")} className={dropdownButtonClass}>
                      Investigador destacado
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ODS 15 */}
            <div className="group relative py-2">
              <Link to="/odsQuince" className="relative transition-colors hover:text-emerald-700">
                ODS 15
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full z-[60] w-[350px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="rounded-2xl border border-white/40 bg-white/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <div className="flex flex-col gap-1 text-[13px] font-semibold tracking-wide text-slate-700">
                    <button onClick={() => goToSection("/odsQuince", "ods15")} className={dropdownButtonClass}>
                      Ecosistemas terrestres
                    </button>
                    <button onClick={() => goToSection("/odsQuince", "investigadora-ods15")} className={dropdownButtonClass}>
                      Investigadora destacada
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Impacto Químico */}
            <div className="group relative py-2">
              <Link to="/impacto-quimico" className="relative transition-colors hover:text-emerald-700">
                Impacto Químico
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full z-[60] w-[340px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="rounded-2xl border border-white/40 bg-white/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <div className="flex flex-col gap-1 text-[13px] font-semibold tracking-wide text-slate-700">
                    <button onClick={() => goToSection("/impacto-quimico", "contaminantes")} className={dropdownButtonClass}>
                      Contaminantes químicos
                    </button>
                    <button onClick={() => goToSection("/impacto-quimico", "metodos")} className={dropdownButtonClass}>
                      Métodos para reducir contaminación
                    </button>
                    <button onClick={() => goToSection("/impacto-quimico", "tecnologia")} className={dropdownButtonClass}>
                      Tecnología para tratar contaminantes
                    </button>
                    <button onClick={() => goToSection("/impacto-quimico", "uso-responsable")} className={dropdownButtonClass}>
                      Uso responsable en el hogar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/propuestas" className="group relative transition-colors hover:text-emerald-700">
              Propuestas
            </Link>

            <Link to="/referencias" className="group relative transition-colors hover:text-emerald-700">
              Referencias
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}