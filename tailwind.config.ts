import type { Config } from 'tailwindcss';
import plugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	plugins: [plugin],
	darkMode: 'class',

	theme: {
		extend: {
			zIndex: {
				'100': '100'
			},
			colors: {
				primary: {
					'50': '#f7fee7',
					'100': '#ecfccb',
					'200': '#d9f99d',
					'300': '#bef264',
					'400': '#a3e635',
					'500': '#84cc16',
					'600': '#65a30d',
					'700': '#4d7c0f',
					'800': '#3f6212',
					'900': '#365314'
				}
			}
		}
	}
} satisfies Config;
