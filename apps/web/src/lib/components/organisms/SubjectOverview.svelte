<script lang="ts">
	import SubjectCard from '$lib/components/molecules/SubjectCard.svelte';
	import { Pi, FlaskConical, BookOpen, Compass, Brush, Music } from '@lucide/svelte';

	type Props = {
		class?: string;
	};

	let { class: className = '' }: Props = $props();

	const subjects = [
		{
			title: 'Mathematics',
			description:
				'From early number sense and foundational arithmetic all the way to advanced calculus and topology.',
			icon: Pi,
			status: 'active' as const,
			stages: 'Pre-K to Advanced Level (73 courses)',
			previewCourses: ['Number Sense', 'Algebra I & II', 'Calculus', 'Linear Algebra', 'Topology'],
			href: '#mathematics'
		},
		{
			title: 'Science',
			description:
				'Explore the natural world through hands-on experiments, physical sciences, biology, and scientific computing.',
			icon: FlaskConical,
			status: 'upcoming' as const,
			stages: 'Early Explorations to Research',
			previewCourses: ['Physics', 'Chemistry', 'Cell Biology', 'Astrophysics'],
			href: '#science'
		},
		{
			title: 'Reading & Literacy',
			description:
				'Build strong reading habits, from basic phonics and reading fluency to advanced literary analysis and critical thinking.',
			icon: BookOpen,
			status: 'upcoming' as const,
			stages: 'Phonics to Literature',
			previewCourses: ['Phonemic Awareness', 'Reading Comprehension', 'Literature', 'Creative Writing'],
			href: '#reading'
		},
		{
			title: 'Languages',
			description:
				'Master new languages through vocabulary building, grammar fundamentals, cultural context, and real-world conversation.',
			icon: Compass,
			status: 'upcoming' as const,
			stages: 'Beginner to Conversational Fluency',
			previewCourses: ['Vocabulary & Grammar', 'Conversational Practice', 'Linguistics', 'Cultural Studies'],
			href: '#languages'
		},
		{
			title: 'The Arts & Music',
			description:
				'Develop creative expression through visual arts, art history, music theory, and hands-on composition.',
			icon: Brush,
			status: 'upcoming' as const,
			stages: 'Fundamentals to Advanced Expression',
			previewCourses: ['Visual Arts', 'Art History', 'Music Theory', 'Composition'],
			href: '#arts'
		}
	];
</script>

<section id="subjects" class="subjects-section {className}">
	<div class="subjects-section__header">
		<h2 class="subjects-section__title">Curriculum Subjects</h2>
		<p class="subjects-section__subtitle">
			Explore structured learning tracks built from certified sources and educational research.
		</p>
	</div>

	<div class="subjects-grid">
		{#each subjects as subject}
			<SubjectCard {...subject} />
		{/each}
	</div>
</section>

<style>
	.subjects-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		padding-bottom: var(--space-3xl);
	}

	.subjects-section__header {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
		max-width: 640px;
	}

	.subjects-section__title {
		font-family: var(--font-sans);
		font-size: var(--font-size-2xl);
		font-weight: 700;
		color: var(--color-text);
		letter-spacing: -0.025em;
	}

	.subjects-section__subtitle {
		font-size: var(--font-size-base);
		color: var(--color-text-secondary);
		line-height: 1.5;
	}

	.subjects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		grid-auto-rows: auto;
		gap: var(--space-lg);
	}

	@media (max-width: 640px) {
		.subjects-grid {
			grid-template-columns: 1fr;
			gap: var(--space-md);
		}
	}
</style>
