/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    optimizeFonts: false, async rewrites() {
        return [
            {
                source: '/(links|lnk|l)',
                destination: '/',
            },
        ]
    },
}

module.exports = nextConfig
