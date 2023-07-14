const { resolve } = require('path');

module.exports = {
  reactStrictMode: true,

  pageExtensions: ['tsx', 'ts'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'vinyrifas.com'
      }
    ],
  },
};
