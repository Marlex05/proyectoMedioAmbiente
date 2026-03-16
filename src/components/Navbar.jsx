import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToImpactoSection = (sectionId) => {
    if (location.pathname === "/impacto-quimico") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/impacto-quimico", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="sticky top-6 z-50 mx-auto w-[95%] max-w-[1400px]">
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

          <div className="ml-auto hidden items-center justify-end gap-14 text-sm font-bold uppercase tracking-widest text-slate-600 lg:flex">
            <Link
              to="/"
              className="group relative transition-colors hover:text-emerald-700"
            >
              Inicio
              <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-500 opacity-0 transition-all group-hover:scale-150 group-hover:opacity-100" />
            </Link>

            <div className="group relative py-2">
              <Link
                to="/impacto-quimico"
                className="relative transition-colors hover:text-emerald-700"
              >
                Impacto Químico
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full z-[60] w-[340px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="rounded-2xl border border-white/40 bg-white/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <div className="flex flex-col gap-1 text-[13px] font-semibold tracking-wide text-slate-700">
                    <button
                      type="button"
                      onClick={() => goToImpactoSection("contaminantes")}
                      className="rounded-xl px-3 py-3 text-left transition-colors hover:bg-slate-100 hover:text-emerald-700"
                    >
                      Contaminantes químicos
                    </button>

                    <button
                      type="button"
                      onClick={() => goToImpactoSection("metodos")}
                      className="rounded-xl px-3 py-3 text-left transition-colors hover:bg-slate-100 hover:text-emerald-700"
                    >
                      Métodos para reducir contaminación
                    </button>

                    <button
                      type="button"
                      onClick={() => goToImpactoSection("tecnologia")}
                      className="rounded-xl px-3 py-3 text-left transition-colors hover:bg-slate-100 hover:text-emerald-700"
                    >
                      Tecnología para tratar contaminantes
                    </button>

                    <button
                      type="button"
                      onClick={() => goToImpactoSection("uso-responsable")}
                      className="rounded-xl px-3 py-3 text-left transition-colors hover:bg-slate-100 hover:text-emerald-700"
                    >
                      Uso responsable en el hogar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/propuestas"
              className="group relative transition-colors hover:text-emerald-700"
            >
              Propuestas
              <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-500 opacity-0 transition-all group-hover:scale-150 group-hover:opacity-100" />
            </Link>

            <Link
              to="/referencias"
              className="group relative transition-colors hover:text-emerald-700"
            >
              Referencias
              <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-500 opacity-0 transition-all group-hover:scale-150 group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}