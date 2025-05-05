import { Facebook, Instagram } from '../ui/icons';
import { AboutList } from './AboutList';
import { ServiceList } from './ServiceList';

export const FooterInfo = () => {
  return (
    <>
      <div className="flex flex-col gap-3 lg:w-1/3">
        <span className="text-2xl font-bold">Luz Dent</span>
        <p className="text-gray-200">
          Cuidamos de tu salud bucal con los mejores profesionales y la
          tecnología más avanzada.
        </p>

        <div className="mt-2 flex gap-4">
          <a
            className="text-gray-200 hover:text-white"
            href="https://web.facebook.com/profile.php?id=100088681990540"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Facebook</span>
            <Facebook />
          </a>

          <a
            className="text-gray-200 hover:text-white"
            href="https://www.instagram.com/luzdentodontologia"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Instagram</span>
            <Instagram />
          </a>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="space-y-3">
          <ServiceList />
        </div>

        <div className="space-y-3">
          <AboutList />
        </div>
      </div>
    </>
  );
};
