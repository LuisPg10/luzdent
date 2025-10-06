import { useEffect } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import {
  HeroSection,
  AditionalInfoSection,
  ServiceSection,
  TestimonialSection,
  ContactSection,
  TeamSection,
} from '@/components/sections';
import { FooterInfo } from '@/components/footer/FooterInfo';
import { scrollToHash } from '@/lib/scroll-to-hash';

import whatsappLogo from '../assets/images/whatsapp-logo.svg';
import { getEnvironment } from '@/config/environment';

const { VITE_PHONE_NUMBER } = getEnvironment();

export default function MainPage() {
  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <Navbar />
      </header>

      <main className="flex-1">
        <HeroSection />

        <AditionalInfoSection />

        <ServiceSection />

        {/* <AboutSection /> */}

        <TeamSection />

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

      <a
        href={`https://wa.me/${VITE_PHONE_NUMBER}`}
        target="_blank"
        className="fixed right-6 bottom-10 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] md:right-10"
      >
        <img
          width={60}
          height={60}
          src={whatsappLogo}
          alt="Icono de whatsapp"
        />
      </a>
    </div>
  );
}
