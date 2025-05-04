import { FormEvent } from 'react';

import { serviceOptions } from '@/data/section-contents';
import { Button } from '../ui/button';
import { Input } from '../ui/Input';
import { Options } from '../ui/Options';
import { TextArea } from '../ui/TextArea';

export const ContactForm = () => {
  const onFormSumit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Envío del formulario realizado');
  };

  return (
    <form onSubmit={onFormSumit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input type="text" name="name" label="Nombre" placeholder="Tu nombre" />
        <Input
          type="text"
          name="last-name"
          label="Apellido"
          placeholder="Tu apellido"
        />
      </div>

      <div className="flex flex-col gap-3">
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="nombre@email.com"
        />

        <Input
          type="tel"
          name="phone"
          label="Teléfono"
          placeholder="300 256 4356"
        />

        <Options
          id="service"
          label="Servicio de interés"
          defaultOption="Selecciona un servicio"
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
        />
      </div>

      <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
        Enviar solicitud
      </Button>
    </form>
  );
};
