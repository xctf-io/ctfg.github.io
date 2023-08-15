<script>
	import Icon from "@iconify/svelte";
	let text = "Sponsor Us";
	let repeat = 3;
	let separator = " • ";

	let array = [];
	$: array = [...Array(repeat)]
		.map((_) => [...text].concat([...separator]))
		.flat();
</script>

<div class="relative">
	<div class="overflow-hidden">
		<div id="seal" class="relative h-56 md:h-64 mt-4 md:mt-8 animate-spin-slow">
			{#each array as char, index}
				<div
					id="char"
					class="font-heading absolute h-full left-1/2 top-0 uppercase"
					style="--angle: {`${(1 / array.length) * index}turn`}"
				>
					{char}
				</div>
			{/each}
		</div>
	</div>
	<a
		aria-label="Sponsor Us"
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%] md:-translate-y-[43%] hover:scale-110 hover:bg-red-600/20 border border-red-600/40 hover:border-red-600/80 hover:p-14 hover:md:p-20 hover:animate-pulse rounded-full p-12 md:p-16 ease-out transition-all duration-500"
		on:mouseenter={() => {
			document.getElementById("seal").style.animationPlayState = "paused";
		}}
		on:mouseleave={() => {
			document.getElementById("seal").style.animationPlayState = "running";
		}}
		href="https://bank.hackclub.com/donations/start/mcps-hsf"
	>
		<Icon class="w-24 h-24 text-red-600" icon="mdi:heart" />
	</a>
	<div class="hidden md:block opacity-75">
		<Icon
			class="absolute top-1/2 right-8 -translate-y-[46%] md:-translate-y-[43%] w-48 h-24"
			icon="fa:long-arrow-left"
		/>
		<Icon
			class="absolute top-1/2 left-8 -translate-y-[46%] md:-translate-y-[43%] w-48 h-24"
			icon="fa:long-arrow-right"
		/>
	</div>
</div>

<style>
	#char {
		transform: translateX(-50%) rotate(var(--angle));
		text-shadow: 0 0 2px var(--color-background),
			0 0 5px var(--color-background), 0 0 10px var(--color-glow);
	}
</style>
