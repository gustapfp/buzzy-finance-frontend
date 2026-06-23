const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.SERVICE_URL}/api/:path*`,
      },
    ];
  },
};
export default nextConfig;
