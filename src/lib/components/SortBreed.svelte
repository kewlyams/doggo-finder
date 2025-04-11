<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { getBreedSearch } from "$lib/services/getBreedSearch";

    let breedList: string[];
    let breedSelected: string;

    const getBreeds = () => {
        getBreedSearch().then((list:string[]) => {
            breedList = list;
        });   
    }

    getBreeds();

    const submitSort = () => {
        updateSearchParams();
    }

    const updateSearchParams = () => {
        const newSearchParams = new URLSearchParams($page.url.search);
        if (breedSelected) newSearchParams.set('breed', breedSelected);
        newSearchParams.set('from', '0');
        goto(`${$page.url.pathname}?${newSearchParams.toString()}`);
    }

    const handleURL = (search: string) => {
        const params = new URLSearchParams(search);
        breedSelected = params.get('breed') || "";
    };

    $: handleURL($page.url.search)

</script>


<form on:change={submitSort}>
    <label class="feature-label" for="sort-by">Breeds:</label>
    <select class="user-input" id="sort-by" bind:value={breedSelected}>
        {#each breedList as breed (breed)}
             <option value={breed}>
                {breed}
            </option>
        {/each}
    </select>
</form>


<style>

    form {
        margin: 1em;
        padding: 0;
        display: flex;
        flex-direction: column;
        width: 15em;
        height: 3em;
    }

    select {
        background-color: rgb(45, 42, 61);
        border: none;
        color: white;
        border-radius: 5%;
        height: 3em;
        width: 100%;
        align-self: center;
    }

    label {
        color: white;
    }

</style>