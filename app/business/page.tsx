import Link from "next/link";
import Image from "next/image";
import Footer from '../components/footer';

export default function Business() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-green-900">
              Aram Group
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-green-900">
                Home
              </Link>
              <Link href="/summary" className="text-gray-600 hover:text-green-900">
                Summary Information
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-900">
                About Us
              </Link>
              <Link href="/business" className="text-green-900 font-semibold">
                Business & Expertise
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-green-900">
                Projects
              </Link>
              <Link href="/vision" className="text-gray-600 hover:text-green-900">
                Vision & Mission
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 bg-green-900 text-white overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Business & Expertise
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive solutions across construction, trading, and agricultural services
          </p>
        </div>
      </section>


      {/* Business Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aram Construction */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96">
                <Image
                  src="/images/aram-construction.jpeg"
                  alt="Aram Construction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aram Construction</h2>
                <p className="text-gray-700 mb-6">
                Our civil and structural construction services encompass a full spectrum of essential infrastructure and building solutions. We oversee every phase of the project lifecycle—handling construction from the ground up with precision and reliability. From groundwork and foundations to the final handover of fully operational structures, we proudly serve both public and private sector clients across the UAE, maintaining the highest standards of safety, durability, and efficiency.
                </p>
                <h3 className="text-xl font-bold text-green-900 mb-4">Our Services</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Complete buildings construction, repair, maintenance, and renovation</li>
                  <li>End-to-end project execution from design to handover</li>
                  <li>Drainage, sewage, and water system infrastructure</li>
                  <li>Earthwork, site preparation, and land clearing</li>
                  <li>Foundation and piling works</li>
                  <li>Fencing, including fabricated walls and wire fencing</li>
                  <li>Fire alarm and fire protection systems installation</li>
                  <li>Air conditioning systems and equipment setup</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Aram Golden Line General Trading */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aram Golden Line General Trading</h2>
                <p className="text-gray-700 mb-6">
                Supplying quality products and tailored solutions across industries, with reliable service and trusted partnerships.
                </p>
                <p className="text-gray-700 mb-6">
                We work with both public and private sectors, including municipalities, health facilities, and government entities. Our trading services cover sourcing, procurement, and contracting, delivering value through dependable supply and industry-specific solutions.
                </p>
                <h3 className="text-xl font-bold text-green-900 mb-4">Our Approach</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Product sourcing and market research</li>
                  <li>Quality assurance</li>
                  <li>Logistics and supply chain management</li>
                  <li>Industry-specific solutions</li>
                  <li>Contracting and procurement</li>
                  <li>Long-term partnership development</li>
                </ul>
              </div>
              <div className="relative h-96 order-1 md:order-2">
                <Image
                  src="/images/general-trading.jpeg"
                  alt="Aram Golden Line General Trading"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Golden Aram Building Contracting */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96">
                <Image
                  src="/images/building-contracting.jpeg"
                  alt="Golden Aram Building Contracting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Golden Aram Building Contracting</h2>
                <p className="text-gray-700 mb-6">
                  Expertly managing construction, renovation, and maintenance projects with a focus on quality, efficiency, and long-term value to ensure complete client satisfaction.
                </p>
                <p className="text-gray-700 mb-6">
                  At Golden Aram Building Contracting, we provide expert contracting services focused on project supervision, efficient management, and above all, client satisfaction. We ensure every stage of the project is handled with precision, transparency, and professionalism.
                </p>
                <h3 className="text-xl font-bold text-green-900 mb-4">Our Services</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Complete project and site supervision</li>
                  <li>Strict quality control and safety measures</li>
                  <li>Subcontractor coordination and resource planning</li>
                  <li>Procurement, budgeting, and cost control</li>
                  <li>On-time delivery with clear client communication</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Aram Golden Line Agricultural Services */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aram Golden Line Agricultural Services</h2>
                <p className="text-gray-700 mb-6">
                Providing reliable support and innovative solutions for farming and agribusiness, focused on productivity, sustainability, and complete client satisfaction.
                </p>
                <p className="text-gray-700 mb-6">
                Our agricultural services division enhances outdoor environments through sustainable landscaping, expert plant care, and creative floral solutions. We proudly work with municipalities and currently hold ongoing landscaping contracts across the Emirates. Our tailored green space solutions serve both commercial and residential projects, emphasizing aesthetics, functionality, and long-term care.
                </p>
                <h3 className="text-xl font-bold text-green-900 mb-4">Our Services</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Project landscaping design and execution</li>
                  <li>Landscaping maintenance and upkeep</li>
                  <li>Supplying indoor and outdoor plants</li>
                  <li>Flower arrangement and decorative services</li>
                  <li>Seasonal planting and garden enhancement</li>
                  <li>Irrigation system installation and maintenance</li>
                </ul>
              </div>
              <div className="relative h-96 order-1 md:order-2">
                <Image
                  src="/images/agricultrual.jpeg"
                  alt="Aram Golden Line Agricultural Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-green-900 text-white overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us to discuss how we can help with your next project, whether it's construction, trading, or agricultural services.
          </p>
          <Link
            href="/Contact"
            className="inline-block bg-white text-green-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
} 