import type { NextConfig } from "next";


// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    // allow external placeholder sources if used
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
    // domains: ['example.com', 'another-domain.com'],
  },
};

export default nextConfig;


