<script lang="ts">
    import { onMount } from "svelte";
    import { getDogMatch } from "$lib/services/getDogMatch";
    import { favorites } from "$lib/stores/favorites";
    import { getDogSearchById } from "$lib/services/getDogSearchById";
    import DogCard from "$lib/components/DogCard.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import type { Doggo } from "$lib/types/Dog";

    let dog : Doggo;
    $: dog;

    onMount(() => {
        getMatch();
    })

    const getMatch = () => {
        getDogMatch($favorites).then((data) => {
            getDogSearchById([data.match]).then((data) => {
                dog = data[0];
            })
        })
    }

</script>

{#if dog}
    <div class="matched-dog">
        <DogCard matched={1} dog={dog}></DogCard>
        <Button class=" mt-8 border 4 border-purple-500 hover:bg-purple-500" onclick={getMatch}>Get a different match</Button>
    </div>
{/if}

<style>
    .matched-dog{
        width: 100%;
        height: 75vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>