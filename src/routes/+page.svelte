<script lang="ts">
    import { auth } from "$lib/stores/auth";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { getDogSearch } from "$lib/services/getDogSearch";
    import { getDogSearchById } from "$lib/services/getDogSearchById";
    import { QueryParamsDefault} from "$lib/constants/QueryParamsDefault"

    import SortDogs from "$lib/components/SortDogs.svelte";
    import Options from "$lib/components/Options.svelte";
    import DogCard from "$lib/components/DogCard.svelte";
    import SortBreed from "$lib/components/SortBreed.svelte";
    import FirstPage from "$lib/components/Navigation/FirstPage.svelte";
    import PrevPage from "$lib/components/Navigation/PrevPage.svelte";
    import NextPage from "$lib/components/Navigation/NextPage.svelte";
    import LastPage from "$lib/components/Navigation/LastPage.svelte";

    import type { Doggo } from "$lib/types/Dog";
    import Button from "$lib/components/ui/button/button.svelte";

    let doggos : Doggo[];
    let totalDogs: number = 0;
    let currentPage: number = 0;
    let fromValue: number = 0;
    $: fromValue;
    $: currentPage;

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

        fromValue = Number(from);
        currentPage = ((Number(from) / 30) | 0) + 1;

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

    <div class="filter-bar">
        <div class="filter-items">
            <SortDogs></SortDogs>
            <SortBreed></SortBreed>
        </div>
        <div class="navigation"></div>
        <div class = "option-buttons">
            <Options></Options>
        </div>
    </div>
    <div class="dog-list">
        {#each doggos as dog (dog)}
            <DogCard matched={0} dog={dog}></DogCard>
        {/each}
    </div>
    <div class="nav-bar">
        <FirstPage bind:fromValue={fromValue}></FirstPage>
        <PrevPage bind:fromValue={fromValue}></PrevPage>
        <p>{currentPage}</p>
        <NextPage bind:fromValue={fromValue} totalDogs={totalDogs}></NextPage>
        <LastPage bind:fromValue={fromValue} totalDogs={totalDogs}></LastPage>
    </div>   
</div>

<style>

    p {
        color: white;
        margin: 1em;
    }

    .home {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .dog-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;   
        overflow-y: scroll;
        padding-bottom: 8em;
    }

    .nav-bar {
        position: fixed;
        background-color: rgb(18, 18, 26);
        overflow: hidden;
        z-index: 1;
        height: 50px;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center; 
    }

    .filter-bar {
        background-color: rgb(26, 26, 37);
        height: 5em;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;    
    }

    .filter-items {
        display: flex;
        flex-direction: row;
        margin-right: 6em;
        margin-left: 2em;
    }

    .navigation {
        margin-top: 20em;
    }

    .option-buttons {
        margin-left: auto;
        display: flex;
        align-items: center;
        margin-right: 2em;
    }

    @media(max-width: 910px) {
        .filter-bar{
            display: none;
        }
    }
</style>
