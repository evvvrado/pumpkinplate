/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,

	pageExtensions: ["tsx"],


	eslint: {
		ignoreDuringBuilds: true,
	},

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

	async headers() {
		// Security Headers based on: https://nextjs.org/docs/advanced-features/security-headers
		// TODO: implement "Content-Security-Policy" section
		const securityHeaders = [
			{
				key: 'X-DNS-Prefetch-Control',
				value: 'on',
			},
			{
				key: 'Strict-Transport-Security',
				value: 'max-age=63072000; includeSubDomains; preload',
			},
			{
				key: 'X-XSS-Protection',
				value: '1; mode=block',
			},
			{
				key: 'X-Frame-Options',
				value: 'SAMEORIGIN',
			},
			{
				key: 'Permissions-Policy',
				value: 'camera=(), microphone=(), geolocation=()',
			},
			{
				key: 'X-Content-Type-Options',
				value: 'nosniff',
			},
			{
				key: 'Referrer-Policy',
				value: 'origin-when-cross-origin',
			},
		];
		return [
			{
				source: '/:path*',
				headers: securityHeaders,
			},
			// ENABLE CORS
			{
				source: '/api/:path',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
