<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children } = $props();
</script>

<NavBar></NavBar>
<main>
	<section class="container mx-auto px-4">
		{@render children()}
	</section>
</main>
