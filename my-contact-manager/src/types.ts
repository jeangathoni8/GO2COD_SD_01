export interface Contact {
    id: string;
    name: string;
    phone: string;
    email: string;
  }
  
  export type ContactFormData = Omit<Contact, 'id'>;