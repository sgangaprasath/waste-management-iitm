/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allows the image manifest in content/images.ts to point directly at
    // Pixabay CDN URLs instead of files committed under /public.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/lab", destination: "/guidelines/lab-waste", permanent: true },
      { source: "/recycling/:zone", destination: "/recycling", permanent: true },
      { source: "/repurposing/:zone", destination: "/repurposing", permanent: true },
      { source: "/residential", destination: "/guidelines/residential", permanent: true },
    ];
  },
};

module.exports = nextConfig;
