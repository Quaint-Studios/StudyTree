<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';

	type Props = {
		href?: string;
		label?: string;
		class?: string;
		onclick?: (event: MouseEvent) => void;
	};

	let {
		href = '/demo/better-auth',
		label = 'Sign In',
		class: className = '',
		onclick
	}: Props = $props();
</script>

<div class="nav-auth-action {className}">
	<Button
		variant="ghost"
		size="md"
		{href}
		{onclick}
		class="nav-auth-btn"
	>
		{label}
	</Button>
</div>

<style>
	.nav-auth-action {
		display: inline-flex;
		align-items: center;
	}

	:global(.nav-auth-btn) {
		font-weight: 500;
		color: var(--color-text);
		border-radius: var(--radius-md, 16px);
		padding: 0.55rem 1.15rem;
		transition:
			background-color var(--transition-fast),
			color var(--transition-fast);
	}

	:global(.nav-auth-btn:hover) {
		background-color: var(--color-surface-hover);
		color: var(--color-brand);
	}

	:global(.nav-auth-btn:active) {
		background-color: var(--color-border);
	}
</style>
