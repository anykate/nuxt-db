// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	// Your custom configs here
	{
		ignores: [
			'**/node_modules',
			'**/public',
			'**/vendor',
			'**/dist',
			'**/.nuxt',
			'**/.data',
		],
	},
	{
		rules: {
			'vue/multi-word-component-names': 'off',
			'vue/html-self-closing': 'off',
		},
	},
)
