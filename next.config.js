const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "imgs.xkcd.com",
                // port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: "https",
                hostname: "s2.glbimg.com",
                // port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: "https",
                hostname: "conteudo.imguol.com.br",
                // port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: "https",
                hostname: "images.dog.ceo",
            },
        ],
    },
    exportPathMap: function () {
        return {
            "/": { page: "/" },
            "/NewsScrapper": { page: "/NewsScrapper" },
            "/ComicScrapper": { page: "/ComicScrapper" },
            "/PuppyScrapper": { page: "/PuppyScrapper" },
        }
    },
}

module.exports = nextConfig
