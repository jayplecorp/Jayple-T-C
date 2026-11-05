/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://corporate.jayple.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Legal pages live (canonically) on jayple.in, which lists them in its own sitemap.
  exclude: ['/c/*', '/privacy', '/terms', '/privacy-policy', '/refund-policy', '/cookie-policy',
    '/payment-policy', '/vendor-policy', '/vendor-privacy', '/vendor-terms'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: ['https://corporate.jayple.in/sitemap.xml'],
  },
}
