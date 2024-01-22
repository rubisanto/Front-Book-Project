import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/catalog">
              <a className="text-white">Catalog</a>
            </Link>
            <Link href="/my-books">
              <a className="ml-4 text-white">My Books</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
