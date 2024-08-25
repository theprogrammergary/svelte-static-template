import tailwindcssAnimate from 'tailwindcss-animate';


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class'],
	plugins: [tailwindcssAnimate],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				card: {
					DEFAULT: 'var(--background-start)',
					foreground: 'var(--foreground)'
				},

				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--foreground)'
				},
				fizo: {
					DEFAULT: 'var(--background-start)',
					foreground: 'var(--foreground)'
				},
				foreground: {
					alt1: 'var(--foreground-alt1)',
					DEFAULT: 'var(--foreground)',
					inverse: 'var(--foreground-inverse)'
				},
				input: 'var(--background-start)',
				muted: {
					DEFAULT: 'var(--accentSubtle-alt3)',
					foreground: 'var(--foreground)'
				},
				popover: {
					DEFAULT: 'var(--background-start)',
					foreground: 'var(--foreground)'
				},
				primary: {
					DEFAULT: 'var(--background-start)',
					foreground: 'var(--foreground)'
				},
				ring: 'var(--accentSubtle-alt2)',
				secondary: {
					DEFAULT: 'var(--accentSubtle-alt2)',
					foreground: 'var(--foreground)'
				},
				test: 'var(--test)',
				warning: {
					DEFAULT: 'var(--warning)',
					foreground: 'var(--foreground)'
				}
			},
			fontFamily: {
				mono: ['Consolas']
			},
			fontSize: {
				base: '0.925rem',
				sm: '0.85rem',
				xs: '.75rem',
				xxs: '.675rem',
				xxxs: '.6rem'
			}
		}
	}
}
