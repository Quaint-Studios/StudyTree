<script lang="ts">
	import type { Component } from 'svelte';

	type Props = {
		title: string;
		description: string;
		icon: Component<{ size?: number; strokeWidth?: number; class?: string }>;
		status?: 'active' | 'upcoming';
		stages?: string;
		previewCourses?: string[];
		href?: string;
		class?: string;
	};

	let {
		title,
		description,
		icon: IconComponent,
		status = 'upcoming',
		stages,
		previewCourses = [],
		href = '#',
		class: className = ''
	}: Props = $props();
</script>

<a
	{href}
	class="subject-card {status === 'active' ? 'subject-card--active' : 'subject-card--upcoming'} {className}"
	aria-label="{title} - {status === 'active' ? 'Active Subject' : 'Upcoming Subject'}"
>
	<!-- Card Header -->
	<div class="subject-card__header">
		<div class="subject-card__icon-wrap">
			<IconComponent size={24} strokeWidth={2.2} class="subject-card__icon" />
		</div>

		<span class="subject-card__status-tag subject-card__status-tag--{status}">
			{status === 'active' ? 'Focus' : 'Soon'}
		</span>
	</div>

	<!-- Content -->
	<div class="subject-card__body">
		<h3 class="subject-card__title">{title}</h3>
		<p class="subject-card__description">{description}</p>
	</div>

	<!-- Stages & Course Previews -->
	<div class="subject-card__footer">
		{#if stages}
			<span class="subject-card__stages">{stages}</span>
		{/if}

		{#if previewCourses.length > 0}
			<div class="subject-card__pills">
				{#each previewCourses as course}
					<span class="subject-card__pill">{course}</span>
				{/each}
			</div>
		{/if}
	</div>
</a>

<style>
	.subject-card {
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 3;
		gap: var(--space-md);
		background-color: var(--color-surface);
		border: 1.5px solid var(--color-border);
		border-radius: var(--radius-lg, 22px);
		padding: var(--space-lg);
		text-decoration: none;
		color: var(--color-text);
		transition:
			border-color var(--transition-normal),
			box-shadow var(--transition-normal),
			background-color var(--transition-normal);
		position: relative;
		overflow: hidden;
	}

	.subject-card:hover {
		border-color: var(--color-brand);
		box-shadow: 0 8px 24px rgba(126, 207, 88, 0.12);
	}

	.subject-card--active {
		border-color: rgba(126, 207, 88, 0.5);
	}

	.subject-card--active:hover {
		border-color: var(--color-brand);
		box-shadow: 0 8px 24px rgba(126, 207, 88, 0.16);
	}

	.subject-card--upcoming {
		opacity: 0.85;
	}

	.subject-card__status-tag {
		font-family: var(--font-sans);
		font-size: var(--font-size-xs);
		font-weight: 600;
		line-height: 1;
		padding: 0.35rem 0.75rem;
		border-radius: var(--radius-full, 9999px);
		letter-spacing: 0.02em;
		user-select: none;
	}

	.subject-card__status-tag--active {
		background-color: var(--color-brand);
		color: var(--color-brand-fg);
	}

	.subject-card__status-tag--upcoming {
		background-color: var(--color-surface-hover);
		color: var(--color-text-muted);
		border: 1px solid var(--color-border);
	}

	.subject-card__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.subject-card__icon-wrap {
		width: 3rem;
		height: 3rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-md, 16px);
		background-color: var(--color-brand-subtle);
		color: var(--color-brand);
		transition: background-color var(--transition-fast), color var(--transition-fast);
	}

	.subject-card:hover .subject-card__icon-wrap {
		background-color: var(--color-brand);
		color: var(--color-brand-fg);
	}

	.subject-card__body {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
	}

	.subject-card__title {
		font-family: var(--font-sans);
		font-size: var(--font-size-xl);
		font-weight: 700;
		color: var(--color-text);
		line-height: 1.25;
	}

	.subject-card__description {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		line-height: 1.5;
	}

	.subject-card__footer {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		padding-top: var(--space-sm);
		border-top: 1px solid var(--color-border-subtle);
	}

	.subject-card__stages {
		font-size: var(--font-size-xs);
		font-weight: 600;
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.subject-card__pills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.subject-card__pill {
		font-size: var(--font-size-xs);
		font-weight: 500;
		padding: 0.25rem 0.6rem;
		border-radius: var(--radius-sm, 10px);
		background-color: var(--color-surface-hover);
		color: var(--color-text-secondary);
		transition: background-color var(--transition-fast), color var(--transition-fast);
	}

	.subject-card:hover .subject-card__pill {
		background-color: var(--color-brand-subtle);
		color: var(--color-brand-fg);
	}
</style>
