<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
  
    let current_page = 1;
    let from_value = 0;
    let last_from = 0;

    export let totalDogs = 0;

    const goNextPage = () => {
        if((from_value + 30) < totalDogs){
            from_value = from_value + 30;
            updateSearchParams();
        }
    }

    const goLastPage = () => {
        last_from = totalDogs - (totalDogs % 30);
        from_value = last_from;
        updateSearchParams();
    }

    const goPrevPage = () => {
        if((from_value) > 1){
            from_value = from_value - 30;
            updateSearchParams();
        }
    }

    const goFirstPage = () => {
        from_value= 0;
        updateSearchParams();
    }

    const updateSearchParams = () => {
        const newSearchParams = new URLSearchParams($page.url.search);
        newSearchParams.set('from', from_value.toString());

        goto(`${$page.url.pathname}?${newSearchParams.toString()}`);
    }

    const handleURL = (search: string) => {
        const params = new URLSearchParams(search);
        const from = params.get("from");

        current_page = ((Number(from) / 30) | 0) + 1;

    };

    $: handleURL($page.url.search)

</script>

<div class="navigation">
    <button on:click={goFirstPage}>&lt&lt</button>
    <button on:click={goPrevPage}>&lt</button>
    <p>{current_page}</p>
    <button on:click={goNextPage}>&gt</button>
    <button on:click={goLastPage}>&gt&gt</button>
</div>

<style>

    .navigation {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
    }

    button {
        height: 3em;
        width: 3em;
        color: white;
        background-color: rgb(18, 18, 26);
        border: none;
    }

    p {
        color: white;
        margin: 1em;
    }

</style>