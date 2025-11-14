import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import sitesData from "../../data/sites.json";

export default function CategoryPage({ category, categoryData }) {
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {
    // Theme toggle handler
    const body = document.body;
    const currentTheme = localStorage.getItem("theme") || "light";
    body.classList.add(currentTheme + "-mode");

    const themeToggle = document.getElementById("themeToggle");
    const handleThemeToggle = () => {
      if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
      }
    };

    if (themeToggle) {
      themeToggle.addEventListener("click", handleThemeToggle);
    }

    // Deal bar handlers
    const dealBar = document.getElementById("floatingDealBar");
    const dealMinimize = document.getElementById("dealMinimize");
    const dealClose = document.getElementById("dealClose");

    const dealBarState = localStorage.getItem("dealBarState");
    if (dealBarState === "hidden" && dealBar) {
      dealBar.classList.add("hidden");
    } else if (dealBarState === "minimized" && dealBar) {
      dealBar.classList.add("minimized");
      if (dealMinimize) dealMinimize.innerHTML = "▲";
    }

    const handleMinimize = () => {
      if (dealBar) {
        dealBar.classList.toggle("minimized");
        if (dealBar.classList.contains("minimized")) {
          if (dealMinimize) dealMinimize.innerHTML = "▲";
          localStorage.setItem("dealBarState", "minimized");
        } else {
          if (dealMinimize) dealMinimize.innerHTML = "▼";
          localStorage.setItem("dealBarState", "normal");
        }
      }
    };

    const handleClose = () => {
      if (dealBar) {
        dealBar.classList.add("hidden");
        localStorage.setItem("dealBarState", "hidden");
      }
    };

    if (dealMinimize) dealMinimize.addEventListener("click", handleMinimize);
    if (dealClose) dealClose.addEventListener("click", handleClose);

    return () => {
      if (themeToggle)
        themeToggle.removeEventListener("click", handleThemeToggle);
      if (dealMinimize)
        dealMinimize.removeEventListener("click", handleMinimize);
      if (dealClose) dealClose.removeEventListener("click", handleClose);
    };
  }, []);

  const toggleSection = (sectionIndex) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  const openLinkWithAd = (url, e) => {
    e.preventDefault();
    const adUrl =
      "https://schemecontinuingwinning.com/ng0xuthz?key=be3c8d271e4ef2f83423de963fb113b3";

    // Open the actual website first
    window.open(url, "_blank", "noopener,noreferrer");
    // Then open the ad
    window.open(adUrl, "_blank", "noopener,noreferrer");

    return false;
  };

  const totalSites = categoryData.categories.reduce(
    (sum, cat) => sum + cat.sites.length,
    0
  );

  return (
    <>
      <Head>
        <title>{categoryData.title} - Pirates Treasure</title>
        <meta
          name="description"
          content={`Browse ${totalSites} ${categoryData.title.toLowerCase()} sites and resources`}
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://piratestreasure.dev/category/${category}/`}
        />
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
            <div className="links-icon">{categoryData.icon}</div>
            <h2>{categoryData.title}</h2>
            <span className="site-count-badge">{totalSites} sites</span>
          </div>

          <div className="category-grid">
            {categoryData.categories.map((cat, catIndex) => {
              const isCollapsible = cat.sites.length > 20;
              const isExpanded = expandedSections[catIndex];
              const sitesToShow =
                isCollapsible && !isExpanded
                  ? cat.sites.slice(0, 20)
                  : cat.sites;

              return (
                <div className="category-card" key={catIndex}>
                  <h3>{cat.title}</h3>
                  <p className="category-description">{cat.description}</p>
                  <ol className="sites-list">
                    {sitesToShow.map((site, siteIndex) => (
                      <li
                        className="site-item"
                        key={siteIndex}
                        data-is-new={site.isNew || false}
                        data-is-popular={site.isPopular || false}
                      >
                        <div className="site-item-content">
                          <a
                            href={site.url}
                            onClick={(e) => openLinkWithAd(site.url, e)}
                            className={
                              site.isSponsored ? "sponsored-link" : "site-link"
                            }
                            rel="noopener noreferrer"
                          >
                            {site.name}
                          </a>
                          {site.isNew && (
                            <span className="site-badge new-badge">NEW</span>
                          )}
                          {site.isPopular && (
                            <span className="site-badge popular-badge">
                              POPULAR
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                  {isCollapsible && (
                    <button
                      className={`show-more-btn ${
                        isExpanded ? "expanded" : ""
                      }`}
                      onClick={() => toggleSection(catIndex)}
                    >
                      {isExpanded ? (
                        <span>Show Less</span>
                      ) : (
                        <span>Show More (+{cat.sites.length - 20})</span>
                      )}
                    </button>
                  )}
                </div>
              );
            })}
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

      <div className="floating-deal-bar" id="floatingDealBar">
        <div className="deal-content">
          <span className="deal-icon">💎</span>
          <span className="deal-text">
            Premium HD Access - Exclusive 70% OFF Limited Offer
          </span>
          <a
            href="https://schemecontinuingwinning.com/ng0xuthz?key=be3c8d271e4ef2f83423de963fb113b3"
            target="_blank"
            rel="noopener noreferrer"
            className="deal-button"
          >
            Claim Deal →
          </a>
        </div>
        <button className="deal-minimize" id="dealMinimize" title="Minimize">
          ▼
        </button>
        <button className="deal-close" id="dealClose" title="Close">
          ×
        </button>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(sitesData).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const categoryData = sitesData[slug];

  if (!categoryData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category: slug,
      categoryData,
    },
  };
}
