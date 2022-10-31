/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ! swcMinify is for SWC transpiler not Babel. We need babel for the plugins so
  // ! we aren't using SWC.
  // swcMinify: true,
};

module.exports = nextConfig;
