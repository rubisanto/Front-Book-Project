import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white">
              Acceuil
            </Link>
            <Link href="/catalog" className="text-white m-6">
              Catalogue
            </Link>
            <Link href="/my-books" className="text-white m-6">
              My Books
            </Link>
            <Link href="/logout" className="text-white m-6 justify-end">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
