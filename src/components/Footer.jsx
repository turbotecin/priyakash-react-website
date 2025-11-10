export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Priyakash Holidays. All rights reserved.
      </p>
      <p className="text-gray-400 text-xs mt-1">
        Designed & Developed by Priyakash Holidays Team
      </p>
    </footer>
  );
}