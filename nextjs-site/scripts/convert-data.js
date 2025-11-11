/**
 * Data Conversion Helper
 *
 * Use this to convert your existing linksData object to the new sites.json format.
 *
 * Run: node scripts/convert-data.js
 */

// Paste your existing linksData object here
const linksData = {
  // Example from your current site:
  games: {
    icon: "🎮",
    title: "Games",
    description: "Download free games, ROMs, and more",
    sites: [
      {
        name: "FitGirl Repacks",
        url: "https://fitgirl-repacks.site",
        description: "Compressed game downloads",
      },
      // ... add all your existing sites
    ],
  },
  // ... other categories
};

// Conversion function
function convertToNewFormat(oldData) {
  const newFormat = {};

  Object.entries(oldData).forEach(([categoryId, category]) => {
    newFormat[categoryId] = {
      name: category.title,
      icon: category.icon,
      description: category.description,
      sites: category.sites.map((site) => ({
        name: site.name,
        url: site.url,
        description: site.description || "",
        adsLevel: site.adsLevel || "medium", // Default to medium
        requiresLogin: site.requiresLogin || false,
        badges: site.isNew ? ["new"] : site.isPopular ? ["popular"] : [],
      })),
    };
  });

  return newFormat;
}

// Convert and output
const converted = convertToNewFormat(linksData);
console.log(JSON.stringify(converted, null, 2));

// To save to file:
// const fs = require('fs');
// fs.writeFileSync('../data/sites.json', JSON.stringify(converted, null, 2));
