/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'http://cdn.dota2.com/apps/dota2/images',
    domains: ['cdn.dota2.com']
  }
}
