import React from 'react';
import Link from 'next/link';
import Button from './Button';

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
        <div className="flex md:order-2">
          <div className="relative hidden md:block">
            <button className="absolure inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="material-symbols-outlined text-base-content">search</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
