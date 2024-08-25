const config = {
	arrowParens: 'avoid',
	overrides: [
		{
			files: '*.svelte',
			options: { parser: 'svelte' }
		}
	],
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	pluginSearchDirs: ['.'],
	printWidth: 80,
	semi: false,
	singleQuote: true,
	svelteAllowShorthand: false,
	svelteIndentScriptAndStyle: true,
	svelteSortOrder: 'options-styles-scripts-markup',
	svelteStrictMode: false,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true
}

export default config
