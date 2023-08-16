<script>
	import Icon from "@iconify/svelte";

	let features = [
		{
			question: "What is an HSF?",
			answer:
				"An HSF is a flavor of a CTF. The challenges are connected to a theme, and the goal is not to get the most flags, but to create the most convincing writeup.",
			icon: "mdi:chevron-down",
		},
		{
			question: "What is a writeup?",
			answer:
				"A writeup is a collection of all the evidence and flags you have collected, and how you found them. Check out b1c's excellent writeup for MCPS HSF 2023.",
			icon: "mdi:chevron-down",
		},
		{
			question: "What are the divisions?",
			answer:
				"The competition is divided into a novice and advanced division. The novice division is for beginners, and the advanced division is for more experienced hackers.",
			icon: "mdi:chevron-down",
		},
		{
			question: "Do I need experience?",
			answer:
				"No! This competition is for people for all skill levels. Also, winners are determined by the writeup and number of flags.",
			icon: "mdi:chevron-down",
		},
		{
			question: "Are there prizes?",
			answer:
				"Yes! We had drones and GoPros last year. The top three in both the novice and advanced division win prizes.",
			icon: "mdi:chevron-down",
		},
		{
			question: "I have more questions!",
			answer:
				"Join our Discord server below and ask away! We'll be happy to answer any questions you have.",
			icon: "mdi:chevron-down",
		},
	];

	function toggleAnswer(event) {
		const question = event.currentTarget;
		const answer = question.nextElementSibling;
		if (answer) {
			answer.classList.toggle("hidden");
			// change the icon in the features array
			const questionText = question.textContent;
			const index = features.findIndex(
				(feature) => feature.question === questionText
			);
			const feature = features[index];
			if (feature.icon === "mdi:chevron-down") {
				feature.icon = "mdi:chevron-up";
			} else {
				feature.icon = "mdi:chevron-down";
			}
			features[index] = feature;
		}
	}
</script>

<span id="faq" class="font-heading font-semibold text-center">
	<span
		class="hidden md:block md:text-3xl lg:text-5xl border-x-8 border-dashed border-x-primary px-8"
	>
		Frequently Asked Questions
	</span>
	<span
		class="block md:hidden text-5xl border-x-8 border-dashed border-x-primary px-8"
	>
		FAQ
	</span>
</span>

<ul
	class="grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 w-full px-3 xs:px-16 md:px-8 text-center"
>
	{#each features as { question, answer, icon }}
		{#if question !== "What is a writeup?"}
			<li
				class="flex flex-col items-center gap-2 border md:border-4 md:border-double border-primary p-2 xs:p-4 rounded-md xs:rounded-lg"
			>
				<p
					class="relative w-full xs:text-lg font-medium xs:font-semibold font-heading tracking-tighter md:tracking-normal"
					on:click={toggleAnswer}
					on:keypress={toggleAnswer}
				>
					{question}
					<Icon
						class="md:hidden absolute top-1/2 -translate-y-1/2 -right-1 xs:-right-2 w-6 h-6"
						{icon}
					/>
				</p>
				<p class="hidden md:block text-offset text-sm">
					{answer}
				</p>
			</li>
		{:else}
			<li
				class="flex flex-col items-center gap-2 border md:border-4 md:border-double border-primary p-2 xs:p-4 rounded-md xs:rounded-lg"
			>
				<p
					class="w-full relative xs:text-lg font-medium xs:font-semibold font-heading tracking-tighter md:tracking-normal"
					on:click={toggleAnswer}
					on:keypress={toggleAnswer}
				>
					What is a writeup?
					<Icon
						class="md:hidden absolute -right-1 xs:-right-2 top-1/2 -translate-y-1/2 w-6 h-6"
						{icon}
					/>
				</p>
				<p class="hidden md:block font-light text-offset text-sm">
					A writeup is a collection of all the evidence and flags you have
					collected, and how you found them. Check out b1c's{" "}
					<a
						class="text-primary underline hover:decoration-wavy underline-offset-4"
						href="pdfs/b1c_HSFReport.pdf"
						>excellent writeup
					</a>
					for MCPS HSF 2023.
				</p>
			</li>
		{/if}
	{/each}
</ul>
