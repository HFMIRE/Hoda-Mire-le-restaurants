/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URL:
      "mongodb+srv://hfmire:lFDRjpgtQqCdpNJ4@cluster0.nzr3ffh.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
