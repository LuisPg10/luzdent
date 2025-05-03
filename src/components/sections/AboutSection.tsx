import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

import placeHolderImage from '../../assets/placeholder.svg';
import { aboutContent } from '@/data/section-contents';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <img
              src={placeHolderImage}
              width="550"
              height="550"
              alt="Equipo de profesionales de la clínica dental"
              className="w-full rounded-xl object-cover shadow-xl"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
              Nuestro equipo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-cyan-800 sm:text-4xl md:text-5xl">
              Profesionales comprometidos con tu salud
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Nuestro equipo está formado por odontólogos especializados en
              diferentes áreas, con amplia experiencia y en constante formación
              para ofrecerte los mejores tratamientos.
            </p>
            <ul className="space-y-2">
              {aboutContent.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-cyan-600" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-4 bg-cyan-600 hover:bg-cyan-700">
              Conoce a nuestro equipo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
