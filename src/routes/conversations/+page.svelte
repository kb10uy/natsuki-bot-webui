<script lang="ts">
	import type { PageProps } from './$types';
	import {
		Heading,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	let { data }: PageProps = $props();
</script>

<Heading tag="h1">Conversations ({data.count})</Heading>

<Table>
	<TableHead>
		<TableHeadCell>ID</TableHeadCell>
		<TableHeadCell>Created At</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each data.items as item}
			<TableBodyRow>
				<TableBodyCell>
					<a href="/conversations/{item.id}" class="text-primary-600">{item.id}</a>
				</TableBodyCell>
				<TableBodyCell>{item.created_at}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
