<script lang="ts">
	import {
		ChevronLeft,
		ChevronRight,
		Layers,
		Wrench,
		GraduationCap,
		BookCheck
	} from '@lucide/svelte';

	type Props = {
		class?: string;
	};

	let { class: className = '' }: Props = $props();

	const slides = [
		{
			id: 'mastery',
			tag: 'Course Structure',
			title: 'Learn concepts in order, not by cramming',
			description:
				'Every topic builds directly on the one before it. Instead of memorizing answers for a test, you move forward only when the core ideas actually click.',
			highlight: 'Clear prerequisites + No guessing where to start',
			icon: Layers
		},
		{
			id: 'gaps',
			tag: 'Troubleshooting',
			title: 'Stuck on a hard topic? Find what you missed.',
			description:
				'When advanced material feels impossible, an earlier concept usually fell through the cracks. StudyTree backtracks to spot the exact gap holding you up so you can fix it and keep moving.',
			highlight: 'Pinpoint the missing step instantly',
			icon: Wrench
		},
		{
			id: 'stages',
			tag: 'One Roadmap',
			title: 'From basic counting to graduate research',
			description:
				"You shouldn't have to jump between five different platforms as you grow. Everything lives on a single connected path: from elementary basics all the way to university-level lessons.",
			highlight: 'Pre-K to advanced research',
			icon: GraduationCap
		},
		{
			id: 'open',
			tag: 'Open Source',
			title: 'Free forever, built on how people actually learn',
			description:
				'No paywalls, subscriptions, or ads. StudyTree is open-source (MIT) and designed around cognitive research, not algorithms trying to keep you glued to a screen.',
			highlight: 'MIT Licensed + Zero ads or paywalls',
			icon: BookCheck
		}
	];

	let currentIndex = $state(0);
	let isPaused = $state(false);

	const currentSlide = $derived(slides[currentIndex]);
	const ActiveIcon = $derived(currentSlide.icon);

	const next = () => {
		currentIndex = (currentIndex + 1) % slides.length;
	};

	const prev = () => {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	};

	const goTo = (index: number) => {
		currentIndex = index;
	};

	// Auto-advance every 6.5s when not hovered
	$effect(() => {
		if (isPaused) return;

		const timer = setInterval(() => {
			next();
		}, 6500);

		return () => clearInterval(timer);
	});
</script>

<div
	class="philosophy-carousel {className}"
	onmouseenter={() => (isPaused = true)}
	onmouseleave={() => (isPaused = false)}
	role="region"
	aria-roledescription="carousel"
	aria-label="StudyTree Learning Philosophy"
