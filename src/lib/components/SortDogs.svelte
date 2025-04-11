<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from "$app/navigation";
    import { SortListDefault } from "$lib/constants/SortListDefault";

    let sortBySelected: string;
    const sortList = SortListDefault;

    const submitSort = () => {
        updateSearchParams();
    }

    const updateSearchParams = () => {
        const newSearchParams = new URLSearchParams($page.url.search);
        if (sortBySelected) newSearchParams.set('sort', sortBySelected)
        newSearchParams.set('from', '0');
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
        {#each sortList as sort (sort)}
             <option value={sort.query}>
                {sort.name}
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

