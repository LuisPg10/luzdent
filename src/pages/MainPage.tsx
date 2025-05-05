import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AditionalInfoSection } from '@/components/sections/AditionalInfoSection';
import { ServiceSection } from '@/components/sections/ServiceSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Facebook, Instagram } from '@/components/ui/icons';

export default function MainPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <Navbar />
      </header>

      <main className="flex-1">
        <HeroSection />

        <AditionalInfoSection />

        <ServiceSection />

        <AboutSection />

        <TestimonialSection />

        <ContactSection />
      </main>

      <footer className="w-full border-t bg-cyan-800 text-white">
        <div className="flex flex-col gap-6 px-4 py-12 md:px-6 lg:flex-row lg:gap-12">
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
              <h3 className="text-lg font-medium">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#odontología"
                    className="text-gray-200 hover:text-white"
                  >
                    Odontología general
                  </a>
                </li>
                <li>
                  <a
                    href="#ortodoncia"
                    className="text-gray-200 hover:text-white"
                  >
                    Ortodoncia
                  </a>
                </li>
                <li>
                  <a
                    href="#implantes"
                    className="text-gray-200 hover:text-white"
                  >
                    Implantes dentales
                  </a>
                </li>
                <li>
                  <a
                    href="#estética"
                    className="text-gray-200 hover:text-white"
                  >
                    Estética dental
                  </a>
                </li>
                <li>
                  <a
                    href="#odontopediatría"
                    className="text-gray-200 hover:text-white"
                  >
                    Odontopediatría
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Equipo médico
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 py-6">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
            <p className="text-center text-sm text-gray-200 md:text-left">
              © {new Date().getFullYear()} Luz Dent. Todos los derechos
              reservados.
            </p>
            <p className="text-center text-sm text-gray-200 md:text-left">
              Diseñado con ❤️ para tu salud bucal
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
