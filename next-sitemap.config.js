/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jayple.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: ['https://jayple.in/sitemap.xml'],
  },
}
