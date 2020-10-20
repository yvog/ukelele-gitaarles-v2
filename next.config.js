const path = require('path');
const env = require('./env.json');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    API_BASE_URL: env.API_BASE_URL
  }
}