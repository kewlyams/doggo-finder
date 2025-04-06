<script lang="ts">
    import Filter from "$lib/components/FilterBar.svelte";
    import DogList from "$lib/components/DogList.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import { getDogSearch } from "../../lib/utilities/getDogSearch";
    import { getDogSearchById } from "../../lib/utilities/getDogSearchById";
    import type { QueryParams } from "$lib/types/QueryParams";
    import { page } from "$app/stores";
    
    // let query_params: QueryParams = {
    //         breeds: [],
    //         ageMin: "0",
    //         ageMax: "",
    //         sort: "breed:asc",
    //         from: 0,
    //         size: 28,
    //         zipCodes: []
    // }

    // let dogIDs : string[];

    // const handleURL = (search: string) => {
    //     const params = new URLSearchParams(search);
    //     const sortBy= params.get("sort");
    //     const breed = params.get("breed");

    //     if(breed) {
    //         query_params.breeds = [breed];
    //         console.log(query_params.breeds);
    //     }

    //     console.log(sortBy);
    //     query_params.sort = sortBy || "";
    //     getDogs();
    // };

    // $: handleURL($page.url.search)
    

    // const getDogs = () => {
    //     getDogSearch(query_params).then((data) => {
    //         dogIDs = data.resultIds;
    //         getDogByID();
    //     })
    // }

    // const getDogByID = () => {
    //     getDogSearchById(dogIDs).then((data) => {
    //         console.log(data);
    //     });
    // }


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

