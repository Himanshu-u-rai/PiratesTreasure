export default function Footer() {
  return (
    <footer className="mt-20 glass-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">☠️</span>
              Pirates Treasure
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your ultimate directory for movie streaming, game downloads, anime
              watching, and more. Discover 1000+ curated sites updated daily.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/dmca"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500"
                >
                  DMCA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600 dark:text-gray-400">Games</li>
              <li className="text-gray-600 dark:text-gray-400">Movies & TV</li>
              <li className="text-gray-600 dark:text-gray-400">
                Anime & Manga
              </li>
              <li className="text-gray-600 dark:text-gray-400">Software</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Pirates Treasure. All content is
            user-submitted. We do not host any files.
          </p>
        </div>
      </div>
    </footer>
  );
}
