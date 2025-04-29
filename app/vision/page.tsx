'use client';

import Link from 'next/link';

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Link href="/" className="text-2xl font-bold text-green-900">
            Vision
          </Link>
        </div>

        <div className="mt-8 space-y-4">
          <Link href="/" className="block text-gray-600 hover:text-green-900">
            Home
          </Link>
          <Link href="/summary" className="block text-gray-600 hover:text-green-900">
            Summary Information
          </Link>
          <Link href="/about" className="block text-gray-600 hover:text-green-900">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
} 