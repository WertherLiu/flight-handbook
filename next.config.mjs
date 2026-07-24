/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/handbook/index.html",
        permanent: false
      }
    ];
  }
};

export default nextConfig;

