import { Star } from 'lucide-react';

import { testimonialContent } from '@/data/section-contents';
import { SpecialCard } from '../ui/SpecialCard';

export const TestimonialSection = () => {
  return (
    <section
      id="testimonios"
      className="w-full bg-gradient-to-r from-cyan-50 to-blue-50 py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
              Testimonios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-cyan-800 sm:text-5xl">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              La satisfacción de nuestros pacientes es nuestro mejor aval.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {testimonialContent.map((testimonial, index) => (
            <SpecialCard
              key={index}
              title={testimonial.name}
              description={testimonial.text}
              headerComponent={
                <div className="mb-2 flex items-center gap-1">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-400"
                      />
                    ))}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
