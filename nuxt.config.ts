import { colors } from '@unocss/preset-mini'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
	colorMode: {
		classSuffix: '',
	},
	css: [resolve('./src/assets/css/globals.css')],
	extends: 'oxecore',
	googleFonts: {
		download: true,
		families: {
			Nunito: [600, 700, 800],
		},
	},
	modules: ['@nuxtjs/google-fonts', '@nuxtjs/color-mode'],
	srcDir: 'src',
	unocss: {
		shortcuts: {
			'bg-primary': 'bg-primary-600 dark:bg-primary-400',
			'text-body': 'text-slate-900 dark:text-neutral-100',
			'text-primary': 'text-primary-600 dark:text-primary-400',
			'text-secondary': 'text-slate-600 dark:text-neutral-400',
			'border-default': 'border-slate-200 dark:border-neutral-700',
			'btn-ghost':
				'hover:bg-slate-200/25 !active:bg-slate-200/50 dark:(hover:bg-neutral-700/25 !active:bg-neutral-700/50)',
			'text-link': 'font-bold text-primary',
			'bg-surface': 'bg-white dark:bg-neutral-800',
		},
		theme: {
			colors: {
				neutral: colors!.neutral,
				slate: colors!.slate,
				error: colors!.red,
				success: colors!.green,
				warning: colors!.yellow,
				info: colors!.sky,
			},
		},
	},
})
