const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  basePath: '/ukelele-gitaarles-v2',
  distDir: 'build',
  assetPrefix: isProd ? 'https://yvog.github.io/ukelele-gitaarles-v2' : '',
}