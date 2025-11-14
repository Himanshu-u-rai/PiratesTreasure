import Head from "next/head";
import Link from "next/link";

export default function DMCA() {
  return (
    <>
      <Head>
        <title>DMCA - Pirates Treasure</title>
        <meta
          name="description"
          content="DMCA notice and copyright information for Pirates Treasure."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://piratestreasure.dev/dmca/" />
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
            <h2>DMCA Notice</h2>
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
                fontSize: "1.05rem",
              }}
            >
              <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
                Digital Millennium Copyright Act (DMCA)
              </h3>

              <p style={{ marginBottom: "20px" }}>
                Pirates Treasure respects the intellectual property rights of
                others. We are a directory service that provides links to
                third-party websites. We do not host, store, or control any of
                the content found on external sites.
              </p>

              <h4
                style={{
                  marginTop: "30px",
                  marginBottom: "15px",
                  fontSize: "1.3rem",
                }}
              >
                Important Information
              </h4>
              <p style={{ marginBottom: "20px" }}>
                Pirates Treasure is purely a search and directory service. All
                links on this website lead to external third-party sites that
                are not under our control. We do not host any files, videos,
                images, or other copyrighted content on our servers.
              </p>

              <h4
                style={{
                  marginTop: "30px",
                  marginBottom: "15px",
                  fontSize: "1.3rem",
                }}
              >
                DMCA Complaints
              </h4>
              <p style={{ marginBottom: "20px" }}>
                If you believe that your copyrighted work has been linked to on
                this site in a way that constitutes copyright infringement,
                please note that:
              </p>

              <ol style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                <li style={{ marginBottom: "10px" }}>
                  We do not host any content - all links lead to external
                  websites
                </li>
                <li style={{ marginBottom: "10px" }}>
                  You should contact the website hosting the infringing content
                  directly
                </li>
                <li style={{ marginBottom: "10px" }}>
                  We will remove links to sites upon receiving valid DMCA
                  takedown notices
                </li>
              </ol>

              <h4
                style={{
                  marginTop: "30px",
                  marginBottom: "15px",
                  fontSize: "1.3rem",
                }}
              >
                Submit a DMCA Notice
              </h4>
              <p style={{ marginBottom: "20px" }}>
                To submit a DMCA takedown notice for a link on our directory,
                your notice must include:
              </p>

              <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                <li>
                  A physical or electronic signature of the copyright owner
                </li>
                <li>
                  Identification of the copyrighted work claimed to have been
                  infringed
                </li>
                <li>
                  The specific URL(s) on our site containing the link in
                  question
                </li>
                <li>Your contact information (address, phone number, email)</li>
                <li>
                  A statement of good faith belief that the use is not
                  authorized
                </li>
                <li>
                  A statement that the information in the notice is accurate
                </li>
              </ul>

              <p style={{ marginBottom: "20px", fontWeight: "bold" }}>
                Please send DMCA notices to the contact information listed in
                the domain WHOIS records.
              </p>

              <h4
                style={{
                  marginTop: "30px",
                  marginBottom: "15px",
                  fontSize: "1.3rem",
                }}
              >
                Response Time
              </h4>
              <p style={{ marginBottom: "20px" }}>
                We will review and respond to properly formatted DMCA notices
                within 48-72 hours. Invalid or incomplete notices may not be
                processed.
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
