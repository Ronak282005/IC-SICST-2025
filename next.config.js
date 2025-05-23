/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/dates",
        destination: "/#important",
        permanent: true,
      },
      {
        source: "/conference_chair",
        destination: "/conference_chair",
        permanent: true,
      },
      {
        source: "/registration",
        destination: "/register",
        permanent: true,
      },
      {
        source: "/callforpapers",
        destination: "/call-for-papers",
        permanent: true,
      },
      {
        source: "/papersubmission",
        destination: "/paper-submission",
        permanent: true,
      },
      {
        source: "/publications",
        destination: "/publications",
        permanent: true,
      },
      {
        source: "/IEEEFORMAT/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/committes",
        destination: "/committe",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
