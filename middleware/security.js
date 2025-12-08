/**
 * Security Middleware for Next.js Application
 * Protects against React2Shell and other web vulnerabilities
 */

/**
 * Validate and sanitize request headers
 * @param {Object} req - Request object
 * @returns {boolean} - True if headers are valid
 */
export function validateHeaders(req) {
  const dangerousHeaders = [
    'X-Forwarded-Host',
    'X-Original-URL',
    'X-Rewrite-URL'
  ];
  
  // Check for potentially dangerous headers
  for (const header of dangerousHeaders) {
    if (req.headers[header.toLowerCase()]) {
      console.warn('[Security] Suspicious header detected:', header);
      return false;
    }
  }
  
  return true;
}

/**
 * Rate limiting middleware to prevent abuse
 */
const requestCounts = new Map();

export function rateLimit(req, limit = 100, windowMs = 60000) {
  const ip = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'unknown';
  const now = Date.now();
  
  if (!requestCounts.has(ip)) {
    requestCounts.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  const record = requestCounts.get(ip);
  
  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowMs;
    return true;
  }
  
  if (record.count >= limit) {
    console.warn('[Security] Rate limit exceeded for IP:', ip);
    return false;
  }
  
  record.count++;
  return true;
}

/**
 * Clean up old rate limit records periodically
 */
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of requestCounts.entries()) {
    if (now > record.resetTime) {
      requestCounts.delete(ip);
    }
  }
}, 60000); // Clean up every minute

/**
 * Validate request method is allowed
 * @param {string} method - HTTP method
 * @param {Array} allowedMethods - Allowed methods
 * @returns {boolean}
 */
export function validateMethod(method, allowedMethods = ['GET', 'HEAD']) {
  return allowedMethods.includes(method.toUpperCase());
}

/**
 * Security middleware configuration
 */
export const securityConfig = {
  // Maximum request body size
  maxBodySize: 1024 * 1024, // 1MB
  
  // Allowed origins for CORS
  allowedOrigins: [
    'https://piratestreasure.dev',
    'https://www.piratestreasure.dev'
  ],
  
  // Trusted ad script domains
  trustedAdDomains: [
    'schemecontinuingwinning.com'
  ],
  
  // Rate limiting
  rateLimit: {
    windowMs: 60000, // 1 minute
    max: 100 // requests per window
  }
};

export default {
  validateHeaders,
  rateLimit,
  validateMethod,
  securityConfig
};
