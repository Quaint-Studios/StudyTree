<script lang="ts">
	import HeroSection from '$lib/components/organisms/HeroSection.svelte';
	import SubjectOverview from '$lib/components/organisms/SubjectOverview.svelte';
</script>

<svelte:head>
	<title>StudyTree™ - Master STEM, Languages, Music, and Art</title>
	<meta
		name="description"
		content="StudyTree gives structured and interactive learning across all academic fields: from foundational early childhood to graduate depth. Open-source and research-grounded."
	/>
</svelte:head>

<div class="landing-page">
	<HeroSection />
	<SubjectOverview />
</div>

<style>
	.landing-page {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xl);
	}
</style>
