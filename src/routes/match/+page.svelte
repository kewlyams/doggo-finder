<script lang="ts">
    import DogCard from "$lib/components/DogCard.svelte";
    import { onMount } from "svelte";
    import { getDogMatch } from "$lib/services/getDogMatch";
    import { favorites } from "$lib/stores/favorites";
    import { getDogSearchById } from "$lib/services/getDogSearchById";
    import type { Doggo } from "$lib/types/Dog";

    let dog : Doggo ;
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
    </div>
{/if}

<style>
    .matched-dog{
        width: 100%;
        height: 75vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>