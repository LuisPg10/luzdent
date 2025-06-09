import { InterestDentistryService } from './InterestDentistryService';

export type ContactFormInputs = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  service: InterestDentistryService;
  message: string;
};
