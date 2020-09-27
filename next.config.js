const withPlugins = require('next-compose-plugins')

const withImages = require('next-images')({
  esModule: true
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withPlugins([
  [
    withBundleAnalyzer({}),
    withImages
  ]
])
