import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/priyakash-logo.png"
            alt="Priyakash Holidays"
            className="h-10"
          />
          {/* <span className="text-xl font-bold text-gray-800">
            Priyakash Holidays
          </span> */}
        </Link>

        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to="/packages" className="text-gray-600 hover:text-blue-600 font-medium">
            Packages
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}