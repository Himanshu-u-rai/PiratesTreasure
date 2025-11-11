import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Pirates Treasure</title>
        <meta
          name="description"
          content="Learn about Pirates Treasure, your trusted directory for discovering quality content across the web."
        />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            About Pirates Treasure
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Welcome to Pirates Treasure - your curated gateway to the best
              content across the internet.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p>
              Pirates Treasure was created with a simple goal: to help people
              discover quality content without wasting time searching through
              countless unreliable sources. We carefully curate and categorize
              1000+ websites across games, movies, anime, software, books, and
              more.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
            <ul className="space-y-2">
              <li>
                ✅ <strong>Curated Quality:</strong> Every site is reviewed
                before being added to our directory
              </li>
              <li>
                ✅ <strong>Regular Updates:</strong> We constantly monitor and
                update our listings to remove dead links
              </li>
              <li>
                ✅ <strong>Transparent Info:</strong> See ad levels, login
                requirements, and trust badges at a glance
              </li>
              <li>
                ✅ <strong>User-Friendly:</strong> Clean interface, fast search,
                and organized categories
              </li>
              <li>
                ✅ <strong>No Registration:</strong> Browse and access
                everything without creating an account
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Categories</h2>
            <p>We organize content into major categories including:</p>
            <ul className="grid md:grid-cols-2 gap-2">
              <li>🎮 Games - Downloads, ROMs, and gaming platforms</li>
              <li>🎬 Movies & TV - Streaming and download sites</li>
              <li>🎌 Anime & Manga - Watch and read your favorites</li>
              <li>💻 Software - Applications and utilities</li>
              <li>📚 Books & Novels - eBooks and audiobooks</li>
              <li>🎵 Music - Streaming and downloads</li>
              <li>🎨 Art & Design - Resources and inspiration</li>
              <li>📱 Apps - Mobile applications</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pirates Treasure is a directory service only. We do not host,
              upload, or distribute any content. All links direct to third-party
              websites. We are not responsible for the content on external
              sites. Users are responsible for complying with their local laws
              regarding content access.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
            <p>
              Have a suggestion or found a broken link? We'd love to hear from
              you. Reach out through our social channels or submit feedback via
              the contact form.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
