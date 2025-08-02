import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';

import { stringToPhoneNumber } from '@/lib/format';
import { sendWhatsAppMessage } from '@/lib/send-data';
import { ContactFormInputs } from '@/types/ContactFormInputs';
import { whatsAppMessage } from '@/data/messages';

export const useContactForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<ContactFormInputs>();

  const sendData = (contactData: ContactFormInputs) => {
    const { name, lastName, service, message } = contactData;
    const finalMessage = whatsAppMessage(name, lastName, service, message);

    sendWhatsAppMessage(finalMessage);
  };

  const onPhoneChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = value.replace(/\D/g, '');
    const limitedValue = cleanedValue.slice(0, 10);
    const formattedPhone = stringToPhoneNumber(limitedValue);

    setValue('phone', formattedPhone);
  };

  return {
    errors,
    onFormSubmit: handleSubmit(sendData),
    onPhoneChange,
    register,
  };
};
