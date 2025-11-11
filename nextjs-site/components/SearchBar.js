"use client";
import { useState, useEffect } from "react";

export default function SearchBar({ sites }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchLower = query.toLowerCase();
    const filtered = [];

    Object.entries(sites).forEach(([categoryName, category]) => {
      category.sites.forEach((site) => {
        const haystack = `${site.name} ${
          site.description || ""
        } ${categoryName}`.toLowerCase();
        if (haystack.includes(searchLower)) {
          filtered.push({ ...site, category: categoryName });
        }
      });
    });

    setResults(filtered.slice(0, 10));
    setIsOpen(filtered.length > 0);
  }, [query, sites]);

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          placeholder="Search 1000+ sites... (Press / to focus)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className="w-full px-6 py-4 pr-12 glass-card rounded-2xl text-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">
          🔍
        </span>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full glass-card rounded-xl shadow-2xl max-h-96 overflow-y-auto z-50">
          {results.map((site, idx) => (
            <a
              key={idx}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block p-4 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {site.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                    {site.description}
                  </p>
                  <span className="text-xs text-primary-500 mt-1 inline-block">
                    {site.category}
                  </span>
                </div>
                <span className="text-2xl ml-3">🔗</span>
              </div>
            </a>
          ))}
        </div>
      )}

      {isOpen && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full glass-card rounded-xl shadow-2xl p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            No results found for "{query}"
          </p>
        </div>
      )}
    </div>
  );
}
