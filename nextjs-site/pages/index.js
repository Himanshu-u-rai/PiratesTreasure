import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import sitesData from "@/data/sites.json";

export default function Home({ sites }) {
  return (
    <>
      <Head>
        <title>
          Pirates Treasure - Best Free Games, Movies & Streaming Directory 2025
        </title>
        <meta
          name="description"
          content="Discover 1000+ curated resources: Top sites, free games, movie streaming, software, books & music. Updated daily with the best free and premium content sites."
        />
        <meta
          name="keywords"
          content="best sites 2025, top adult sites, free games download, movie streaming sites, free software, pirate sites directory"
        />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-pink-500 bg-clip-text text-transparent">
              Discover 1000+ Curated Sites
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your ultimate directory for games, movies, anime, software, and
            more. All in one place.
          </p>
        </section>

        <SearchBar sites={sites} />

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(sites).map(([categoryId, category]) => (
            <Link
              key={categoryId}
              href={`/category/${categoryId}`}
              className="glass-card rounded-2xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <span className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {category.description}
                </p>
                <span className="category-badge">
                  {category.sites.length} Sites
                </span>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-primary-500 font-semibold group-hover:gap-4 transition-all">
                View Sites
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-20 glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Premium Tools & Extra Resources
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="glass-card rounded-xl p-6 border-2 border-primary-500/30">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">💎</span>
                    <h4 className="text-xl font-bold">Premium HD Access</h4>
                    <span className="category-badge">70% OFF</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Unlock exclusive premium content with ad-free streaming,
                    faster downloads, and priority access.
                  </p>
                </div>
                <a
                  href="https://discontentcocoamatters.com/ng0xuthz?key=be3c8d271e4ef2f83423de963fb113b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105"
                >
                  Claim Deal →
                </a>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>✨ Limited time offer - Trusted by 10,000+ users worldwide</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        dangerouslySetInnerHTML={{
          __html: `
        document.getElementById('theme-toggle')?.addEventListener('click', () => {
          document.body.classList.toggle('dark');
          localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });
        
        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.body.classList.add('dark');
        }

        document.addEventListener('keydown', (e) => {
          if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
            e.preventDefault();
            document.querySelector('input[type="text"]')?.focus();
          }
        });
      `,
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      sites: sitesData,
    },
  };
}
