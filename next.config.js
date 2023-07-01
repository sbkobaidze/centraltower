const prismic = require('@prismicio/client')
const sm = require('./slicemachine.config.json')
/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.repositoryName)
  const repository = await client.getRepository()
  const locales = repository.languages.map((lang) => lang.id.split('-')[0])
  return {
    reactStrictMode: true,
    i18n: {
      locales,
      defaultLocale: locales[1],
      localeDetection: false
    }
  }
}

module.exports = nextConfig
