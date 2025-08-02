// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint'],
	devtools: { enabled: true },
	compatibilityDate: '2025-07-15',
	nitro: {
		experimental: {
			database: true,
		},
		database: {
			myDB: {
				connector: 'sqlite',
				options: { name: 'db' },
			},
		},
	},
	eslint: {
		config: {
			stylistic: {
				quotes: 'single',
				semi: false,
				indent: 'tab',
			},
		},
	},
})
