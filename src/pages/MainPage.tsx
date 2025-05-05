import { Navbar } from '@/components/ui/Navbar';
import {
  HeroSection,
  AditionalInfoSection,
  ServiceSection,
  AboutSection,
  TestimonialSection,
  ContactSection,
} from '@/components/sections';
import { FooterInfo } from '@/components/footer/FooterInfo';

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
          <FooterInfo />
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
