import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              Aram Group
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-900">
                Home
              </Link>
              <Link href="/summary" className="text-gray-600 hover:text-blue-900">
                Summary Information
              </Link>
              <Link href="/about" className="text-blue-900 font-semibold">
                About Us
              </Link>
              <Link href="/business" className="text-gray-600 hover:text-blue-900">
                Business & Expertise
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-blue-900">
                Projects
              </Link>
              <Link href="/vision" className="text-gray-600 hover:text-blue-900">
                Vision & Mission
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our journey, values, and commitment to excellence
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Since 2006, Aram Construction L.L.C has carried out numerous contracting projects across various fields, especially in construction infrastructure works, which have fostered strong relationships with clients through trust, satisfaction, and consistent quality.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, Aram Construction has become a trusted name in contracting, guided by its Founder & Owner, Engr. Mohamad Alhalouch, who brings long-term experience earned through dedication and hard work throughout the United Arab Emirates.
              </p>
              <p className="text-gray-700">
                With a solid foundation of success, Engr. Mohamad Alhalouch expanded his vision beyond construction, growing the company's reach into contracting, agricultural services, and general trading. This diversification reflects our commitment to delivering excellence, innovation, and value across all sectors we serve.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-aram.jpg"
                alt="Aram Group Office"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Integrity</h3>
                <p className="text-gray-700">
                  We conduct our business with honesty, transparency, and ethical practices, building trust with our clients and partners.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We strive for the highest standards in everything we do, from project execution to customer service.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We embrace new technologies and methods to deliver better solutions and stay ahead of industry trends.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mr-6 flex-shrink-0">
                  <Image
                    src="/images/services-img1.png"
                    alt="Engr. Mohamad Alhalouch"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Engr. Mohamad Alhalouch</h3>
                  <p className="text-blue-900 font-semibold mb-2">Founder & Owner</p>
                  <p className="text-gray-700">
                    With extensive experience in the construction industry, Engr. Mohamad Alhalouch leads Aram Group with vision and expertise, guiding the company's growth and success.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mr-6 flex-shrink-0">
                  <Image
                    src="/images/services-img5.jpg"
                    alt="Management Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Management Team</h3>
                  <p className="text-blue-900 font-semibold mb-2">Leadership</p>
                  <p className="text-gray-700">
                    Our diverse team of professionals brings together expertise from various fields, ensuring comprehensive solutions for our clients' needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore our business expertise, projects, and vision to get a complete picture of what we offer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/business"
              className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Business & Expertise
            </Link>
            <Link
              href="/projects"
              className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Projects
            </Link>
            <Link
              href="/vision"
              className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Vision & Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 