import { Button } from '../ui/button';

import placeHolderImage from '../../assets/placeholder.svg';

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="w-full bg-gradient-to-r from-cyan-50 to-blue-50 py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-cyan-800 sm:text-4xl md:text-5xl lg:text-6xl/none">
              Sonrisas saludables para todos
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              En Luz Dent nos dedicamos a brindar atención odontológica de
              calidad con tecnología de vanguardia y un equipo de profesionales
              altamente calificados.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a href="#agendar-cita">
                <Button className="bg-cyan-600 hover:bg-cyan-700">
                  Agendar Cita
                </Button>
              </a>
              <a href="#adicional">
                <Button
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                >
                  Conocer Más
                </Button>
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <img
              src={placeHolderImage}
              width="550"
              height="550"
              alt="Equipo médico de la clínica dental"
              className="w-full rounded-xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
