<script>
	import Icon from "@iconify/svelte";

	let features = [
		{
			question: "What is an HSF?",
			answer:
				"An HSF is a flavor of a CTF. The challenges are connected to a theme, and the goal is not to get the most flags, but to create the most convincing writeup.",
		},
		{
			question: "What is a writeup?",
			answer:
				"A writeup is a collection of all the evidence and flags you have collected, and how you found them. Check out b1c's excellent writeup for MCPS HSF 2023.",
		},
		{
			question: "What are the divisions?",
			answer:
				"The competition is divided into a novice and advanced division. The novice division is for beginners, and the advanced division is for more experienced hackers.",
		},
		{
			question: "Do I need experience?",
			answer:
				"No! This competition is for people for all skill levels. Also, winners are determined by the writeup and number of flags.",
		},
		{
			question: "Are there prizes?",
			answer:
				"Yes! We had drones and GoPros last year. The top three in both the novice and advanced division win prizes.",
		},
		{
			question: "I have more questions!",
			answer:
				"Join our Discord server below and ask away! We'll be happy to answer any questions you have.",
		},
	];

	function toggleAnswer(event) {
		const question = event.currentTarget;
		const answer = question.nextElementSibling;
		if (answer) {
			answer.classList.toggle("hidden");
			const icon = question.firstChild.nextElementSibling;
			icon.classList.toggle("rotate-180");
		}
	}
</script>

<span id="faq" class="w-full md:w-[50%] border-b border-primary font-heading font-bold text-center mt-8">
	<span
		class="absolute text-5xl bg-default left-1/2 -translate-x-1/2 -translate-y-1/2 px-4"
	>
		FAQ
	</span>
</span>

<ul
	class="grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 w-full px-3 xs:px-16 md:px-8 text-center"
>
	{#each features as { question, answer }}
		{#if question !== "What is a writeup?"}
			<li
				class="flex flex-col items-center gap-2 border md:border-2 bg-lowcontrast border-lowcontrast p-2 xs:p-4 rounded-md xs:rounded-lg"
			>
				<p
					class="relative w-full xs:text-lg font-medium xs:font-bold md:underline decoration-primary underline-offset-[10px] decoration-from-font"
					on:click={toggleAnswer}
					on:keypress={toggleAnswer}
				>
					{question}
					<Icon
						class="md:hidden absolute top-1/2 -translate-y-1/2 -right-1 xs:-right-2 w-6 h-6"
						icon="mdi:chevron-down"
					/>
				</p>
				<p class="hidden md:block text-offset text-sm font-extralight">
					{answer}
				</p>
			</li>
		{:else}
			<li
				class="flex flex-col items-center gap-2 border md:border-2 bg-lowcontrast border-lowcontrast p-2 xs:p-4 rounded-md xs:rounded-lg"
			>
				<p
					class="w-full relative xs:text-lg font-medium xs:font-bold md:underline decoration-primary underline-offset-[10px] decoration-from-font"
					on:click={toggleAnswer}
					on:keypress={toggleAnswer}
				>
					What is a writeup?
					<Icon
						class="md:hidden absolute -right-1 xs:-right-2 top-1/2 -translate-y-1/2 w-6 h-6"
						icon="mdi:chevron-down"
					/>
				</p>
				<p class="hidden md:block font-extralight text-sm">
					A writeup is a collection of all the evidence and flags you have
					collected, and how you found them. Check out b1c's{" "}
					<a
						class="text-primary underline hover:decoration-wavy underline-offset-4 font-normal"
						href="pdfs/b1c_HSFReport.pdf"
						>excellent writeup
					</a>
					for MCPS HSF 2023.
				</p>
			</li>
		{/if}
	{/each}
</ul>
