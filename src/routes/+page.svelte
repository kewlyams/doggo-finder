<script lang="ts">
    import DogCard from "$lib/components/DogCard.svelte";
    import SortBreed from "$lib/components/SortBreed.svelte";

    import { auth } from "$lib/stores/auth";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { getDogSearch } from "$lib/services/getDogSearch";
    import { getDogSearchById } from "$lib/services/getDogSearchById";
    import SortDogs from "$lib/components/SortDogs.svelte";
    import Options from "$lib/components/Options.svelte";
    import Pagination from "$lib/components/Pagination.svelte";

    import {QueryParamsDefault} from "$lib/utilities/QueryParamsDefault"
    import type { Doggo } from "$lib/types/Dog";

    let doggos : Doggo[]
    let totalDogs: number = 0;

    let query_params = QueryParamsDefault;

    onMount(() => {
        if($auth == "false"){
            goto('/login');
        }
    });

    const handleURL = (search: string) => {
        const params = new URLSearchParams(search);
        const sortBy= params.get("sort");
        const breed = params.get("breed");
        const from = params.get('from');

        query_params.breeds = breed ? [breed] : [];
        query_params.from = Number(from) || 0;
        query_params.sort = sortBy || "breed:asc";
        getDogs();
    };

    $: handleURL($page.url.search)
    
    const getDogs = () => {
        getDogSearch(query_params).then((data) => {
            totalDogs = data.total;
            getDogSearchById(data.resultIds).then((data) => {
                doggos = data;
            });
        })
    }
</script>

<div class="home">

    <div class="filterbar">
        <div class="filteritems">
            <h2>Sort By</h2>
            <SortDogs></SortDogs>
            <h2>Filter</h2>
            <SortBreed></SortBreed>
        </div>
    
        <div class = "option-buttons">
            <Options></Options>
        </div>
    
    </div>

    <div class="dog-results">
        <div class="dog-list">
            {#each doggos as dog (dog)}
                <DogCard matched={0} dog={dog}></DogCard>
            {/each}
        </div>

        <div class="navigation">
            <Pagination totalDogs={totalDogs}></Pagination>
        </div>
    </div>
    
</div>

<style>
    .home{
        display: flex;
        flex-direction: row;
        height: 125vh;
    }

    .dog-results{
        width: 100%;
        height: 75%;
        overflow-y:scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dog-list {
        display: flex;
        flex-wrap: wrap;
    }

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

    .option-buttons{
        width: 100%;
        height: 10em;
        margin-bottom: 5em;
        margin-top: auto;
    }

    h2 {
        margin: 0;
        padding: 0;
        color:white;
        margin-top: 1em;
    }

    @media(max-width: 1200px) {
        .filterbar{
            display: none;
        }
    }
</style>
