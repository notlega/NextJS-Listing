import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SampleImage from '../public/dp_image183-1160.jpg';

const Navbar = () => {
  const [profilePicture, setProfilePicture] = React.useState(null);

  return (
    <nav className="px-2 sm:px-4 py-2.5 mt-4 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-neutral-content">
            Hologomi
          </span>
        </Link>
        <div className="flex md:order-2 space-x-4">
          <button className="flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-base-content">search</span>
          </button>
          <div className="inline-flex bg-white border rounded-md">
            <a
              href="/"
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
            >
              Option
            </a>

            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                <div className="p-2">
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                  >
                    ReactJS Dropdown 1
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                  >
                    ReactJS Dropdown 2
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                  >
                    ReactJS Dropdown 3
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
