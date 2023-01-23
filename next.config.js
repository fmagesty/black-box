/** @type {import('next').NextConfig} */
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

      // Double check which of these 3 are needed and if its just images:
      {
        protocol: "https",
        hostname: "conteudo.imguol.com.br",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "noticias.uol.com.br",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "api.uol.com.br",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
