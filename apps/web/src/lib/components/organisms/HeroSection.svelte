<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import PhilosophyCarousel from '$lib/components/molecules/PhilosophyCarousel.svelte';
	import { ArrowRight } from '@lucide/svelte';

	type Props = {
		class?: string;
		children?: Snippet;
	};

	let { class: className = '', children }: Props = $props();
</script>

<section class="hero {className}">
	<div class="hero__left">
		<div class="hero__copy">
			<h1 class="hero__title">Master STEM, languages, and art from beginner to graduate level.</h1>

			<p class="hero__lead">
				StudyTree is an open-source educational platform designed for structured learning across
				every developmental stage. We also help you fill in your knowledge gaps.
			</p>

			<div class="hero__actions">
				<Button variant="primary" size="lg" href="#mathematics">
					<span>Explore Mathematics</span>
					<ArrowRight size={18} />
				</Button>

				<Button variant="outline" size="lg" href="#subjects">
					<span>Browse Subjects</span>
				</Button>
			</div>
		</div>
	</div>

	<div class="hero__right">
		{#if children}
			{@render children()}
		{:else}
			<PhilosophyCarousel />
		{/if}
	</div>
</section>

<style>
	.hero {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
		align-items: center;
		gap: var(--space-2xl);
		width: 100%;
		padding: var(--space-2xl) 0 var(--space-3xl);
	}

	.hero__left {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
	}

	.hero__copy {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		gap: var(--space-md);
		max-width: 560px;
		width: 100%;
	}

	.hero__title {
		font-family: var(--font-sans);
		font-size: clamp(2rem, 3.8vw, 3rem);
		font-weight: 700;
		line-height: 1.15;
		letter-spacing: -0.035em;
		color: var(--color-text);
	}

	.hero__lead {
		font-size: clamp(1rem, 1.35vw, 1.15rem);
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		gap: var(--space-sm);
		padding-top: var(--space-xs);
	}

	.hero__right {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-width: 0;
		min-height: 460px;
	}

	@media (max-width: 960px) {
		.hero {
			grid-template-columns: 1fr;
			gap: var(--space-xl);
			padding: var(--space-xl) 0 var(--space-2xl);
		}

		.hero__left {
			justify-content: center;
		}

		.hero__copy {
			max-width: 100%;
		}

		.hero__right {
			min-height: 460px;
		}
	}

	@media (max-width: 640px) {
		.hero {
			gap: var(--space-lg);
		}

		.hero__copy {
			gap: var(--space-sm);
		}

		.hero__title {
			font-size: clamp(1.6rem, 5.5vw, 2.25rem);
		}

		.hero__lead {
			font-size: 0.95rem;
		}

		.hero__actions {
			flex-direction: column;
			width: 100%;
		}

		:global(.hero__actions .btn) {
			width: 100%;
		}

		.hero__right {
			min-height: 460px;
		}
	}
</style>
