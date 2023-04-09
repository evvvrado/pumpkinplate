/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	pageExtensions: ["tsx"],

	compress: true,
	compiler: {
		styledComponents: true,
	},

	images: {
		domains: ["media.graphassets.com"],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
	},
};

module.exports = nextConfig;
