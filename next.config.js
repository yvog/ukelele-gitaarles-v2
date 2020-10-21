const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  basePath: 'https://yvog.github.io/ukelele-gitaarles-v2',
  distDir: 'build'
}