# Contact Manager

A modern, responsive contact management application built with React and TypeScript. This application provides a beautiful user interface for managing contacts with features like real-time search, CRUD operations, and responsive design.

![Contact Manager Screenshot](https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=1200&h=630)

## Features

- **Contact Management**
  - Add new contacts with name, phone, and email
  - View contacts in a responsive grid layout
  - Edit existing contact information
  - Delete contacts with confirmation
  - Click-to-call phone numbers
  - Click-to-email functionality

- **Search Functionality**
  - Real-time search across all contact fields
  - Instant filtering as you type
  - Search through names, phone numbers, and email addresses

- **Modern UI/UX**
  - Clean and intuitive interface
  - Responsive design that works on all devices
  - Beautiful transitions and hover effects
  - Clear visual feedback for all actions
  - Accessible form inputs with proper labels
  - Loading states and empty states handled

## Tech Stack

- **Frontend Framework**
  - React 18
  - TypeScript
  - Vite (for blazing-fast development)

- **Styling**
  - Tailwind CSS (for utility-first styling)
  - Custom CSS (for base styles)

- **Icons & UI Elements**
  - Lucide React (for beautiful, consistent icons)

- **Type Safety**
  - TypeScript for static typing
  - Strict type checking enabled
  - Interface definitions for all components

- **Development Tools**
  - ESLint (for code quality)
  - PostCSS (for CSS processing)
  - Autoprefixer (for CSS compatibility)

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ContactForm.tsx  # Form for adding/editing contacts
│   ├── ContactList.tsx  # Grid display of contacts
│   └── SearchBar.tsx    # Search input component
├── types.ts             # TypeScript interfaces
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Component Architecture

- **App.tsx**: Main component that manages state and coordinates other components
- **ContactForm**: Reusable form component for adding and editing contacts
- **ContactList**: Displays contacts in a responsive grid with action buttons
- **SearchBar**: Handles user input for filtering contacts

## State Management

The application uses React's built-in useState and useMemo hooks for:
- Managing contacts list
- Handling search queries
- Controlling UI states (add/edit modes)
- Optimizing search performance

## Type Definitions

```typescript
interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}

type ContactFormData = Omit<Contact, 'id'>;
```

## Performance Optimizations

- Memoized contact filtering
- Efficient state updates
- Optimized re-renders
- Lazy loading where applicable

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on mobile devices
- Progressive enhancement for older browsers

## Future Enhancements

- Contact groups/categories
- Contact avatars
- Import/export functionality
- Dark mode support
- Keyboard shortcuts
- Bulk actions
- Contact favorites

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## License

MIT License - feel free to use this project for personal or commercial purposes.
