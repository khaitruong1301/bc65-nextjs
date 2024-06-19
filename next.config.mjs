/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix: 'https://cdn.jsdelivr.net',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
