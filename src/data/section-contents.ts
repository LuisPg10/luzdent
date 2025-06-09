import { InterestDentistryService } from '@/types/InterestDentistryService';
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Star,
  User,
} from 'lucide-react';

//* ADITIONAL INFO
export const infoContent = [
  {
    title: 'Tecnología avanzada',
    description:
      'Contamos con equipos de última generación para diagnósticos precisos y tratamientos efectivos.',
    icon: CheckCircle,
  },

  {
    title: 'Profesionales expertos',
    description:
      'Nuestro equipo está formado por especialistas con amplia experiencia en todas las áreas de la odontología.',
    icon: User,
  },

  {
    title: 'Atención personalizada',
    description:
      'Cada paciente es único, por eso desarrollamos planes de tratamiento adaptados a tus necesidades específicas.',
    icon: Star,
  },
];

//* INFO FOR SERVICE SECTION
export const serviceContent = [
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
];

//* INFO FOR ABOUT SECTION
export const aboutContent = [
  'Odontólogos con más de 15 años de experiencia',
  'Formación continua en las últimas técnicas',
  'Trato humano y cercano con cada paciente',
];

//* INFO FOR TESTIMONIAL CONTENT
export const testimonialContent = [
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
];

//* INFO FOR CONTACT SECTION
export const contactContent = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: ['Cra 78 Calle 57C 10S Barrio Roma Kennedy'],
  },
  { icon: Phone, title: 'Teléfono', content: ['+57 314 4608141'] },
  { icon: Mail, title: 'Email', content: ['luzdentodontologia@gmail.com'] },
  {
    icon: Clock,
    title: 'Horario',
    content: ['Lunes a Viernes: 9:00 - 20:00', 'Sábados: 9:00 - 14:00'],
  },
];

export const serviceOptions = [
  {
    value: InterestDentistryService.GeneralDentistry,
    text: 'Odontología general',
  },
  { value: InterestDentistryService.Orthodontics, text: 'Ortodoncia' },
  {
    value: InterestDentistryService.DentalImplants,
    text: 'Implantes dentales',
  },
  { value: InterestDentistryService.DentalAesthetics, text: 'Estética dental' },
  { value: InterestDentistryService.EdiatricOdont, text: 'Odontopediatría' },
  { value: InterestDentistryService.Periodontics, text: 'Periodoncia' },
];
