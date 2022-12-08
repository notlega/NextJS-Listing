import Link from 'next/link';
import Image from 'next/image';
import SampleImage from '../public/dp_image183-1160.jpg';

const Navbar = () => (
  <nav className="navbar bg-base-100 sticky top-0 z-50 p-0">
    <div className="flex-1">
      <Link href="/" className="btn btn-ghost p-0 normal-case text-xl">
        Hologomi
      </Link>
    </div>
    <div className="flex-none gap-2">
      <button className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 h-10 rounded-full">
            <Image src={SampleImage} width={40} height={40} alt={SampleImage} />
          </div>
        </label>
        <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
          <li>
            <Link href="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
