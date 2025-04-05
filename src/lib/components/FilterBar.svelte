<script lang="ts">
    import { goto } from "$app/navigation";
    import SortDogs from "./SortDogs.svelte";
    import SortBreed from "./SortBreed.svelte";

    const reset = () => {
        goto('/home');
    }
</script>

<div class="filterbar">
    <h2>Sort By</h2>
    <SortDogs></SortDogs>
    <h2>Filter</h2>
    <SortBreed></SortBreed>

    <button onclick="{reset}">Reset</button>

</div>

<style>
    .filterbar{
        background-color: rgb(255, 255, 255);
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        height: 100vh;
        width: 22vw;
    }

    h2 {
        margin: 0;
        padding: 0;
    }
</style>