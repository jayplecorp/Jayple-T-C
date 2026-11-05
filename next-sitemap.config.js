/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://corporate.jayple.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/c/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: ['https://corporate.jayple.in/sitemap.xml'],
  },
}
