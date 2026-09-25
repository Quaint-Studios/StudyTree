<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Navbar from '$lib/components/organisms/Navbar.svelte';
	import NavDrawer from '$lib/components/organisms/NavDrawer.svelte';

	let { children } = $props();
	let isDrawerOpen = $state(false);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="app-shell">
	<Navbar onMenuClick={() => (isDrawerOpen = !isDrawerOpen)} />
	<NavDrawer isOpen={isDrawerOpen} onClose={() => (isDrawerOpen = false)} />

	<main class="main-content">
		{@render children()}
	</main>
</div>

<style>
	.app-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.main-content {
		flex: 1;
		width: 100%;
		max-width: 1360px;
		margin: 0 auto;
		padding: var(--space-xl) var(--space-lg);
	}

	@media (max-width: 640px) {
		.main-content {
			padding: var(--space-lg) var(--space-md);
		}
	}
</style>

<div style="display:none">
	{#each locales as locale (locale)}
		<a
			href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}
		>{locale}</a>
	{/each}
</div>
