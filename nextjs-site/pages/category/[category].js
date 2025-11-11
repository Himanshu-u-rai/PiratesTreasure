import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sitesData from "@/data/sites.json";

export default function Category({ category, categoryId }) {
  return (
    <>
      <Head>
        <title>{category.name} - Pirates Treasure</title>
        <meta
          name="description"
          content={`Browse ${
            category.sites.length
          } curated ${category.name.toLowerCase()} sites. ${
            category.description
          }`}
        />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="glass-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{category.icon}</span>
            <div>
              <h1 className="text-4xl font-bold">{category.name}</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
            </div>
          </div>
          <span className="category-badge">{category.sites.length} Sites</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.sites.map((site, idx) => (
            <a
              key={idx}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card group"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-lg group-hover:text-primary-500 transition-colors flex-1">
                  {site.name}
                </h4>
                <span className="text-2xl ml-2">🔗</span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {site.description}
              </p>

              <div className="flex items-center justify-between text-xs">
                <div className="flex gap-2 flex-wrap">
                  {site.badges?.map((badge, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded-full ${
                        badge === "popular"
                          ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                          : badge === "trusted"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}
                    >
                      {badge === "popular" && "🔥"} {badge === "trusted" && "✓"}{" "}
                      {badge === "new" && "⚡"}
                      {badge.toUpperCase()}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {site.requiresLogin && (
                    <span className="text-gray-500" title="Login Required">
                      🔐
                    </span>
                  )}
                  <span
                    className={`px-2 py-1 rounded ${
                      site.adsLevel === "none"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30"
                        : site.adsLevel === "low"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30"
                        : site.adsLevel === "medium"
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30"
                    }`}
                    title="Ad Level"
                  >
                    {site.adsLevel === "none"
                      ? "✓ No Ads"
                      : site.adsLevel === "low"
                      ? "🟡 Low"
                      : site.adsLevel === "medium"
                      ? "🟠 Med"
                      : "🔴 High"}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
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
      `,
        }}
      />
    </>
  );
}

export async function getStaticPaths() {
  const categories = Object.keys(sitesData);

  return {
    paths: categories.map((categoryId) => ({
      params: { category: categoryId },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryId = params.category;
  const category = sitesData[categoryId];

  return {
    props: {
      category,
      categoryId,
    },
  };
}
