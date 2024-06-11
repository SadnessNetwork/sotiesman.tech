import bundleAnalyzer from '@next/bundle-analyzer'
import createJiti from 'jiti'
import { fileURLToPath } from 'node:url'

const jiti = createJiti(fileURLToPath(import.meta.url))

jiti('@sdns/env')

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: ['shiki']
	},

	transpilePackages: [
		'@sdns/db',
		'@sdns/emails',
		'@sdns/env',
		'@sdns/mdx',
		'@sdns/ui',
		'@sdns/utils'
	],

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com'
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com'
			},
			{
				protocol: 'https',
				hostname: '**.googleusercontent.com'
			}
		]
	},

	async redirects() {
		return [
			{
				source: '/pc-specs',
				destination: '/uses',
				permanent: true
			},
			{
				source: '/atom',
				destination: '/rss.xml',
				permanent: true
			},
			{
				source: '/feed',
				destination: '/rss.xml',
				permanent: true
			},
			{
				source: '/rss',
				destination: '/rss.xml',
				permanent: true
			}
		]
	},

	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin'
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()'
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload'
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN'
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on'
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block'
					}
				]
			}
		]
	}
}

export default withBundleAnalyzer(nextConfig)
