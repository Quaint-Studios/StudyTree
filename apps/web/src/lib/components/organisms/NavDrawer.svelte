<script lang="ts">
	import { X, Pi, FlaskConical, BookOpen, NotebookPen, Compass, Brush, Music, Code } from '@lucide/svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import BrandMark from '$lib/components/atoms/BrandMark.svelte';

	type Props = {
		isOpen?: boolean;
		onClose?: () => void;
		class?: string;
	};

	let {
		isOpen = false,
		onClose,
		class: className = ''
	}: Props = $props();

	// Escape key dismiss listener
	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && isOpen) {
			onClose?.();
		}
	};

	// Shift-free scroll locking on the body
	$effect(() => {
		if (isOpen) {
			const originalOverflow = document.body.style.overflow;
			document.body.style.overflow = 'hidden';

			return () => {
				document.body.style.overflow = originalOverflow;
			};
		}
	});

	// Helper to close on link navigation
	const handleNavClick = () => {
		onClose?.();
	};
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	class="drawer-backdrop"
	class:drawer-backdrop--open={isOpen}
	onclick={onClose}
	aria-hidden="true"
></div>

<!-- Drawer panel -->
<div
	class="drawer-panel {className}"
	class:drawer-panel--open={isOpen}
	role="dialog"
	aria-modal="true"
	aria-label="Navigation Menu"
	inert={!isOpen}
>
	<!-- Header with Brand & Close Button -->
	<div class="drawer-header">
		<BrandMark size="sm" onclick={handleNavClick} />
		<Button
			variant="ghost"
			size="icon"
			aria-label="Close navigation menu"
			onclick={onClose}
		>
			<X size={20} strokeWidth={2.2} />
		</Button>
	</div>

	<!-- Navigation Sections -->
	<nav class="drawer-nav">
		<div class="drawer-section">
			<span class="drawer-section__title">Curriculum</span>
			<ul class="drawer-list">
				<li>
					<a
						href="#mathematics"
						class="drawer-link active"
						onclick={handleNavClick}
					>
						<Pi size={18} class="drawer-icon" />
						<span>Mathematics</span>
						<span class="badge">Focus</span>
					</a>
				</li>
				<li>
					<a
						href="#science"
						class="drawer-link drawer-link--disabled"
						onclick={handleNavClick}
					>
						<FlaskConical size={18} class="drawer-icon" />
						<span>Science</span>
						<span class="badge-soon">Soon</span>
					</a>
				</li>
				<li>
					<a
						href="#reading"
						class="drawer-link drawer-link--disabled"
						onclick={handleNavClick}
					>
						<BookOpen size={18} class="drawer-icon" />
						<span>Reading</span>
						<span class="badge-soon">Soon</span>
					</a>
				</li>
				<li>
					<a
						href="#writing"
						class="drawer-link drawer-link--disabled"
						onclick={handleNavClick}
					>
						<NotebookPen size={18} class="drawer-icon" />
						<span>Writing</span>
						<span class="badge-soon">Soon</span>
					</a>
				</li>
				<li>
					<a
						href="#languages"
						class="drawer-link drawer-link--disabled"
						onclick={handleNavClick}
					>
						<Compass size={18} class="drawer-icon" />
						<span>Languages</span>
						<span class="badge-soon">Soon</span>
					</a>
				</li>
				<li>
					<a
						href="#arts"
						class="drawer-link drawer-link--disabled"
						onclick={handleNavClick}
					>
						<Brush size={18} class="drawer-icon" />
						<span>The Arts</span>
						<span class="badge-soon">Soon</span>
					</a>
				</li>
				<li>
					<a
						href="#music"
						class="drawer-link drawer-link--disabled"
						onclick={handleNavClick}
					>
						<Music size={18} class="drawer-icon" />
						<span>Music</span>
						<span class="badge-soon">Soon</span>
					</a>
				</li>
			</ul>
		</div>

		<div class="drawer-section">
			<span class="drawer-section__title">About & Community</span>
			<ul class="drawer-list">
				<li>
					<a
						href="https://github.com/Quaint-Studios/StudyTree"
						target="_blank"
						rel="noopener noreferrer"
						class="drawer-link"
						onclick={handleNavClick}
					>
						<Code size={18} class="drawer-icon" />
						<span>Open Source</span>
					</a>
				</li>
			</ul>
		</div>
	</nav>
</div>

<style>
	/* Pure dimming backdrop with 150ms opacity transition */
	.drawer-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.38);
		z-index: 90;
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		transition:
			opacity 150ms ease,
			visibility 150ms ease;
	}

	.drawer-backdrop--open {
		opacity: 1;
		visibility: visible;
		pointer-events: auto;
	}

	/* Drawer panel with 150ms transform slide */
	.drawer-panel {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: min(320px, 85vw);
		background-color: var(--color-navbar, #ffffff);
		border-right: 1px solid var(--color-border-subtle);
		box-shadow: var(--shadow-lg);
		z-index: 100;
		padding: var(--space-md) var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
		transform: translateX(-100%);
		visibility: hidden;
		pointer-events: none;
		transition:
			transform 150ms cubic-bezier(0.16, 1, 0.3, 1),
			visibility 150ms cubic-bezier(0.16, 1, 0.3, 1),
			background-color var(--transition-normal);
	}

	.drawer-panel--open {
		transform: translateX(0);
		visibility: visible;
		pointer-events: auto;
	}

	.drawer-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: var(--space-sm);
		border-bottom: 1px solid var(--color-border-subtle);
	}

	.drawer-nav {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		overflow-y: auto;
	}

	.drawer-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.drawer-section__title {
		font-size: var(--font-size-xs);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
		padding: 0 var(--space-xs);
	}

	.drawer-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
	}

	.drawer-link {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: 0.65rem var(--space-sm);
		border-radius: var(--radius-md, 16px);
		color: var(--color-text);
		font-weight: 500;
		text-decoration: none;
		transition:
			background-color var(--transition-fast),
			color var(--transition-fast);
	}

	.drawer-link:hover {
		background-color: var(--color-surface-hover);
		color: var(--color-brand);
	}

	.drawer-link.active {
		background-color: var(--color-brand-subtle);
		color: var(--color-brand-fg);
		font-weight: 600;
	}

	.drawer-link--disabled {
		opacity: 0.55;
		cursor: not-allowed;
	}

	.drawer-link--disabled:hover {
		background-color: transparent;
		color: var(--color-text);
	}

	:global(.drawer-icon) {
		flex-shrink: 0;
		color: inherit;
	}

	.badge {
		margin-left: auto;
		font-size: var(--font-size-xs);
		font-weight: 600;
		padding: 0.15rem 0.5rem;
		border-radius: var(--radius-sm);
		background-color: var(--color-brand);
		color: var(--color-brand-fg);
	}

	.badge-soon {
		margin-left: auto;
		font-size: var(--font-size-xs);
		font-weight: 500;
		padding: 0.15rem 0.5rem;
		border-radius: var(--radius-sm);
		background-color: var(--color-surface-hover);
		color: var(--color-text-muted);
	}
</style>
