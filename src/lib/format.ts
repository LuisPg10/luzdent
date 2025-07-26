export const stringToPhoneNumber = (value: string) => {
  const match = value.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (!match) return value;

  return [match[1], match[2], match[3]].filter(Boolean).join(' ');
};

export const phoneNumberToString = (value: string) => {
  return value.split(' ').join('');
};
