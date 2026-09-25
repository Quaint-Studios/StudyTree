<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import { ArrowRight } from '@lucide/svelte';

	type Props = {
		class?: string;
	};

	let { class: className = '' }: Props = $props();
</script>

<section class="hero {className}">

	<h1 class="hero__title">
		Master STEM, languages, and the arts from fundamentals to graduate depth.
	</h1>

	<p class="hero__lead">
		StudyTree is an open-source educational platform designed for structured learning across every developmental stage. We also help you fill in your knowledge gaps.
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
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 860px;
		margin: 0 auto;
		padding: var(--space-2xl) 0 var(--space-3xl);
		gap: var(--space-lg);
	}

	.hero__title {
		font-family: var(--font-sans);
		font-size: clamp(2.25rem, 5vw, 3.5rem);
		font-weight: 700;
		line-height: 1.15;
		letter-spacing: -0.035em;
		color: var(--color-text);
	}

	.hero__lead {
		font-size: clamp(1.05rem, 2vw, 1.25rem);
		line-height: 1.6;
		color: var(--color-text-secondary);
		max-width: 680px;
	}

	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: var(--space-md);
		padding-top: var(--space-xs);
	}

	@media (max-width: 640px) {
		.hero {
			padding: var(--space-xl) 0 var(--space-2xl);
			gap: var(--space-md);
		}

		.hero__actions {
			flex-direction: column;
			width: 100%;
		}

		:global(.hero__actions .btn) {
			width: 100%;
		}
	}
</style>
