import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-card shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <span className="text-3xl">☠️</span>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Pirates Treasure
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Your Ultimate Content Directory
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/dmca"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium"
            >
              DMCA
            </Link>
          </nav>

          <button
            id="theme-toggle"
            className="p-2 rounded-lg glass-card hover:shadow-lg transition-all"
            aria-label="Toggle theme"
          >
            <span className="text-2xl">🌙</span>
          </button>
        </div>
      </div>
    </header>
  );
}
