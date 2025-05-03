import {
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  User,
  Star,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Navbar } from '@/components/ui/Navbar';

import placeHolderImage from '../assets/placeholder.svg';

export default function MainPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <Navbar />
      </header>
      <main className="flex-1">
        <section
          id="inicio"
          className="w-full bg-gradient-to-r from-cyan-50 to-blue-50 py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-cyan-800 sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sonrisas saludables para toda la familia
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  En Luz Dent nos dedicamos a brindar atención odontológica de
                  calidad con tecnología de vanguardia y un equipo de
                  profesionales altamente calificados.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-cyan-600 hover:bg-cyan-700">
                    Agendar Cita
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                  >
                    Conocer Más
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <img
                  src={placeHolderImage}
                  width="550"
                  height="550"
                  alt="Equipo médico de la clínica dental"
                  className="w-full rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
                  Por qué elegirnos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-cyan-800 sm:text-5xl">
                  Cuidado dental de excelencia
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos tratamientos personalizados con la última tecnología
                  y un equipo de especialistas comprometidos con tu salud bucal.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="border-cyan-100 shadow-md transition-shadow hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl text-cyan-800">
                    Tecnología avanzada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-500">
                    Contamos con equipos de última generación para diagnósticos
                    precisos y tratamientos efectivos.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-cyan-100 shadow-md transition-shadow hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <User className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl text-cyan-800">
                    Profesionales expertos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-500">
                    Nuestro equipo está formado por especialistas con amplia
                    experiencia en todas las áreas de la odontología.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-cyan-100 shadow-md transition-shadow hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <Star className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl text-cyan-800">
                    Atención personalizada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-500">
                    Cada paciente es único, por eso desarrollamos planes de
                    tratamiento adaptados a tus necesidades específicas.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="servicios"
          className="w-full bg-gray-50 py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
                  Nuestros servicios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-cyan-800 sm:text-5xl">
                  Servicios odontológicos completos
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de tratamientos dentales para toda
                  la familia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  title: 'Odontología general',
                  description:
                    'Limpiezas, empastes, extracciones y tratamientos preventivos para mantener tu salud bucal.',
                  image: '',
                },
                {
                  title: 'Ortodoncia',
                  description:
                    'Brackets tradicionales, invisibles y otros tratamientos para corregir la posición de tus dientes.',
                  image: '',
                },
                {
                  title: 'Implantes dentales',
                  description:
                    'Soluciones permanentes para reemplazar dientes perdidos con resultados naturales.',
                  image: '',
                },
                {
                  title: 'Estética dental',
                  description:
                    'Blanqueamientos, carillas y otros procedimientos para mejorar la apariencia de tu sonrisa.',
                  image: '',
                },
                {
                  title: 'Odontopediatría',
                  description:
                    'Atención especializada para los más pequeños en un ambiente amigable y seguro.',
                  image: '',
                },
                {
                  title: 'Periodoncia',
                  description:
                    'Tratamientos para las enfermedades de las encías y tejidos que soportan los dientes.',
                  image: '',
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-cyan-100 shadow-md transition-shadow hover:shadow-lg"
                  withImage
                >
                  <img
                    src={service.image || placeHolderImage}
                    alt={service.title}
                    width="300"
                    height="200"
                    className="h-48 w-full object-cover"
                  />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-cyan-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-500">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="nosotros"
          className="w-full bg-white py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <img
                  src={placeHolderImage}
                  width="550"
                  height="550"
                  alt="Equipo de profesionales de la clínica dental"
                  className="w-full rounded-xl object-cover shadow-xl"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
                  Nuestro equipo
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-cyan-800 sm:text-4xl md:text-5xl">
                  Profesionales comprometidos con tu salud
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Nuestro equipo está formado por odontólogos especializados en
                  diferentes áreas, con amplia experiencia y en constante
                  formación para ofrecerte los mejores tratamientos.
                </p>
                <ul className="space-y-2">
                  {[
                    'Odontólogos con más de 15 años de experiencia',
                    'Especialistas certificados en todas las áreas',
                    'Formación continua en las últimas técnicas',
                    'Trato humano y cercano con cada paciente',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-cyan-600" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-4 bg-cyan-600 hover:bg-cyan-700">
                  Conoce a nuestro equipo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonios"
          className="w-full bg-gradient-to-r from-cyan-50 to-blue-50 py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
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
              {[
                {
                  name: 'María González',
                  text: 'Excelente atención y profesionalismo. Me realizaron un tratamiento de ortodoncia y estoy muy satisfecha con los resultados.',
                  rating: 5,
                },
                {
                  name: 'Carlos Rodríguez',
                  text: 'Llevaba años con miedo al dentista hasta que encontré esta clínica. El trato es excepcional y los tratamientos prácticamente indoloros.',
                  rating: 5,
                },
                {
                  name: 'Laura Martínez',
                  text: 'Mi hijo de 5 años tenía pánico al dentista, pero el equipo de odontopediatría supo ganarse su confianza. Ahora va encantado a sus revisiones.',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-cyan-100 shadow-md transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
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
                    <CardTitle className="text-xl text-cyan-800">
                      {testimonial.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-500">
                      "{testimonial.text}"
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="w-full bg-white py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
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
                  visítanos en nuestra clínica.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                      <MapPin className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-cyan-800">Dirección</h3>
                      <p className="text-gray-500">Av. Principal 123, Ciudad</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                      <Phone className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-cyan-800">Teléfono</h3>
                      <p className="text-gray-500">+123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                      <Mail className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-cyan-800">Email</h3>
                      <p className="text-gray-500">info@luzdent.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                      <Clock className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-cyan-800">Horario</h3>
                      <p className="text-gray-500">
                        Lunes a Viernes: 9:00 - 20:00
                      </p>
                      <p className="text-gray-500">Sábados: 9:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Card className="border-cyan-100 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-cyan-800">
                      Agenda tu cita
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      Completa el formulario y nos pondremos en contacto contigo
                      lo antes posible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="nombre"
                            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Nombre
                          </label>
                          <input
                            id="nombre"
                            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Tu nombre"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="apellido"
                            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Apellido
                          </label>
                          <input
                            id="apellido"
                            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Tu apellido"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="telefono"
                          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Teléfono
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="+123 456 7890"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="servicio"
                          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Servicio de interés
                        </label>
                        <select
                          id="servicio"
                          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Selecciona un servicio</option>
                          <option value="general">Odontología general</option>
                          <option value="ortodoncia">Ortodoncia</option>
                          <option value="implantes">Implantes dentales</option>
                          <option value="estetica">Estética dental</option>
                          <option value="pediatria">Odontopediatría</option>
                          <option value="periodoncia">Periodoncia</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="mensaje"
                          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Mensaje
                        </label>
                        <textarea
                          id="mensaje"
                          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[100px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Cuéntanos más sobre tu consulta..."
                        />
                      </div>
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                        Enviar solicitud
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
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
