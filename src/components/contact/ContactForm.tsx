import { serviceOptions } from '@/data/section-contents';
import { contactFormErrors } from '@/errors/contact-form-errors';
import { useContactForm } from '@/hooks/use-contact-form';
import { Button } from '../ui/button';
import { Input } from '../ui/Input';
import { Options } from '../ui/Options';
import { TextArea } from '../ui/TextArea';

export const ContactForm = () => {
  const { errors, onFormSubmit, register } = useContactForm();

  return (
    <form onSubmit={onFormSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          required
          id="name"
          type="text"
          label="Nombre"
          placeholder="Tu nombre"
          error={errors.name?.message}
          {...register('name', {
            required: contactFormErrors.name.required,
            minLength: { value: 2, message: contactFormErrors.name.minLength },
            maxLength: { value: 50, message: contactFormErrors.name.maxLength },
          })}
        />

        <Input
          required
          id="lastName"
          type="text"
          label="Apellido"
          placeholder="Tu apellido"
          error={errors.lastName?.message}
          {...register('lastName', {
            required: contactFormErrors.lastName.required,
            minLength: {
              value: 2,
              message: contactFormErrors.lastName.minLength,
            },
            maxLength: {
              value: 50,
              message: contactFormErrors.lastName.maxLength,
            },
          })}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Options
          required
          id="service"
          label="Servicio de interés"
          error={errors.service?.message}
          defaultOption="Selecciona un servicio"
          {...register('service', {
            required: contactFormErrors.service.required,
          })}
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
