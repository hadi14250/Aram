import Link from 'next/link';

const InfoBlocks = () => {
  const blocks = [
    {
      title: 'At ARAM GROUP',
      description: 'We are committed to integrity, performance, and value. Our success is built on long-term partnerships and client satisfaction.',
      link: '/about',
    },
    {
      title: 'Highest Standards in Contracting & Construction',
      description: 'We maintain the highest standards in contracting and construction, ensuring quality and excellence in every project.',
      link: '/business',
    },
    {
      title: 'Not just a trading company',
      description: 'We are more than just a trading company. We are a comprehensive solution provider across multiple sectors.',
      link: '/business',
    },
    {
      title: 'Read More',
      description: 'Discover more about our services and how we can help you achieve your goals.',
      link: '/about',
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-green-900 mb-4">{block.title}</h3>
              <p className="text-gray-700 mb-6">{block.description}</p>
              <Link
                href={block.link}
                className="inline-block bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800 transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoBlocks; 