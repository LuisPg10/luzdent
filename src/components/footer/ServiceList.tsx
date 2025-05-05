import { serviceContent } from '@/data/section-contents';

export const ServiceList = () => {
  return (
    <>
      <h3 className="text-lg font-medium">Servicios</h3>
      <ul className="space-y-2">
        {serviceContent.map((service, i) => {
          const href = `#${service.title.split(' ')[0].toLowerCase()}`;
          return (
            <li key={i}>
              <a href={href} className="text-gray-200 hover:text-white">
                {service.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
