<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    export let fromValue: number;
    export let totalDogs = 0;

    const goNextPage = () => {
        if((fromValue + 30) < totalDogs){
            fromValue = fromValue + 30;
            updateSearchParams();
        }
    }

    const updateSearchParams = () => {
        const newSearchParams = new URLSearchParams($page.url.search);
        newSearchParams.set('from', fromValue.toString());
        goto(`${$page.url.pathname}?${newSearchParams.toString()}`);
    }

</script>

    <button on:click={goNextPage}>&gt</button>

<style>
    button {
        height: 3em;
        width: 3em;
        color: white;
        background-color: rgb(18, 18, 26);
        border: none;
    }

    button:hover {
        color: #a46ede;
    }
</style>