export const whatsAppMessage = (
  name: string,
  lastName: string,
  service: string,
  message: string
) => {
  return `Hola, me gustaría apartar una cita en su consultorio\n${message ? '\n' + message + '\n' : ''}\nNombre: ${name}\nApellido: ${lastName}\nServicio: ${service}\n\nEspero su pronta respuesta`;
};
