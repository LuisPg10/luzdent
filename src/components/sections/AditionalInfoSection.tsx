import { infoContent } from '@/data/section-contents';
import { SpecialCard } from '../ui/SpecialCard';

export const AditionalInfoSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
              Por qué elegirnos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-cyan-800 sm:text-5xl">
              Cuidado dental de excelencia
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos tratamientos personalizados con la última tecnología y
              un equipo de especialistas comprometidos con tu salud bucal.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          {infoContent.map((info, index) => (
            <SpecialCard
              key={index}
              title={info.title}
              description={info.description}
              headerComponent={
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                  <info.icon className="h-6 w-6 text-cyan-600" />
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
