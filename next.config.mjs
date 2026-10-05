/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/resume.pdf",
        destination: "/Resume.pdf",
      },
      {
        source: "/resume",
        destination: "/Resume.pdf",
      },
      {
        source: "/cv",
        destination: "/Resume.pdf",
      },
    ];
  },
};

export default nextConfig;


