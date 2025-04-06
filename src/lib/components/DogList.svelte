<script lang="ts">
    import { page } from "$app/stores";
    import { getDogSearch } from "$lib/utilities/getDogSearch";
    import { getDogSearchById } from "$lib/utilities/getDogSearchById";
    import Pagination from "./Pagination.svelte";
    import type { QueryParams } from "$lib/types/QueryParams";
    import type { Doggo } from "$lib/types/Dog";
    import { goto } from "$app/navigation";

    let query_params: QueryParams = {
            breeds: [],
            ageMin: "0",
            ageMax: "",
            sort: "breed:asc",
            from: 0,
            size: 30,
            zipCodes: []
    }

    let dogIDs : string[];
    let doggos : Doggo[]

    let totalDogs: number;

    const handleURL = (search: string) => {
        const params = new URLSearchParams(search);
        const sortBy= params.get("sort");
        const breed = params.get("breed");
        const from = params.get('from');

        if(breed) {
            query_params.breeds = [breed];
        } else {
            query_params.breeds = [];
        }

        query_params.from = Number(from) || 0;
        query_params.sort = sortBy || "breed:asc";
        getDogs();
    };

    $: handleURL($page.url.search)
    
    const getDogs = () => {
        getDogSearch(query_params).then((data) => {
            totalDogs = data.total;
            dogIDs = data.resultIds;
            getDogByID();
        })
    }

    const getDogByID = () => {
        getDogSearchById(dogIDs).then((data) => {
            doggos = data;
        });
    }
</script>

<div class = "doglist">
    <div class="dog-container">
        {#each doggos as dog (dog)}
            <div class="dog">
                <img alt="picture of a {dog.breed}" class="card-img" src={dog.img}>
                <div class="dog-info" >
                    <p id="name">{dog.name}</p>
                    <p id="breed">{dog.breed}</p>
                    <p id="age"><b>Age: </b>{dog.age}</p>
                    <p id="zip"><b>Zipcode: </b>{dog.zip_code}</p>
                </div>
            </div>
        {/each}
    </div>
    
    <div class = "nav">
        <Pagination totalDogs="{totalDogs}"></Pagination>
    </div>
</div>

<style>

    .nav {
        margin: 2em;
    }

     #name {
        font-size: larger;
        font-weight: bold;
        color:rgb(203, 203, 203)
    }

    #breed {
        margin-bottom: 1.5em;
    }

    p {
        margin: 0;
        padding: 0;
        color: rgb(212, 212, 212);
    }

    b {
        font-weight: bold;
    }

    .doglist {
        width: 100%;
        height: 75%;
        overflow-y:auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dog-container {
        display: flex;
        flex-wrap: wrap;
        margin-left: 0;
        margin-right: 0;
    }

    .dog {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
        border-radius: 3%;
        margin: 1em;
        height: 400px;
        width: 300px;
        text-align: center;
        flex: 1;   
        background-color: rgb(35, 35, 48);
    }
    
    .dog:hover {
        box-shadow: rgba(0, 0, 0, 0.585) 0px 3px 8px;
    }

    .dog-info {
        text-align: center;
        margin-top:1em;
    }

    .card-img {
        object-fit: cover;
        width: 230px;
        height: 230px;
        margin-top: 1em;
        padding: .5em;
        margin-left: auto;
        margin-right: auto;
        display: block;
        border-radius: 5%;
    }

    @media(max-width: 1100px){
        .dog-container{
            /* margin-left: 15%; */
        }
    }

</style>