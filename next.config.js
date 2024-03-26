const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  inlineImageLimit: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['media.graphassets.com'],
  },
});
