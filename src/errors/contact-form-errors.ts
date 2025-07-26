export const contactFormErrors = {
  name: {
    required: 'Por favor digite su nombre',
    minLength: 'Digite al menos 2 carácteres',
    maxLength: 'Hay más de 50 carácteres',
  },

  lastName: {
    required: 'Por favor digite su nombre',
    minLength: 'Digite al menos 2 carácteres',
    maxLength: 'Hay más de 50 carácteres',
  },

  email: { format: 'Formato de correo no válido' },

  phone: {
    required: 'Por favor digite su número telefónico',
    minLength: 'Número telefónico no válido',
  },

  service: { required: 'Elija el servicio que quiere recibir' },
};
