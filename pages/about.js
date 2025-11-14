import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Pirates Treasure</title>
        <meta
          name="description"
          content="Learn more about Pirates Treasure, your ultimate directory for free content sites and resources."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://piratestreasure.dev/about/" />
      </Head>

      <button
        className="theme-toggle"
        id="themeToggle"
        aria-label="Toggle theme"
      >
        <span className="sun-icon">☀️</span>
        <span className="moon-icon">🌙</span>
      </button>

      <div className="container">
        <header>
          <div className="logo">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Pirates Treasure Logo"
                className="logo-image"
              />
            </Link>
          </div>
        </header>

        <div className="links-container">
          <div className="links-header">
            <h2>About Pirates Treasure</h2>
          </div>

          <div
            style={{
              padding: "40px 20px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                padding: "30px",
                borderRadius: "16px",
                lineHeight: "1.8",
                fontSize: "1.1rem",
              }}
            >
              <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
                Welcome to Pirates Treasure
              </h3>

              <p style={{ marginBottom: "20px" }}>
                Pirates Treasure is a comprehensive directory featuring over
                1000+ curated resources for entertainment, software, games,
                books, music, and more. We aggregate and organize links to help
                you discover the best content sites across the internet.
              </p>

              <h4
                style={{
                  marginTop: "30px",
                  marginBottom: "15px",
                  fontSize: "1.3rem",
                }}
              >
                What We Offer
              </h4>
              <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                <li>🎮 Game downloads, repacks, and ROMs</li>
                <li>🎬 Movie and TV show streaming sites</li>
                <li>⚔️ Anime and manga platforms</li>
                <li>📚 eBook libraries and novel reading sites</li>
                <li>🎵 Music streaming and download services</li>
                <li>💻 Software repositories and tools</li>
                <li>📱 Mobile apps for entertainment</li>
                <li>🔧 Utilities and productivity tools</li>
              </ul>

              <h4
                style={{
                  marginTop: "30px",
                  marginBottom: "15px",
                  fontSize: "1.3rem",
                }}
              >
                Disclaimer
              </h4>
              <p style={{ marginBottom: "20px" }}>
                Pirates Treasure is a directory and search service only. We do
                not host, store, or distribute any content ourselves. All links
                lead to external third-party websites. We are not responsible
                for the content hosted on these external sites.
              </p>

              <p style={{ marginBottom: "20px" }}>
                Users should ensure they comply with their local laws and
                regulations when accessing any content. We encourage supporting
                content creators through official channels whenever possible.
              </p>

              <h4
                style={{
                  marginTop: "30px",
                  marginBottom: "15px",
                  fontSize: "1.3rem",
                }}
              >
                Contact
              </h4>
              <p style={{ marginBottom: "20px" }}>
                For inquiries, please see our{" "}
                <Link
                  href="/dmca"
                  style={{ color: "#667eea", fontWeight: "bold" }}
                >
                  DMCA page
                </Link>
                .
              </p>

              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <Link
                  href="/"
                  style={{
                    display: "inline-block",
                    padding: "12px 30px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="seo-footer">
        <div className="footer-keywords">
          <p>
            <strong>Pirates Treasure</strong> - Your ultimate directory for
            movie streaming, game downloads, anime watching, manhwa reading, and
            software downloads. Find the best free adult content, HD movies, PC
            games, mobile apps, ebooks, music streaming, and learning resources.
            Updated daily with 1000+ curated sites including torrent sites,
            streaming platforms, and download portals. Discover top rated adult
            sites, free game sites, movie streaming services, anime platforms,
            manga readers, novel sites, software repositories, and more.
          </p>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 Pirates Treasure. All content is user-submitted. We do
            not host any files. <Link href="/">Home</Link> |{" "}
            <Link href="/about">About</Link> | <Link href="/dmca">DMCA</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
