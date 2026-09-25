<script lang="ts">
	type Props = {
		size?: 'sm' | 'md' | 'lg';
		showWordmark?: boolean;
		href?: string;
		class?: string;
		onclick?: (event: MouseEvent) => void;
	};

	let {
		size = 'md',
		showWordmark = true,
		href = '/',
		class: className = '',
		onclick
	}: Props = $props();
</script>

<a {href} class="brand brand--{size} {className}" aria-label="StudyTree Home" {onclick}>
	<svg
		class="brand__icon"
		viewBox="0 0 36 36"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<defs>
			<linearGradient id="tree-grad" x1="6" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
				<stop offset="0%" stop-color="#96e273" />
				<stop offset="100%" stop-color="#6ebd47" />
			</linearGradient>
		</defs>
		<path
			d="M18 32V18M18 18C18 11.5 13 6 6 6C6 13 11 18 18 18ZM18 18C18 12.5 22.5 7.5 29.5 7.5C29.5 14.5 25 18 18 18Z"
			stroke="#7ecf58"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<circle cx="18" cy="7" r="2.5" fill="#7ecf58" />
	</svg>

	{#if showWordmark}
		<span class="brand__wordmark">
			<span class="brand__study">Study</span><span class="brand__tree">Tree</span><span class="brand__tm">™</span>
		</span>
	{/if}
</a>

<style>
	.brand {
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		text-decoration: none;
		color: var(--color-text);
		user-select: none;
		transition: opacity var(--transition-fast);
	}

	.brand:hover {
		opacity: 0.85;
	}

	.brand:focus-visible {
		outline: 2px solid var(--color-brand);
		outline-offset: 4px;
		border-radius: var(--radius-xs);
	}

	.brand__icon {
		display: block;
		flex-shrink: 0;
	}

	.brand__wordmark {
		font-family: var(--font-sans);
		letter-spacing: -0.025em;
		line-height: 1;
		display: inline-flex;
		align-items: baseline;
	}

	.brand__study {
		font-weight: 500;
		color: var(--color-text);
	}

	.brand__tree {
		font-weight: 700;
		color: var(--color-brand);
	}

	.brand__tm {
		font-size: 0.5em;
		font-weight: 600;
		color: var(--color-text-muted);
		margin-left: 2px;
		position: relative;
		top: -0.675em;
		line-height: 1;
	}

	/* Size Modifiers */
	.brand--sm .brand__icon {
		width: 1.5rem;
		height: 1.5rem;
	}
	.brand--sm .brand__wordmark {
		font-size: var(--font-size-base);
	}

	.brand--md .brand__icon {
		width: 1.875rem; /* 30px */
		height: 1.875rem;
	}
	.brand--md .brand__wordmark {
		font-size: 1.35rem;
	}

	.brand--lg .brand__icon {
		width: 2.25rem;
		height: 2.25rem;
	}
	.brand--lg .brand__wordmark {
		font-size: var(--font-size-2xl);
	}
</style>
