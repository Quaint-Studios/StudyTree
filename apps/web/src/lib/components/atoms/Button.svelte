<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

	type BaseProps = {
		variant?: 'primary' | 'ghost' | 'outline';
		size?: 'sm' | 'md' | 'lg' | 'icon';
		children?: Snippet;
		class?: string;
	};

	type ButtonAsAnchor = BaseProps &
		Omit<HTMLAnchorAttributes, keyof BaseProps> & {
			href: string;
		};

	type ButtonAsButton = BaseProps &
		Omit<HTMLButtonAttributes, keyof BaseProps> & {
			href?: undefined;
		};

	type Props = ButtonAsButton | ButtonAsAnchor;

	let {
		variant = 'primary',
		size = 'md',
		children,
		class: className = '',
		...rest
	}: Props = $props();

	const isAnchor = $derived('href' in rest && rest.href !== undefined);
</script>

{#if isAnchor}
	{@const anchorProps = rest as HTMLAnchorAttributes}
	<a
		class="btn btn--{variant} btn--{size} {className}"
		{...anchorProps}
	>
		{@render children?.()}
	</a>
{:else}
	{@const buttonProps = rest as HTMLButtonAttributes}
	<button
		type={buttonProps.type ?? 'button'}
		class="btn btn--{variant} btn--{size} {className}"
		{...buttonProps}
	>
		{@render children?.()}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-xs);
		font-family: var(--font-sans);
		font-weight: 500;
		line-height: 1;
		border-radius: var(--radius-md, 16px);
		border: 1.5px solid transparent;
		cursor: pointer;
		user-select: none;
		text-decoration: none;
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast),
			color var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.btn:focus-visible {
		outline: 2px solid var(--color-brand);
		outline-offset: 2px;
	}

	.btn:disabled {
		opacity: 0.55;
		cursor: not-allowed;
		pointer-events: none;
	}

	/* Sizes */
	.btn--sm {
		padding: 0.45rem 0.85rem;
		font-size: var(--font-size-sm);
		border-radius: var(--radius-sm, 10px);
	}

	.btn--md {
		padding: 0.65rem 1.25rem;
		font-size: var(--font-size-base);
		border-radius: var(--radius-md, 16px);
	}

	.btn--lg {
		padding: 0.85rem 1.65rem;
		font-size: var(--font-size-lg);
		border-radius: var(--radius-lg, 22px);
	}

	.btn--icon {
		width: 2.625rem; /* 42px */
		height: 2.625rem;
		padding: 0;
		border-radius: var(--radius-md, 16px);
	}

	/* Variants */
	.btn--primary {
		background-color: var(--color-brand);
		color: var(--color-brand-fg);
		border-color: transparent;
		font-weight: 600;
	}

	.btn--primary:hover {
		background-color: var(--color-brand-hover);
		box-shadow: 0 2px 8px rgba(126, 207, 88, 0.25);
	}

	.btn--primary:active {
		background-color: var(--color-brand-active);
		box-shadow: none;
	}

	.btn--ghost {
		background-color: transparent;
		color: var(--color-text);
		border-color: transparent;
	}

	.btn--ghost:hover {
		background-color: var(--color-surface-hover);
		color: var(--color-text);
	}

	.btn--ghost:active {
		background-color: var(--color-border);
	}

	.btn--outline {
		background-color: transparent;
		color: var(--color-text);
		border-color: var(--color-border);
	}

	.btn--outline:hover {
		border-color: var(--color-brand);
		background-color: var(--color-brand-subtle);
		color: var(--color-text);
	}

	.btn--outline:active {
		border-color: var(--color-brand-active);
	}
</style>
