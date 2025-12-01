import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          type="text/javascript"
          src="//schemecontinuingwinning.com/a1/32/f1/a132f1c37fcdb5fbd32943a70cb55db9.js"
        ></script>
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
      </Head>
      <body>
        {/* Popup/Social Bar Ad Script */}
        <script
          type="text/javascript"
          src="//schemecontinuingwinning.com/6a/52/1b/6a521b2b90c54bd294e1c243e44c5d67.js"
        ></script>
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
                function loadAd(containerId) {
                  var adConfig = document.createElement('script');
                  adConfig.type = 'text/javascript';
                  adConfig.innerHTML = 'atOptions = {"key":"df7796c8fe7377e7a1d0dc2eab460c7a","format":"iframe","height":600,"width":160,"params":{}};';
                  
                  var adScript = document.createElement('script');
                  adScript.type = 'text/javascript';
                  adScript.src = '//schemecontinuingwinning.com/df7796c8fe7377e7a1d0dc2eab460c7a/invoke.js';
                  
                  var container = document.getElementById(containerId);
                  if (container) {
                    container.appendChild(adConfig);
                    container.appendChild(adScript);
                  }
                }
                
                // Load both ads with delay between them
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', function() {
                    loadAd('left-ad-container');
                    setTimeout(function() { loadAd('right-ad-container'); }, 500);
                  });
                } else {
                  loadAd('left-ad-container');
                  setTimeout(function() { loadAd('right-ad-container'); }, 500);
                }
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}
