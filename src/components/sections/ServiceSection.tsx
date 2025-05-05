import placeHolderImage from '../../assets/placeholder.svg';
import { serviceContent } from '@/data/section-contents';
import { CustomCard } from '../ui/CustomCard';

export const ServiceSection = () => {
  return (
    <section
      id="servicios"
      className="w-full bg-gray-50 py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
              Nuestros servicios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-cyan-800 sm:text-5xl">
              Servicios odontológicos completos
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos una amplia gama de tratamientos dentales
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {serviceContent.map((service, index) => (
            <CustomCard
              id={service.title.split(' ')[0].toLowerCase()}
              key={index}
              image={service.image || placeHolderImage}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
