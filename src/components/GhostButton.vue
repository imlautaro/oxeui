<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

const props = defineProps<{
	active?: boolean
	icon?: string
	pending?: boolean
	to?: string
}>()

const slots = useSlots()

const buildClasses = computed(() => {
	const classes = [
		'duration-100 flex rounded-3xl ring-2 ring-transparent hover:rounded-2xl active:rounded-2xl',
	]

	if (props.active) {
		classes.push('text-body')
	} else {
		classes.push(
			'btn-ghost text-secondary hover:(text-body ring-slate-200/50 dark:ring-neutral-700/50) active:(text-body ring-slate-200/100 dark:ring-neutral-700/100)'
		)
	}

	if (props.icon || slots.icon) {
		classes.push('p-3')
	} else {
		classes.push('px-4 py-2 lg:text-lg')
	}

	return classes.join(' ')
})
</script>

<template>
	<component
		:is="to !== undefined ? NuxtLink : 'button'"
		:to="to"
		:disabled="pending"
		:class="buildClasses"
	>
		<Icon v-if="icon" class="text-base" :name="icon" />
		<slot name="icon" />
		<span><slot /></span>
	</component>
</template>
