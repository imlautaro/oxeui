<script setup lang="ts">
const darkMode = useDarkMode()

const text = ref('')
</script>

<template>
	<div>
		<Stack class="h-screen overflow-y-hidden" vertical>
			<Stack
				class="bg-surface border-b-2 border-default p-4"
				items="center"
				justify="between"
			>
				<span class="font-extrabold text-2xl">Logotype</span>
				<Stack gap="2" items="center">
					<GhostButton to="/?test=true" active> Blog </GhostButton>
					<GhostButton> Services </GhostButton>
					<GhostButton> Pricing </GhostButton>
					<GhostButton> Carrers </GhostButton>
					<Toggle v-model="darkMode" />
					<Button color="primary">Test</Button>
				</Stack>
				<Stack gap="2" items="center">
					<Counter :value="12">
						<GhostButton icon="lucide:shopping-cart" />
					</Counter>
					<div
						class="bg-slate-200 flex dark:bg-neutral-700 rounded-full h-6"
						style="width: 2px"
					/>
					<GhostButton icon="lucide:user" />
					<GhostButton class="!p-2">
						<template #icon>
							<img
								class="rounded-2xl w-8"
								src="https://yt3.googleusercontent.com/c-EqVVedhl3AQaWp7t9GTXEc3EBsqhLLML0YX7qYgcLGcaHz9FB-7-sOHGPh8BMCMxfgvLzzzx4=s900-c-k-c0x00ffffff-no-rj"
							/>
						</template>
					</GhostButton>
				</Stack>
			</Stack>
			<Stack class="h-full">
				<Stack
					class="bg-white/50 dark:bg-neutral-800/50 border-r-2 border-default p-2 h-full"
					justify="between"
					vertical
				>
					<Stack gap="2" vertical>
						<GhostButton icon="lucide:package" />
						<GhostButton icon="lucide:trending-up" />
						<GhostButton icon="lucide:users" />
						<div
							class="bg-slate-200 dark:bg-neutral-700 mx-auto rounded-full w-1/2"
							style="height: 2px"
						/>
						<GhostButton icon="lucide:message-square" />
					</Stack>
					<Stack gap="2" vertical>
						<GhostButton icon="lucide:settings" />
					</Stack>
				</Stack>
				<Container class="py-12">
					<h1>Hello</h1>
				</Container>
			</Stack>
		</Stack>
	</div>
</template>
