require('dotenv').config()
require('dotenv').config({ path: './.env.build' })
const fs = require('fs')

module.exports = {
  target: 'serverless',
  env: {
    BUILD_VERSION: process.env.BUILD_VERSION
  },
  experimental: {
    redirects,
    rewrites,
    catchAllRouting: false
  }
}

async function redirects() {
  // const getFolderIndexRedirect = (folder) => {
  //   return fs.existsSync(`./src/pages/${folder}/index.js`)
  //     ? [
  //        { source: `/${folder}`, permanent: true, destination: `/en/${folder}` },
  //       ]
  //     : []
  // }

  // const getFolderChildrenRedirect = (folder) => {
  //   return fs.readdirSync(`./src/pages/${folder}`).filter(fileName => fileName !== 'index.js').length > 0
  //     ? [
  //         { source: `/${folder}/:rest+`, permanent: true, destination: `/en/${folder}/:rest+` }
  //       ]
  //     : []
  // }

  const pageRedirects = fs.readdirSync('./src/pages', { withFileTypes: true })
    .filter(entry => !entry.name.match(/(api|_app\.(js|jsx|ts)|index\.(js|jsx|ts))/))
    .flatMap(entry => {
      if (entry.isFile && entry.name.endsWith('.js')) {
        const fileRoute = entry.name.replace(/\.(js|jsx|ts)$/, '')
        return [
          { source: `/${fileRoute}`, permanent: true, destination: `/en/${fileRoute}` }
        ]
      }

      if (entry.isDirectory) {
        return [
          { source: `/${entry.name}`, permanent: true, destination: `/en/${entry.name}` },
          { source: `/${entry.name}/:rest+`, permanent: true, destination: `/en/${entry.name}/:rest+` },
          // ...getFolderIndexRedirect(fileName),
          // ...getFolderChildrenRedirect(fileName)
        ]
      }

      return []
    })

  console.log(111, pageRedirects)
  return [
    { source: '/', permanent: true, destination: '/en' },
    { source: '/index', permanent: true, destination: '/en' },
    { source: '/:path+/', permanent: true, destination: '/:path+' },
    { source: '/:path+/index', permanent: true, destination: '/:path+' },
    // /_next/static/QRDo8IPpxh7pAV4U-tUxa/pages/fr/posts/%5Bid%5D.js
    // {
    //   source: '/_next/static/:something/pages/:lang(en|fr)/:path+',
    //   permanent: true,
    //   destination: '/_next/static/:something/pages/:path+',
    // },
    ...pageRedirects
  ]
}

async function rewrites() {
  return [
    // { source: '/:lang(en|fr)', destination: '/' },
    // { source: '/:lang(en|fr)/:path+', destination: '/:path+' },
    // /_next/static/Lfpoo2UKBJwKVeOJx26Ge/pages/fr/posts/%5Bid%5D.js
    // {
    //   source: '/_next/static/:something/pages/:lang(en|fr)/:path+',
    //   destination: '/_next/static/:something/pages/:path+',
    // },
  ]
}

/*
NOW ROUTES

"routes": [
  {
    "src": "^/?$",
    "status": 308,
    "headers": { "Location": "/en" }
  },
  {
    "src": "^/(?!en(/|$)|fr(/|$))(?<path>.+)",
    "status": 308,
    "headers": { "Location": "/en/$path" }
  }
]
 */