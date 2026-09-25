<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import { Menu } from '@lucide/svelte';

	type Props = {
		onclick?: (event: MouseEvent) => void;
		isOpen?: boolean;
		ariaControls?: string;
		class?: string;
	};

	let {
		onclick,
		isOpen = false,
		ariaControls = 'main-navigation-menu',
		class: className = ''
	}: Props = $props();
</script>

<Button
	variant="ghost"
	size="icon"
	aria-label="Open navigation menu"
	aria-expanded={isOpen}
	aria-controls={ariaControls}
	class="nav-menu-trigger {className}"
	{onclick}
>
	<Menu size={22} strokeWidth={2.2} />
</Button>

<style>
	:global(.nav-menu-trigger) {
		color: var(--color-text);
		border-radius: var(--radius-md, 16px);
		transition: background-color var(--transition-fast), color var(--transition-fast);
	}

	:global(.nav-menu-trigger:hover) {
		background-color: var(--color-surface-hover);
		color: var(--color-brand);
	}

	:global(.nav-menu-trigger:active) {
		background-color: var(--color-border);
	}
</style>
