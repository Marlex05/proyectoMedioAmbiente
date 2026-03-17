export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">

        <div className="md:w-1/2 text-left">
          <p className="text-lg font-semibold mb-2">
            Proyecto Medio Ambiente
          </p>

          <p className="text-sm text-gray-300">
            La química en la protección de la salud y el ambiente
          </p>

          <p className="text-sm text-gray-400 mt-4">
            © 2026 Proyecto escolar
          </p>
        </div>

        <div className="md:w-1/2 text-right space-y-2 text-sm text-gray-300">
          <p>Karla Renata Barajas Márquez.</p>
          <p>Ximena Carpio Méndez.</p>
          <p>Emiliano Córtes Cázares.</p>
          <p>Yosselyn García Escalera.</p>
          <p>Elena Leticia Muñoz Silva.</p>
          <p>Amanda Sánchez Soto.</p>
          <p>Ayari Ximena Vigil Guerra.</p>
        </div>

      </div>

    </footer>
  );
}