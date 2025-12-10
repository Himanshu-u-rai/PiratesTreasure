import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☠️</text></svg>"
        />
        <link
          rel="apple-touch-icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☠️</text></svg>"
        />
        <link
          rel="preconnect"
          href="https://schemecontinuingwinning.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://schemecontinuingwinning.com" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8585479231001828"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        {/* Left Ad Banner */}
        <div className="side-ad left-ad">
          <div id="left-ad-container"></div>
        </div>
        <Main />
        {/* Right Ad Banner */}
        <div className="side-ad right-ad">
          <div id="right-ad-container"></div>
        </div>
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Load ad scripts after page is interactive
                function loadAdScript(src, callback) {
                  var script = document.createElement('script');
                  script.type = 'text/javascript';
                  script.src = src;
                  script.async = true;
                  if (callback) script.onload = callback;
                  document.body.appendChild(script);
                }
                
                function loadPopupAd() {
                  loadAdScript('//schemecontinuingwinning.com/a1/32/f1/a132f1c37fcdb5fbd32943a70cb55db9.js');
                }
                
                function loadSocialBarAd() {
                  loadAdScript('//schemecontinuingwinning.com/6a/52/1b/6a521b2b90c54bd294e1c243e44c5d67.js');
                }
                
                function loadAd(containerId) {
                  var adConfig = document.createElement('script');
                  adConfig.type = 'text/javascript';
                  // SECURE: Use textContent instead of innerHTML to prevent XSS
                  adConfig.textContent = 'atOptions = {"key":"df7796c8fe7377e7a1d0dc2eab460c7a","format":"iframe","height":600,"width":160,"params":{}};';
                  
                  var adScript = document.createElement('script');
                  adScript.type = 'text/javascript';
                  adScript.src = '//schemecontinuingwinning.com/df7796c8fe7377e7a1d0dc2eab460c7a/invoke.js';
                  adScript.async = true;
                  
                  var container = document.getElementById(containerId);
                  if (container) {
                    container.appendChild(adConfig);
                    container.appendChild(adScript);
                  }
                }
                
                // Use requestIdleCallback to load ads when browser is idle
                function loadAllAds() {
                  if ('requestIdleCallback' in window) {
                    requestIdleCallback(function() {
                      loadPopupAd();
                      loadSocialBarAd();
                      loadAd('left-ad-container');
                      setTimeout(function() { loadAd('right-ad-container'); }, 500);
                    }, { timeout: 2000 });
                  } else {
                    // Fallback for browsers without requestIdleCallback
                    setTimeout(function() {
                      loadPopupAd();
                      loadSocialBarAd();
                      loadAd('left-ad-container');
                      setTimeout(function() { loadAd('right-ad-container'); }, 500);
                    }, 1000);
                  }
                }
                
                // Wait for page to be fully loaded
                if (document.readyState === 'complete') {
                  loadAllAds();
                } else {
                  window.addEventListener('load', loadAllAds);
                }
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}
