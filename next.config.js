/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
   i18n,

   reactStrictMode: true,
   // ! swcMinify is for SWC transpiler not Babel. We need babel for the plugins so
   // ! we aren't using SWC.
   // swcMinify: true,
   output: 'standalone',
};

module.exports = nextConfig;
