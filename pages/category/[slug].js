import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import sitesData from "../../data/sites.json";
import {
  createSafeAdConfig,
  createSafeExternalScript,
  sanitizeUrlParam,
} from "../../utils/security";

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

    // Load bottom banner ad (client-side only) - SECURE VERSION
    const loadBottomBannerAd = () => {
      const container = document.getElementById("bottom-banner-container");
      if (container && !container.hasChildNodes()) {
        const adConfig = createSafeAdConfig({
          key: "0ca7a13d50215d415097e892c383d662",
          format: "iframe",
          height: 90,
          width: 728,
          params: {},
        });

        const adScript = createSafeExternalScript(
          "//schemecontinuingwinning.com/0ca7a13d50215d415097e892c383d662/invoke.js"
        );

        if (adConfig && adScript) {
          container.appendChild(adConfig);
          container.appendChild(adScript);
        }
      }
    };

    // Load mobile banner ad (client-side only) - SECURE VERSION
    const loadMobileBannerAd = () => {
      const container = document.getElementById("mobile-banner-container");
      if (container && !container.hasChildNodes()) {
        const adConfig = createSafeAdConfig({
          key: "8095f0ace85d5ba518b592c20cf56111",
          format: "iframe",
          height: 50,
          width: 320,
          params: {},
        });

        const adScript = createSafeExternalScript(
          "//schemecontinuingwinning.com/8095f0ace85d5ba518b592c20cf56111/invoke.js"
        );

        if (adConfig && adScript) {
          container.appendChild(adConfig);
          container.appendChild(adScript);
        }
      }
    };

    // Load ads after a short delay to ensure DOM is ready
    setTimeout(() => {
      loadBottomBannerAd();
      loadMobileBannerAd();

      // Load native banner ad - SECURE VERSION
      const nativeContainer = document.getElementById(
        "container-8d0b46648249dda84ddc8f0018e507a2"
      );
      if (
        nativeContainer &&
        !document.querySelector(
          'script[src*="8d0b46648249dda84ddc8f0018e507a2"]'
        )
      ) {
        const nativeScript = createSafeExternalScript(
          "//schemecontinuingwinning.com/8d0b46648249dda84ddc8f0018e507a2/invoke.js",
          { async: true }
        );
        if (nativeScript) {
          nativeScript.setAttribute("data-cfasync", "false");
          document.body.appendChild(nativeScript);
        }
      }
    }, 1000);

    // Removed legacy deal bar handlers and external ad behaviors.

    return () => {
      if (themeToggle)
        themeToggle.removeEventListener("click", handleThemeToggle);
      // cleanup for theme toggle only
    };
  }, []);

  const toggleSection = (sectionIndex) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  // Links now open directly in a new tab; ad-opening behavior removed.

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
              <Image
                src="/logo.png"
                alt="Pirates Treasure Logo"
                className="logo-image"
                priority
                width={200}
                height={60}
              />
            </Link>
          </div>
        </header>

        {/* Native Banner Ad */}
        <div className="native-banner-ad">
          <div id="container-8d0b46648249dda84ddc8f0018e507a2"></div>
        </div>

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
                            target="_blank"
                            className="site-link"
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

      {/* Bottom Banner Ad */}
      <div className="bottom-banner-ad">
        <div id="bottom-banner-container"></div>
      </div>

      {/* Mobile Banner Ad */}
      <div className="mobile-banner-ad">
        <div id="mobile-banner-container"></div>
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

  // SECURE: Validate slug parameter to prevent injection attacks
  // Only allow alphanumeric characters and hyphens
  if (!slug || typeof slug !== "string" || !/^[a-zA-Z0-9\-]+$/.test(slug)) {
    return {
      notFound: true,
    };
  }

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
