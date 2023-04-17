<script>
  import { scale, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  const gallery_items = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
  ];
  let indexes = [0, 1, 2];

  const nextVideo = () => {
    let temp = indexes.pop();
    indexes = [temp, ...indexes];
  };

  const prevVideo = () => {
    let temp = indexes.shift();
    indexes = [...indexes, temp];
  };
</script>

<div class="flex flex-row justify-center gap-5 pt-12 sm:pt-[5vw] relative">
  {#each [gallery_items[indexes[0]]] as item (indexes[0])}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
      class="w-5/12 rounded-lg absolute left-16 opacity-50"
      transition:fade={{ delay: 50, duration: 500, easing: quintOut }}
    >
      <source src={item} type="video/mp4" />
    </video>
  {/each}
  <!-- svelte-ignore a11y-media-has-caption -->
  {#each [gallery_items[indexes[2]]] as item (indexes[2])}
    <video
      class="w-5/12 rounded-lg absolute right-16 opacity-50"
      transition:fade={{ delay: 50, duration: 500, easing: quintOut }}
    >
      <source src={item} type="video/mp4" />
    </video>
  {/each}
  {#each [gallery_items[indexes[1]]] as item (indexes[1])}
  <!-- svelte-ignore a11y-media-has-caption -->
  <video
    class="w-[90%] sm:w-1/2 absolute rounded-lg translate-y-[-8.3333%] border border-1 border-highlight sm:border-none"
    transition:scale={{ delay: 50, duration: 300, easing: quintOut }}
    controls
    on:keydown={e => {
      if (e.key === "ArrowRight") {
        nextVideo();
      } else if (e.key === "ArrowLeft") {
        prevVideo();
      }
    }}
  >
    <source src={item} type="video/mp4" />
  </video>
{/each}
</div>

<div class="flex flex-row justify-center gap-3 mt-[44vw] sm:mt-[26vw]">
  <button aria-label="left" class="hover:text-primary" on:click={() => prevVideo()} on:keypress={() => prevVideo()}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-12" viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="m12 16l1.4-1.4l-1.6-1.6H16v-2h-4.2l1.6-1.6L12 8l-4 4l4 4Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      /></svg
    >
  </button>
  <button aria-label="right" class="hover:text-primary" on:click={() => nextVideo()} on:keypress={() => prevVideo()}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-12" viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      /></svg
    >
  </button>
</div>
