import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SampleImage from '../public/dp_image183-1160.jpg';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [profilePicture, setProfilePicture] = React.useState(null);

  // TODO: remove testing useEffect when done
  React.useEffect(() => {
    console.log(isExpanded);
  }, [isExpanded]);

  return (
    <nav className="px-2 sm:px-4 py-2.5 mt-4 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-neutral-content">
            Hologomi
          </span>
        </Link>
        <div className="flex md:order-2 space-x-4">
          <button className="flex items-center cursor-pointer">
            <span className="material-symbols-outlined text-base-content">search</span>
          </button>
          <button
            className="flex items-center cursor-pointer"
            onClick={() => setIsExpanded((prevValue) => !prevValue)}
          >
            <Image
              src={SampleImage}
              alt={SampleImage}
              width={40}
              height="40"
              className="w-10 h-10 rounded-full"
            />
            {isExpanded && (
              <ul className="absolute mt-2 overflow-y-auto bg-base-content rounded border px-2 py-1">
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <Link href="/logout">Logout</Link>
                </li>
              </ul>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
