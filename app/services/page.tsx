import Image from 'next/image';

const services = [
  {
    title: 'Residential Construction',
    description: 'Building high-quality homes with attention to detail and modern amenities.',
    color: 'bg-green-100',
    features: [
      'Custom Home Building',
      'Home Renovations',
      'Interior Finishing',
      'Sustainable Design'
    ]
  },
  {
    title: 'Commercial Construction',
    description: 'Creating innovative commercial spaces that meet business needs.',
    color: 'bg-green-100',
    features: [
      'Office Buildings',
      'Retail Spaces',
      'Industrial Facilities',
      'Restaurant Construction'
    ]
  },
  {
    title: 'Infrastructure Development',
    description: 'Developing crucial infrastructure projects for community growth.',
    color: 'bg-purple-100',
    features: [
      'Road Construction',
      'Bridge Development',
      'Public Facilities',
      'Urban Planning'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-green-100">
            Comprehensive construction solutions for every project
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`h-48 ${service.color} flex items-center justify-center`}>
                <div className="text-4xl font-bold text-gray-700">{service.title.split(' ')[0]}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your construction needs
          </p>
          <a
            href="/contacts"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
} 