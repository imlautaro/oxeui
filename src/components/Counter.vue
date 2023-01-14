<script setup lang="ts">
defineProps<{ value?: number }>()
</script>

<template>
	<div class="relative">
		<span
			v-if="value"
			class="bg-primary-600 absolute flex top-0 right-0 -translate-y-1/3 rounded-full px-1.25 font-bold text-white"
			style="font-size: 0.625rem; line-height: 1rem"
		>
			{{ value > 99 ? '+99' : value }}
		</span>
		<slot />
	</div>
</template>
