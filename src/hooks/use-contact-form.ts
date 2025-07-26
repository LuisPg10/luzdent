import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';

import { phoneNumberToString, stringToPhoneNumber } from '@/lib/format';
import { ContactFormInputs } from '@/types/ContactFormInputs';

export const useContactForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<ContactFormInputs>();

  const sendData = (contactData: ContactFormInputs) => {
    console.log({
      ...contactData,
      phone: phoneNumberToString(contactData.phone),
    });
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
