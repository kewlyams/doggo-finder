<script lang="ts">
    import { goto } from "$app/navigation";
    import SortDogs from "./SortDogs.svelte";
    import SortBreed from "./SortBreed.svelte";

    const reset = () => {
        goto('/home');

    }

</script>

<div class="filterbar">
    <div class="filteritems">
        <h2>Sort By</h2>
        <SortDogs></SortDogs>
        <h2>Filter</h2>
        <SortBreed></SortBreed>
    </div>


    <div class = "buttons">
        <button onclick="{reset}">Reset</button>
    </div>


</div>

<style>
    .filterbar{
        background-color: rgb(26, 26, 37);
        height: 100vh;
        width: 15vw;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }

    .filteritems {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: auto;
        flex-grow: 1;
        
    }

    .buttons{
        width: 100%;
        height: 8em;
        margin-top: auto;
    }

    h2 {
        margin: 0;
        padding: 0;
        color:white;
        margin-top: 1em;
    }

    button {
        width: 100%;
        height: 3em;
        background-color: rgb(45, 42, 61);
        color: white;
        border: none;
    }

    button:hover {
        background-color: rgb(33, 32, 46);
    }

    @media(max-width: 1200px) {
        .filterbar{
            display: none;
        }
    }
</style>