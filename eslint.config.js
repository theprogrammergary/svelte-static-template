import eslint from '@eslint/js'
// import pluginImport from 'eslint-plugin-import'
import markdown from 'eslint-plugin-markdown'
import perfectionist from 'eslint-plugin-perfectionist'
import svelteEslint from 'eslint-plugin-svelte'
import globals from 'globals'
import svelteParser from 'svelte-eslint-parser'
import tsEslint from 'typescript-eslint'

const testingDSL = {
	describe: 'readonly',
	expect: 'readonly',
	it: 'readonly'
}

const ignores = [
	// Sure, let's lint our lint config... :D
	'eslint.config.mjs',
	'.DS_Store',
	'.env',
	'.env.*',
	'.github',

	// Ignore dev code
	'.pnpm-store/**/*',
	'.svelte-kit/**/*',
	'.vscode',
	'.amplify/**/*',
	'node_modules/**/*',
	'build/**/*',
	'package/**/*',

	// Ignore files for PNPM, NPM and YARN
	'pnpm-lock.yaml',
	'package-lock.json',
	'yarn.lock'
]

export default [
	{ ignores },
	eslint.configs.recommended,
	...markdown.configs.recommended,
	...tsEslint.configs.recommended,
	...svelteEslint.configs['flat/prettier'],
	{
		files: ['**/*.svelte'],
		languageOptions: {
			globals: {
				...globals.browser
			},
			parser: svelteParser,
			parserOptions: {
				parser: tsEslint.parser
			}
		}
	},
	{
		files: ['**/*.svelte.test.ts'],
		languageOptions: {
			globals: {
				...globals.browser,
				...testingDSL
			},
			parser: svelteParser,
			parserOptions: {
				parser: tsEslint.parser
			}
		}
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsEslint.parser
		}
	},
	{
		files: ['**/*.test.ts'],
		languageOptions: {
			globals: {
				...testingDSL
			},
			parser: tsEslint.parser
		}
	},
	{
		files: ['**/*server.ts'],
		languageOptions: {
			globals: {
				...globals.node
			},
			parser: tsEslint.parser
		}
	},
	{
		files: ['**/*server.test.ts'],
		languageOptions: {
			globals: {
				...globals.node,
				...testingDSL
			},
			parser: tsEslint.parser
		}
	},
	{
		plugins: {
			'@typescript-eslint': tsEslint.plugin,
			// import: pluginImport,
			perfectionist: perfectionist
		},
		rules: {
			'@typescript-eslint/adjacent-overload-signatures': 'off',
			'@typescript-eslint/member-ordering': 'off',
			// @typescript-eslint
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					varsIgnorePattern: '^\\$\\$'
				}
			],
			// eslint
			'arrow-body-style': ['error', 'always'],
			'block-scoped-var': 'error',
			camelcase: 'error',
			eqeqeq: 'error',
			'max-depth': ['error', 4],
			'max-len': [
				'warn',
				{
					code: 120,
					comments: 120,
					ignoreComments: false,
					ignorePattern: '^\\s*d="', //
					ignoreRegExpLiterals: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreTrailingComments: true,
					ignoreUrls: true,
					tabWidth: 2
				}
			],

			'no-alert': 'error',
			'no-const-assign': 'error',
			'no-lonely-if': 'error',

			'no-loss-of-precision': 'error',
			'no-multiple-empty-lines': [
				'error',
				{
					max: 1,
					maxEOF: 1
				}
			],
			'padding-line-between-statements': [
				'error',

				{ blankLine: 'always', next: 'return', prev: '*' },

				{
					blankLine: 'always',
					next: '*',
					prev: [
						'block',
						'block-like',
						'case',
						'class',
						'directive',
						'empty',
						'export',
						'for',
						'function',
						'multiline-const',
						'multiline-expression',
						'multiline-let',
						'multiline-var',
						'try',
						'throw',
						'iife',
						'while',
						'with'
					]
				},

				{
					blankLine: 'always',
					next: [
						'block',
						'block-like',
						'case',
						'class',
						'directive',
						'empty',
						'export',
						'for',
						'function',
						'multiline-const',
						'multiline-expression',
						'multiline-let',
						'multiline-var',
						'try',
						'throw',
						'iife',
						'while',
						'with'
					],
					prev: '*'
				}
			],

			// perfectionist
			'perfectionist/sort-imports': [
				'error',
				{
					type: 'alphabetical',
					groups: [
						[
							'type',
							'internal-type',
							'parent-type',
							'sibling-type',
							'index-type'
						],
						['builtin', 'external'],
						'internal',
						['parent', 'sibling', 'index'],
						'object',
						'unknown'
					],
					newlinesBetween: 'always',
					order: 'asc'
				}
			],

			'perfectionist/sort-interfaces': [
				'error',
				{
					type: 'alphabetical',
					customGroups: {
						top: ['title', 'id', 'type']
					},
					groupKind: 'required-first',
					groups: ['top', '*'],
					order: 'asc'
				}
			],

			'perfectionist/sort-maps': [
				'error',
				{
					type: 'alphabetical',
					order: 'asc'
				}
			],
			'perfectionist/sort-named-imports': [
				'error',
				{
					type: 'alphabetical',
					groupKind: 'types-first',
					order: 'asc'
				}
			],

			'perfectionist/sort-object-types': [
				'error',
				{
					type: 'alphabetical',
					customGroups: {
						top: ['title', 'id', 'type']
					},
					groupKind: 'required-first',
					groups: ['top', '*'],
					order: 'asc'
				}
			],
			'perfectionist/sort-objects': [
				'error',
				{
					type: 'alphabetical',
					customGroups: {
						top: ['title', 'id', 'type', 'templateId']
					},
					groups: ['top', '*'],
					order: 'asc'
				}
			],
			'perfectionist/sort-svelte-attributes': [
				'error',
				{
					type: 'alphabetical',
					customGroups: {
						this: 'this'
					},
					groups: [
						'this',
						'class',
						'bind-directives',
						'use-directives',
						'style-props',
						'unknown'
					],
					order: 'asc'
				}
			],
			quotes: ['error', 'single'],
			'svelte/no-unused-svelte-ignore': 'warn',
			'vars-on-top': 'error',
			yoda: 'error'
		}
	}
]
