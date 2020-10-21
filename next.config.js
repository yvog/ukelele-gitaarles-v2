const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  basePath: './ukelele-gitaarles-v2',
  distDir: 'build'
}