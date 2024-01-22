import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/catalog" className="text-white m-3">
                Catalog
              </Link>
              <Link href="/my-books" className="text-white m-3">
                My Books
              </Link>
              {/* a aligner tout à droite dans la navbar */}
              <Link href="/logout" className="text-white m-3 ">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
