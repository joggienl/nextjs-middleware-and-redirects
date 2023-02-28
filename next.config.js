/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['de', 'en', 'nl'],
		defaultLocale: 'en',
	},
	async redirects() {
		return [
			{
				source: '/postings',
				destination: '/post',
				permanent: false,
			},
		]
	},
}

module.exports = nextConfig
