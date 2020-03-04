require('dotenv').config()
require('dotenv').config({ path: './.env.build' })

const nextConfig = {
  target: 'serverless',
  env: {
    //Amplience
    BUILD_VERSION: process.env.BUILD_VERSION
  },
}

module.exports = nextConfig
