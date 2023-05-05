/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3t32hsnjxo7q6.cloudfront.net",
      },
    ],
  },
  // url잘못타고왓을 시 이동
  async redirects() {
    return [
      {
        source: "/product",
        destination: "/products",
        permanent: true,
      },
    ];
  },
  // 다른 url 대체
  // async redirects() {},
};

module.exports = nextConfig;
