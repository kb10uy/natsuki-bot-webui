<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar>
	<NavBrand href="/">
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
			>Natsuki Bot</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/conversations">Conversations</NavLi>
		<NavLi href="/reminders">Reminders</NavLi>
	</NavUl>
</Navbar>
