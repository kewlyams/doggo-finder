<script lang="ts">
    import type { Sort } from "$lib/types/Sort";

    import { page } from '$app/stores';
    import { goto } from "$app/navigation";


    let list_of_sorts: Sort[] = [
        {name: "Breed: Ascending", query: "breed:asc"},
        {name: "Breed: Descending", query: "breed:desc"},
        {name: "Name: Ascending", query: "name:desc"},
        {name: "Name: Descending", query: "name:asc"},
        {name: "Age: Old to Young", query: "age:desc"},
        {name: "Age: Yount to Old", query: "age:asc"},
    ]

    let sortBySelected: string;

    const submitSort = () => {
        updateSearchParams();
    }

    const updateSearchParams = () => {
        const newSearchParams = new URLSearchParams($page.url.search);
        if (sortBySelected) newSearchParams.set('sort', sortBySelected);

        goto(`${$page.url.pathname}?${newSearchParams.toString()}`);
    }

    //need to reset the select when reset button is hit.

</script>

<form on:change={submitSort}>
    <label class="feature-label" for="sort-by">Sort by:</label>
    <select class="user-input" id="sort-by" bind:value={sortBySelected}>
        {#each list_of_sorts as sort (sort)}
             <option value={sort.query}>
                {sort.name}
            </option>
        {/each}
    </select>
</form>


