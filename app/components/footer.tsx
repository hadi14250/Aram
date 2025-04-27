import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Aram Group</h3>
            <p className="text-gray-400">
              Building excellence across sectors since 2006
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/summary" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Summary Information
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Business & Expertise
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Contact</h3>
            <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
            <Link href="/contacts" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                        href="mailto:info@aramgroup.com"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        info@aramgroup.com
                    </a>
                    </li>

                    <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a
                        href="tel:+1234567890"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        +1234567890
                    </a>
                    </li>

              <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <a
                    href="https://maps.app.goo.gl/8NXtHdhZXJFPeAqn8?g_st=com.google.maps.preview.copy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                    Location
                </a>
                </li>

            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Working Hours</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-400 mb-2">Monday - Friday</p>
              <p className="text-gray-400">9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aram Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
