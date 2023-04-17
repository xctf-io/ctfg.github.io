<script>
    import { fade } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    let index = 0;
    const increaseIndex = () => {
        index = (index + 1) % 6;
    };
    setInterval(increaseIndex, 5000);
    const images = [
        "images/hsf1.jpg",
        "images/hsf2.jpg",
        "images/hsf3.jpg",
        "images/hsf4.jpg",
        "images/hsf5.jpg",
        "images/hsf6.jpg",
    ];
</script>

{#each [images[index]] as item (index)}
    <img
        id="hsf"
        class="object-cover rounded-2xl w-0 sm:w-1/3"
        in:fade = {{ duration: 1000, easing: quintOut }}
        src={item}
        alt="People at MCPS HSF"
    />
{/each}

<style>
    #hsf {
        transition: all 0.5s ease;
    }
    #hsf:hover {
        transform: scale(1.05);
    }
</style>

