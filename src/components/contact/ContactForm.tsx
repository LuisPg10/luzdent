import { useForm } from 'react-hook-form';

import { serviceOptions } from '@/data/section-contents';
import { ContactFormInputs } from '@/types/ContactFormInputs';
import { contactFormErrors } from '@/errors/contact-form-errors';
import { Button } from '../ui/button';
import { Input } from '../ui/Input';
import { Options } from '../ui/Options';
import { TextArea } from '../ui/TextArea';

export const ContactForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ContactFormInputs>();

  const onFormSumit = (contactData: ContactFormInputs) => {
    console.log(contactData);
  };

  return (
    <form onSubmit={handleSubmit(onFormSumit)} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          required
          id="name"
          type="text"
          label="Nombre"
          placeholder="Tu nombre"
          error={errors.name?.message}
          {...register('name', { required: contactFormErrors.name })}
        />
        <Input
          required
          id="lastName"
          type="text"
          label="Apellido"
          placeholder="Tu apellido"
          error={errors.lastName?.message}
          {...register('lastName', { required: contactFormErrors.lastName })}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Input
          id="email"
          type="email"
          label="Correo"
          placeholder="nombre@email.com"
          {...register('email')}
        />

        <Input
          required
          id="phone"
          type="tel"
          label="Teléfono"
          placeholder="300 256 4356"
          error={errors.phone?.message}
          {...register('phone', { required: contactFormErrors.phone })}
        />

        <Options
          required
          id="service"
          label="Servicio de interés"
          error={errors.service?.message}
          defaultOption="Selecciona un servicio"
          {...register('service', { required: contactFormErrors.service })}
        >
          {serviceOptions.map(({ value, text }, i) => (
            <option key={i} value={value}>
              {text}
            </option>
          ))}
        </Options>

        <TextArea
          id="message"
          label="Mensaje"
          placeholder="Cuentanos más sobre tu consulta"
          {...register('message')}
        />
      </div>

      <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
        Enviar solicitud
      </Button>
    </form>
  );
};
