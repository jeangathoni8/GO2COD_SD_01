import { Contact } from '../types';
import { Pencil, Trash2, Mail, Phone } from 'lucide-react';

interface Props {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
  onDelete: (id: string) => void;
}

export function ContactList({ contacts, onEdit, onDelete }: Props) {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No contacts found. Add your first contact to get started!
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-lg text-gray-900">{contact.name}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(contact)}
                className="text-gray-400 hover:text-blue-500"
                title="Edit contact"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => onDelete(contact.id)}
                className="text-gray-400 hover:text-red-500"
                title="Delete contact"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center text-sm text-gray-600">
              <Phone size={14} className="mr-2" />
              <a href={`tel:${contact.phone}`} className="hover:text-blue-600">
                {contact.phone}
              </a>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Mail size={14} className="mr-2" />
              <a href={`mailto:${contact.email}`} className="hover:text-blue-600">
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}