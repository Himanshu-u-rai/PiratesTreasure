/**
 * Security utilities for React2Shell vulnerability protection
 */

/**
 * Safely creates ad configuration script element with textContent instead of innerHTML
 * @param {Object} config - Ad configuration object
 * @returns {HTMLScriptElement}
 */
export function createSafeAdConfig(config) {
  const adConfig = document.createElement('script');
  adConfig.type = 'text/javascript';
  // Use textContent instead of innerHTML to prevent XSS
  adConfig.textContent = `atOptions = ${JSON.stringify(config)};`;
  return adConfig;
}

/**
 * Safely creates external script element with validation
 * @param {string} src - Script source URL
 * @param {Object} options - Additional script options
 * @returns {HTMLScriptElement|null}
 */
export function createSafeExternalScript(src, options = {}) {
  // Validate URL is from trusted domain
  if (!isAllowedScriptSource(src)) {
    console.error('[Security] Blocked untrusted script source:', src);
    return null;
  }

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  
  // Apply additional security attributes
  if (options.async !== false) script.async = true;
  if (options.defer) script.defer = true;
  if (options.crossOrigin) script.crossOrigin = options.crossOrigin;
  
  return script;
}

/**
 * Validates if script source is from allowed domains
 * @param {string} src - Script source URL
 * @returns {boolean}
 */
function isAllowedScriptSource(src) {
  const allowedDomains = [
    'schemecontinuingwinning.com'
  ];
  
  try {
    const url = new URL(src, window.location.origin);
    return allowedDomains.some(domain => url.hostname.endsWith(domain));
  } catch (e) {
    return false;
  }
}

/**
 * Sanitizes user input to prevent XSS
 * @param {string} input - User input string
 * @returns {string}
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  // Remove potentially dangerous characters
  return input
    .replace(/[<>'"]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
}

/**
 * Validates and sanitizes URL parameters
 * @param {string} param - URL parameter value
 * @returns {string|null}
 */
export function sanitizeUrlParam(param) {
  if (!param || typeof param !== 'string') return null;
  
  // Remove any script tags, event handlers, or dangerous patterns
  const cleaned = param
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
  
  // Validate it's alphanumeric with allowed characters
  if (!/^[a-zA-Z0-9\-_\s]+$/.test(cleaned)) {
    console.warn('[Security] Invalid URL parameter detected:', param);
    return null;
  }
  
  return cleaned;
}

/**
 * Safely loads ad scripts with container validation
 * @param {string} containerId - DOM container ID
 * @param {Function} adLoader - Function to load ad
 */
export function safeAdLoader(containerId, adLoader) {
  const container = document.getElementById(containerId);
  
  // Validate container exists and is in DOM
  if (!container || !document.body.contains(container)) {
    console.warn('[Security] Invalid ad container:', containerId);
    return;
  }
  
  // Check if already loaded
  if (container.hasChildNodes()) {
    return;
  }
  
  try {
    adLoader(container);
  } catch (error) {
    console.error('[Security] Ad loading error:', error);
  }
}

/**
 * Creates a safe search results renderer
 * @param {Array} results - Search results array
 * @returns {Array} - Array of safe React elements
 */
export function sanitizeSearchResults(results) {
  if (!Array.isArray(results)) return [];
  
  return results.map(result => ({
    ...result,
    title: sanitizeInput(result.title || ''),
    description: sanitizeInput(result.description || ''),
    url: sanitizeInput(result.url || ''),
    category: sanitizeInput(result.category || '')
  }));
}
