import { colors } from '@unocss/preset-mini'

export default defineAppConfig({
	colors: {
		primary: colors!.blue,
	},
})

declare module '@nuxt/schema' {
	interface AppConfigInput {
		colors?: object
	}
}
