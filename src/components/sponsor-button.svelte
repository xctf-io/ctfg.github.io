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

<a
	class="relative hover:scale-100"
	href="https://bank.hackclub.com/donations/start/mcps-hsf"
>
	<div id="seal" class="relative h-56 md:h-64 mt-4 md:mt-8 animate-spin-slow">
		{#each array as char, index}
			<div
				id="char"
				class="font-heading absolute h-full left-1/2 top-0 uppercase pause-animation"
				style="--angle: {`${(1 / array.length) * index}turn`}"
			>
				{char}
			</div>
		{/each}
	</div>
	<div
		class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[46%] md:-translate-y-[43%] hover:scale-110 hover:bg-red-600/20 border border-red-600/40 hover:border-red-600/80 hover:p-14 hover:md:p-20 hover:animate-pulse rounded-full p-12 md:p-16 ease-out transition-all duration-500"
        on:mouseenter={() => {
            document.getElementById("seal").classList.add("pause-animation");
        }}
        on:mouseleave={() => {
            document.getElementById("seal").classList.remove("pause-animation");
        }}
        
    >
		<Icon class="w-24 h-24 text-red-600" icon="mdi:heart" />
	</div>
</a>

<style>
	#char {
		transform: translateX(-50%) rotate(var(--angle));
        text-shadow: 0 0 2px var(--color-background), 0 0 5px var(--color-background), 0 0 10px var(--color-glow);
	}
    .pause-animation {
        animation-play-state: paused;
    }
</style>
