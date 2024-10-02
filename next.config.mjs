/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Aceptar imagenes de distintos dominios
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com'
            }
        ]
    }
};

export default nextConfig;
