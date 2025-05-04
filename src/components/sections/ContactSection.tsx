import { ListTitle } from '@/components/ui/ListTitle';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { contactContent } from '@/data/section-contents';
import { ContactForm } from '../contact/ContactForm';

export const ContactSection = () => {
  return (
    <section id="contacto" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
              Contacto
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-cyan-800 sm:text-4xl">
              ¿Necesitas más información?
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Estamos aquí para resolver todas tus dudas. Contáctanos o
              visítanos en nuestro consultorio.
            </p>
            <div className="mt-6 space-y-4">
              {contactContent.map(({ icon, title, content }, i) => (
                <ListTitle
                  key={i}
                  icon={icon}
                  title={title}
                  content={content}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-cyan-100 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-cyan-800">
                  Agenda tu cita
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Completa el formulario y nos pondremos en contacto contigo lo
                  antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
