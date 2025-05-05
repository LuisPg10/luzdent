import { Button } from './button';

export const Navbar = () => {
  return (
    <div className="flex h-16 items-center justify-between px-6 md:px-10">
      <h1 className="text-2xl font-bold text-cyan-600">Luz Dent</h1>

      <nav className="hidden md:flex">
        <ul className="flex gap-6">
          <li>
            <a
              href="#inicio"
              className="relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-600 after:transition-all after:duration-300 hover:text-cyan-600 hover:after:w-full"
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="#servicios"
              className="relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-600 after:transition-all after:duration-300 hover:text-cyan-600 hover:after:w-full"
            >
              Servicios
            </a>
          </li>

          <li>
            <a
              href="#nosotros"
              className="relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-600 after:transition-all after:duration-300 hover:text-cyan-600 hover:after:w-full"
            >
              Nosotros
            </a>
          </li>

          <li>
            <a
              href="#equipo"
              className="relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-600 after:transition-all after:duration-300 hover:text-cyan-600 hover:after:w-full"
            >
              Equipo
            </a>
          </li>

          <li>
            <a
              href="#testimonios"
              className="relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-600 after:transition-all after:duration-300 hover:text-cyan-600 hover:after:w-full"
            >
              Testimonios
            </a>
          </li>

          <li>
            <a
              href="#contacto"
              className="relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-600 after:transition-all after:duration-300 hover:text-cyan-600 hover:after:w-full"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <a href="#agendar-cita">
        <Button className="mr-2 bg-cyan-600 hover:bg-cyan-700">
          Agendar Cita
        </Button>
      </a>
    </div>
  );
};
