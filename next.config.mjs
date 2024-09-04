/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname:"images.unsplash.com"}]
    },
    experimental: {
        ser: true,
    }
};
export default nextConfig;
