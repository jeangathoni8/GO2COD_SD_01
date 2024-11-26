import { BookUser, Search, Edit3, Trash2, ArrowRight } from 'lucide-react';

interface Props {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-2xl shadow-xl">
              <BookUser className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Save <span className="text-blue-600">Me</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
            Streamline your connections with our modern, intuitive contact management solution.
            Simple, powerful, and designed for efficiency.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
            <button
              onClick={onGetStarted}
              className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Search,
                title: 'Smart Search',
                description: 'Find contacts instantly with powerful search across all contact details.'
              },
              {
                icon: Edit3,
                title: 'Easy Editing',
                description: 'Update contact information with an intuitive and responsive interface.'
              },
              {
                icon: Trash2,
                title: 'Simple Organization',
                description: 'Manage your contacts effortlessly with modern organization tools.'
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-200" />
                <div className="relative h-full bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl shadow-md mb-6">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-500">
            Ready to get organized? Start managing your contacts today.
          </p>
        </div>
      </div>
    </div>
  );
}