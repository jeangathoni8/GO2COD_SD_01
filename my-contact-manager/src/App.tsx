import React from 'react';
import { Contact, ContactFormData } from './types';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { SearchBar } from './components/SearchBar';
import { LandingPage } from './components/LandingPage';
import { UserPlus, Users } from 'lucide-react';

function App() {
  const [showLanding, setShowLanding] = React.useState(true);
  const [contacts, setContacts] = React.useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isAdding, setIsAdding] = React.useState(false);
  const [editingContact, setEditingContact] = React.useState<Contact | null>(null);

  const filteredContacts = React.useMemo(() => {
    const query = searchQuery.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query) ||
        contact.phone.includes(query) ||
        contact.email.toLowerCase().includes(query)
    );
  }, [contacts, searchQuery]);

  const handleAddContact = (data: ContactFormData) => {
    const newContact: Contact = {
      ...data,
      id: crypto.randomUUID(),
    };
    setContacts((prev) => [...prev, newContact]);
    setIsAdding(false);
  };

  const handleEditContact = (data: ContactFormData) => {
    if (!editingContact) return;
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === editingContact.id ? { ...data, id: contact.id } : contact
      )
    );
    setEditingContact(null);
  };

  const handleDeleteContact = (id: string) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      setContacts((prev) => prev.filter((contact) => contact.id !== id));
    }
  };

  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Contact Manager</h1>
          </div>
          {!isAdding && !editingContact && (
            <button
              onClick={() => setIsAdding(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <UserPlus size={20} className="mr-2" />
              Add Contact
            </button>
          )}
        </div>

        {(isAdding || editingContact) && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              {isAdding ? 'Add New Contact' : 'Edit Contact'}
            </h2>
            <ContactForm
              onSubmit={isAdding ? handleAddContact : handleEditContact}
              initialData={editingContact ?? undefined}
              onCancel={() => {
                setIsAdding(false);
                setEditingContact(null);
              }}
            />
          </div>
        )}

        {!isAdding && !editingContact && (
          <>
            <div className="mb-6">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <ContactList
              contacts={filteredContacts}
              onEdit={setEditingContact}
              onDelete={handleDeleteContact}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;