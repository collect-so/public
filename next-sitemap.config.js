/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://collect.so",
  generateRobotsTxt: true, // (optional)
  // ...other options
}
