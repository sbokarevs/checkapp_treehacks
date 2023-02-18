/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

module.exports = withPWA({
    reactStrictMode: false,
    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    },
    images: {
        remotePatterns: [
            {
                hostname: "**",
            },
        ],
    },
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["prisma", "@prisma/client"],
    },
})
