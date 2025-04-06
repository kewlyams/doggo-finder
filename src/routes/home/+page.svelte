<script lang="ts">
    import Filter from "$lib/components/FilterBar.svelte";
    import DogList from "$lib/components/DogList.svelte";

</script>

<div class="home">
    <Filter></Filter>
    <DogList></DogList>
</div>


<style>
    .home{
        display: flex;
        flex-direction: row;
        height: 125vh;
    }




</style>