>
	<!-- Top Bar: Icon & Controls -->
	<div class="carousel__header">
		<div class="carousel__icon-box">
			<ActiveIcon size={24} strokeWidth={2.2} />
		</div>

		<div class="carousel__controls">
			<button type="button" class="carousel__nav-btn" onclick={prev} aria-label="Previous slide">
				<ChevronLeft size={20} strokeWidth={2.2} />
			</button>

			<button type="button" class="carousel__nav-btn" onclick={next} aria-label="Next slide">
				<ChevronRight size={20} strokeWidth={2.2} />
			</button>
		</div>
	</div>

	<!-- Content -->
	<div class="carousel__stage">
		{#each slides as slide, i}
			<div
				class="carousel__slide"
				class:carousel__slide--active={i === currentIndex}
				aria-hidden={i !== currentIndex}
			>
				<h3 class="carousel__title">{slide.title}</h3>
				<p class="carousel__description">{slide.description}</p>

				<div class="carousel__highlight-box">
					<span class="carousel__highlight-dot"></span>
					<span class="carousel__highlight-text">{slide.highlight}</span>
				</div>
			</div>
		{/each}
	</div>

	<!-- Tab Progress -->
	<div class="carousel__indicators" role="tablist" aria-label="Slide Selector">
		{#each slides as slide, i}
			<button
				type="button"
				role="tab"
				class="carousel__indicator-tab"
				class:carousel__indicator-tab--active={i === currentIndex}
				onclick={() => goTo(i)}
				aria-selected={i === currentIndex}
				aria-label="Slide {i + 1}: {slide.tag}"
			>
				<span class="carousel__indicator-bar"></span>
			</button>
		{/each}
	</div>
</div>

<style>
	.philosophy-carousel {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		max-width: 580px;
		height: 400px;
		min-height: 400px;
		max-height: 400px;
		background-color: var(--color-surface);
		border: 1.5px solid var(--color-border);
		border-radius: var(--radius-lg, 22px);
		padding: var(--space-xl);
		box-shadow: var(--shadow-sm);
		box-sizing: border-box;
		transition: border-color var(--transition-normal);
		overflow: hidden;
	}

	.philosophy-carousel:hover {
		border-color: rgba(126, 207, 88, 0.45);
	}

	.carousel__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
		margin-bottom: var(--space-md);
		flex-shrink: 0;
	}

	.carousel__icon-box {
		width: 3.25rem;
		height: 3.25rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-md, 16px);
		background-color: var(--color-brand-subtle);
		color: var(--color-brand);
		flex-shrink: 0;
		transition:
			background-color var(--transition-fast),
			color var(--transition-fast);
	}

	.carousel__controls {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
	}

	.carousel__nav-btn {
		width: 2.25rem;
		height: 2.25rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-full, 9999px);
		border: 1.5px solid var(--color-border);
		background-color: var(--color-surface);
		color: var(--color-text-secondary);
		cursor: pointer;
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast),
			color var(--transition-fast);
	}

	.carousel__nav-btn:hover {
		background-color: var(--color-surface-hover);
		border-color: var(--color-brand);
		color: var(--color-brand);
	}

	.carousel__stage {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		flex: 1;
		min-height: 0;
		padding: var(--space-xs) 0;
		overflow: hidden;
	}

	.carousel__slide {
		grid-column: 1;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: var(--space-sm);
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		transition:
			opacity var(--transition-normal),
			visibility var(--transition-normal);
	}

	.carousel__slide--active {
		opacity: 1;
		visibility: visible;
		pointer-events: auto;
	}

	.carousel__title {
		margin: 0;
		font-family: var(--font-sans);
		font-size: clamp(1.25rem, 1.6vw, 1.45rem);
		font-weight: 700;
		line-height: 1.25;
		letter-spacing: -0.025em;
		color: var(--color-text);
		min-height: 2.5em;
		display: flex;
		align-items: flex-start;
	}

	.carousel__description {
		margin: 0;
		font-size: clamp(0.925rem, 1.05vw, 0.975rem);
		line-height: 1.6;
		color: var(--color-text-secondary);
		min-height: 6.4em;
	}

	.carousel__highlight-box {
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		background-color: var(--color-surface-hover);
		border: 1px solid var(--color-border-subtle);
		border-radius: var(--radius-md, 16px);
		padding: 0.55rem 0.95rem;
		margin-top: var(--space-2xs);
		width: fit-content;
		box-sizing: border-box;
	}

	.carousel__highlight-dot {
		width: 7px;
		height: 7px;
		border-radius: var(--radius-full);
		background-color: var(--color-brand);
		flex-shrink: 0;
	}

	.carousel__highlight-text {
		font-family: var(--font-sans);
		font-size: var(--font-size-xs, 0.75rem);
		font-weight: 600;
		color: var(--color-text);
		letter-spacing: 0.01em;
	}

	.carousel__indicators {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		padding-top: var(--space-md);
		border-top: 1px solid var(--color-border-subtle);
		margin-top: auto;
		flex-shrink: 0;
	}

	.carousel__indicator-tab {
		flex: 1;
		height: 1.25rem;
		display: flex;
		align-items: center;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.carousel__indicator-bar {
		width: 100%;
		height: 3.5px;
		border-radius: var(--radius-full);
		background-color: var(--color-border);
		transition: background-color var(--transition-normal);
	}

	.carousel__indicator-tab--active .carousel__indicator-bar {
		background-color: var(--color-brand);
	}

	.carousel__indicator-tab:hover .carousel__indicator-bar {
		background-color: var(--color-brand-hover);
	}

	@media (max-width: 640px) {
		.philosophy-carousel {
			padding: var(--space-lg);
			height: 460px;
			min-height: 460px;
			max-height: 460px;
		}

		.carousel__title {
			font-size: 1.2rem;
			min-height: 2.6em;
		}

		.carousel__description {
			font-size: 0.875rem;
			min-height: 6.4em;
		}

		.carousel__highlight-box {
			width: 100%;
		}
	}
</style>
