import placeHolderImage from '../../assets/placeholder.svg';
import profile from '../../assets/images/profile.png';

export const TeamSection = () => {
  return (
    <section id="equipo" className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
              Nuestro equipo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-cyan-800 sm:text-5xl">
              Profesionales que cuidan de tu sonrisa
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conoce a los especialistas que harán todo lo posible para que
              tengas la mejor experiencia dental.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl py-12">
          <div className="overflow-hidden rounded-xl border border-cyan-100 bg-white shadow-md transition-all hover:shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img
                  src={profile || placeHolderImage}
                  alt="Foto del Dr. Daison Gómez"
                  width={400}
                  height={400}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:w-3/5">
                <h3 className="mb-2 text-2xl font-bold text-cyan-800">
                  Dr. Daison Daniel Gómez Pinto
                </h3>
                <p className="mb-4 text-lg font-medium text-cyan-600">
                  Odontólogo General
                </p>
                <p className="text-gray-500">
                  Con más de 15 años de experiencia en odontología general y
                  estética dental, el Dr. Gómez lidera nuestro equipo con pasión
                  y dedicación. Graduado con honores de la Universidad Nacional
                  de Odontología, ha completado múltiples especializaciones en
                  Europa y Estados Unidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
