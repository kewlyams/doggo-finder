<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { getBreedSearch } from "$lib/services/getBreedSearch";

    let list_of_all_breeds: string[];
    let breedSelected: string;

    const getBreeds = () => {
        getBreedSearch().then((list:string[]) => {
            list_of_all_breeds = list;
        });   
    }

    getBreeds();

    const submitSort = () => {
        updateSearchParams();
    }

    const updateSearchParams = () => {
        const newSearchParams = new URLSearchParams($page.url.search);
        if (breedSelected) newSearchParams.set('breed', breedSelected);
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
        {#each list_of_all_breeds as breed (breed)}
             <option value={breed}>
                {breed}
            </option>
        {/each}
    </select>
</form>


<style>

    form {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        width: 90%;
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