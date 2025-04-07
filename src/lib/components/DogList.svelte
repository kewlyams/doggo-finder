<script lang="ts">
    import { page } from "$app/stores";
    import { getDogSearch } from "$lib/utilities/getDogSearch";
    import { getDogSearchById } from "$lib/utilities/getDogSearchById";
    import Pagination from "./Pagination.svelte";
    import type { QueryParams } from "$lib/types/QueryParams";
    import type { Doggo } from "$lib/types/Dog";
    import { goto } from "$app/navigation";

    let dogIDs : string[];
    let doggos : Doggo[]
    let list_of_favorites: Doggo[] = [];
    let totalDogs: number;

    let query_params: QueryParams = {
            breeds: [],
            ageMin: "0",
            ageMax: "",
            sort: "breed:asc",
            from: 0,
            size: 30,
            zipCodes: []
    }

    $: list_of_favorites;


    //file is long; need to split it up 

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


    // need to store somewhere better so it does not reset on refresh
    const addFavorite = (dog: Doggo) => {
        list_of_favorites = [...list_of_favorites, dog];
        console.log(list_of_favorites);
    }

    const removeFavorite = (dog: Doggo) => {
        list_of_favorites = list_of_favorites.filter((doggo) => doggo.id != dog.id);
        console.log(list_of_favorites);
    }

    const toggleFav = (dog:Doggo) => {


        if(list_of_favorites.some(({id}) => id == dog.id)){
            console.log("unchecked");
            removeFavorite(dog);
        } else {
            console.log("checked");
            addFavorite(dog);
        }
       
    }

    const checkFav = (dog:Doggo) => {
        return list_of_favorites.some(({id}) => id == dog.id);
    }

    //still need to match dog
    //and clean up css

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

                <button 
                class={checkFav(dog) ? 'favorite' : 'not-favorite'} 
                onclick={() => toggleFav(dog)} aria-label="favorite button">
                    {checkFav(dog) ? "remove from favories" : "add to favorites"}
                </button>
           
            </div>
        {/each}
    </div>
    
    <div class = "nav">
        <Pagination totalDogs="{totalDogs}"></Pagination>
    </div>
</div>

<style>

    button {
        width: 100%;
        height: 2em;
        background-color: rgb(45, 42, 61);
        border: none;
        border-radius: 3%;
    }

    button:hover {
        background-color: rgb(33, 32, 46);
    }

    .favorite {
        color: rgb(167, 20, 20);
        cursor: pointer;
        font-weight: 900;
    }

    .not-favorite {
        color: rgb(153, 153, 153);
        cursor: pointer;
    }

    .nav {
        margin: 2em;
    }

     #name {
        font-size: larger;
        font-weight: bold;
        color:rgb(203, 203, 203)
    }

    #breed {
        margin-bottom: 1em;
    }

    #zip {
        margin-bottom: .5em;
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
        height: 405px;
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

</style>