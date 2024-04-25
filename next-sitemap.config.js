module.exports = {
  siteUrl: "https://mirkaraoke.com",
  generateRobotsTxt: true, // robots.txt 파일도 생성
  sitemapSize: 7000,
  outDir: "./public",
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", disallow: ["/admin"] },
    ],
  },
  transform: async (config, path) => ({
    loc: path, // URL
    changefreq: "daily",
    priority: 0.7,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  }),
};
