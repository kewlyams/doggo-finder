<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    export let from_value: number;

    const goPrevPage = () => {
        if((from_value) > 1){
            from_value = from_value - 30;
            updateSearchParams();
        }
    }

    const updateSearchParams = () => {
        const newSearchParams = new URLSearchParams($page.url.search);
        newSearchParams.set('from', from_value.toString());

        goto(`${$page.url.pathname}?${newSearchParams.toString()}`);
    }

</script>

<button on:click={goPrevPage}>&lt</button>

<style>
    button {
        height: 3em;
        width: 3em;
        color: white;
        background-color: rgb(18, 18, 26);
        border: none;
    }
</style>