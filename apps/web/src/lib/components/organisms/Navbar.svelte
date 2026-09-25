<script lang="ts">
	import NavMenuTrigger from '$lib/components/molecules/NavMenuTrigger.svelte';
	import BrandMark from '$lib/components/atoms/BrandMark.svelte';
	import NavAuthAction from '$lib/components/molecules/NavAuthAction.svelte';

	type Props = {
		onMenuClick?: (event: MouseEvent) => void;
		class?: string;
	};

	let {
		onMenuClick,
		class: className = ''
	}: Props = $props();
</script>

<header class="navbar-wrapper {className}">
	<nav class="navbar" aria-label="Main Navigation">
		<!-- Left: Menu Trigger -->
		<div class="navbar__left">
			<NavMenuTrigger onclick={onMenuClick} />
		</div>

		<!-- Center: BrandMark -->
		<div class="navbar__center">
			<BrandMark />
		</div>

		<!-- Right: Sign In Action -->
		<div class="navbar__right">
			<NavAuthAction />
		</div>
	</nav>
</header>

<style>
	.navbar-wrapper {
		position: sticky;
		top: 0;
		z-index: 50;
		width: 100%;
		background-color: var(--color-navbar);
		border-bottom: 1px solid var(--color-border-subtle);
		transition:
			background-color var(--transition-normal),
			border-color var(--transition-normal);
	}

	.navbar {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		max-width: 1360px;
		margin: 0 auto;
		padding: var(--space-sm) var(--space-lg);
		min-height: 4.25rem;
	}

	.navbar__left {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.navbar__center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.navbar__right {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: var(--space-xs);
	}

	@media (max-width: 640px) {
		.navbar {
			padding: var(--space-xs) var(--space-md);
			min-height: 3.75rem;
		}
	}
</style>
