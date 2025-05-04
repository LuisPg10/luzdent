import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AditionalInfoSection } from '@/components/sections/AditionalInfoSection';
import { ServiceSection } from '@/components/sections/ServiceSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { ContactSection } from '@/components/sections/ContactSection';

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
        <div className="container flex flex-col gap-6 px-4 py-12 md:px-6 lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-3 lg:w-1/3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">Luz Dent</span>
            </div>
            <p className="text-gray-200">
              Cuidamos de tu salud bucal con los mejores profesionales y la
              tecnología más avanzada.
            </p>
            <div className="mt-2 flex gap-4">
              <a href="#" className="text-gray-200 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Odontología general
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Ortodoncia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Implantes dentales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Estética dental
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
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
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Instalaciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Términos de servicio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white">
                    Política de cookies
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
