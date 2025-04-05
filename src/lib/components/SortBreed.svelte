<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    //should I be using store to manange search params?

    import { getBreedSearch } from "$lib/utilities/getBreedSearch";

    let list_of_all_breeds: string[];

    const getBreeds = () => {
        getBreedSearch().then((list:string[]) => {
            list_of_all_breeds = list;
        });   
    }

    getBreeds();

    let breedSelected: string;

    const submitSort = () => {
        updateSearchParams();
    }

    const updateSearchParams = () => {
        const newSearchParams = new URLSearchParams($page.url.search);
        if (breedSelected) newSearchParams.set('breed', breedSelected);

        goto(`${$page.url.pathname}?${newSearchParams.toString()}`);
    }

</script>


<form on:change={submitSort}>
    <label class="feature-label" for="sort-by">Sort by:</label>
    <select class="user-input" id="sort-by" bind:value={breedSelected}>
        {#each list_of_all_breeds as breed (breed)}
             <option value={breed}>
                {breed}
            </option>
        {/each}
    </select>
</form>