import Link from "next/link";
import Image from "next/image";

export default function Summary() {
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
              <Link href="/summary" className="text-green-900 font-semibold">
                Summary Information
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-900">
                About Us
              </Link>
              <Link href="/business" className="text-gray-600 hover:text-green-900">
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
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Summary Information
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            An overview of Aram Group's divisions and their core services
          </p>
        </div>
      </section>

      {/* Summary Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aram Group */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96">
                <Image
                  src="/images/services-img1.png"
                  alt="Aram Group"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/assets/logo/WhatsApp Image 2025-04-19 at 11.37.19.jpeg"
                    alt="Aram Group Logo"
                    width={250}
                    height={180}
                    className="shadow-lg"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aram Group</h2>
                <p className="text-gray-700 mb-6">
                  At Aram Group, we are committed to building long-term partnerships based on integrity, performance, value, and client satisfaction. Through our expertise in construction contracting, agriculture services, and business trading, we consistently deliver high-quality solutions tailored to our clients' needs.
                </p>
                <p className="text-gray-700">
                  Our diverse portfolio of services allows us to provide comprehensive solutions for a wide range of projects, from construction and infrastructure development to agricultural services and general trading. With a focus on quality, innovation, and sustainability, we strive to exceed client expectations in every project we undertake.
                </p>
              </div>
            </div>
          </div>

          {/* Aram Construction */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 order-1 md:order-2">
                <Image
                  src="/images/services-img1.png"
                  alt="Aram Construction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 order-2 md:order-1">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/assets/logo/ARAM.logo.jpg"
                    alt="Aram Group Logo"
                    width={250}
                    height={180}
                    className="shadow-lg"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aram Construction</h2>
                <p className="text-gray-700 mb-6">
                  Civil & Structural Construction – Specializing in building construction, repairs, maintenance, and renovations.
                </p>
                <p className="text-gray-700">
                  Our civil and structural construction services cover a wide range of essential infrastructure and building solutions. We specialize in creating durable, safe, and efficient structures—from foundations to full-scale systems—serving both public and private sector projects across the UAE.
                </p>
              </div>
            </div>
          </div>

          {/* Aram Golden Line General Trading */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96">
                <Image
                  src="/images/services-img5.jpg"
                  alt="Aram Golden Line General Trading"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/assets/logo/WhatsApp Image 2025-04-19 at 11.37.19 (1).jpeg"
                    alt="Aram Group Logo"
                    width={250}
                    height={180}
                    className="shadow-lg"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aram Golden Line General Trading</h2>
                <p className="text-gray-700 mb-6">
                  General Trading – Delivering quality products and tailored solutions across diverse industries, building trusted connections and ensuring reliable service every step of the way.
                </p>
                <p className="text-gray-700">
                  Our trading division connects markets and delivers value to clients across various sectors. We source high-quality products and provide tailored solutions to meet the specific needs of our clients, ensuring reliable service and building long-term partnerships.
                </p>
              </div>
            </div>
          </div>

          {/* Golden Aram Building Contracting */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 order-1 md:order-2">
                <Image
                  src="/images/services-img6.jpg"
                  alt="Golden Aram Building Contracting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 order-2 md:order-1">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/assets/logo/Golden Aram Building Contracting.png"
                    alt="Aram Group Logo"
                    width={250}
                    height={180}
                    className="shadow-lg"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Golden Aram Building Contracting</h2>
                <p className="text-gray-700 mb-6">
                  Building Contracting – Expertly managing construction, renovation, and maintenance projects with a focus on quality, efficiency, and long-term value to ensure complete client satisfaction.
                </p>
                <p className="text-gray-700">
                  At Golden Aram Building Contracting, we provide expert contracting services focused on project supervision, efficient management, and above all, client satisfaction. We ensure every stage of the project is handled with precision, transparency, and professionalism.
                </p>
              </div>
            </div>
          </div>

          {/* Aram Golden Line Agricultural Services */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96">
                <Image
                  src="/images/services-img6.jpg"
                  alt="Aram Golden Line Agricultural Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/assets/logo/Ararm Golden Line Agricutural.png"
                    alt="Aram Group Logo"
                    width={250}
                    height={180}
                    className="shadow-lg"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aram Golden Line Agricultural Services</h2>
                <p className="text-gray-700 mb-6">
                  Agricultural Services – Providing reliable support and innovative solutions for farming and agribusiness, focused on productivity, sustainability, and complete client satisfaction.
                </p>
                <p className="text-gray-700">
                  Our agricultural services division is dedicated to enhancing outdoor environments through sustainable landscaping, expert plant care, and creative floral solutions. We deliver tailored green space solutions for both commercial and residential projects with a focus on aesthetics, function, and long-term care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Explore Our Services
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Learn more about our comprehensive range of services and how we can help with your next project.
          </p>
          <Link
            href="/business"
            className="inline-block bg-white text-green-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            View Our Business & Expertise
          </Link>
        </div>
      </section>
    </div>
  );
} 