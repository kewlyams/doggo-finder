<script lang="ts">
    import type { Sort } from "$lib/types/Sort";

    import { page } from '$app/stores';
    import { goto } from "$app/navigation";

    let sortBySelected: string;

    let list_of_sorts: Sort[] = [
        {name: "Breed: Ascending", query: "breed:asc"},
        {name: "Breed: Descending", query: "breed:desc"},
        {name: "Name: Ascending", query: "name:asc"},
        {name: "Name: Descending", query: "name:desc"},
        {name: "Age: Old to Young", query: "age:desc"},
        {name: "Age: Young to Old", query: "age:asc"},
    ]

    const submitSort = () => {
        updateSearchParams();
    }

    //this is reusable, move
    const updateSearchParams = () => {
        const newSearchParams = new URLSearchParams($page.url.search);
        if (sortBySelected) newSearchParams.set('sort', sortBySelected);
        newSearchParams.set('from', "0");

        goto(`${$page.url.pathname}?${newSearchParams.toString()}`);
    }

    const handleURL = (search: string) => {
        const params = new URLSearchParams(search);
        sortBySelected = params.get("sort") || "breed:asc";
    };

    $: handleURL($page.url.search)
    
</script>

<form on:change={submitSort}>
    <label class="feature-label" for="sort-by">Sort By:</label>
    <select class="user-input" id="sort-by" bind:value={sortBySelected}>
        {#each list_of_sorts as sort (sort)}
             <option value={sort.query}>
                {sort.name}
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

