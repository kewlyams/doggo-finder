<script lang="ts">
    import DogFavorite from "./DogFavorite.svelte";
    import type { Doggo } from "../types/Dog";

    export let dog: Doggo;
    export let matched: number;

</script>

<div class="dog">
    <img alt="picture of a {dog.breed}" class="card-img" src={dog.img}>
        <div class="dog-info" >
            <p id="name">{dog.name}</p>
            <p id="breed">{dog.breed}</p>
            <p id="age"><b>Age: </b>{dog.age}</p>
            <p id="zip"><b>Zipcode: </b>{dog.zip_code}</p>
        </div>

    {#if !matched}
    <DogFavorite dog={dog}></DogFavorite>
    {/if}   
</div>

<style>
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

    .dog {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
        border-radius: 3%;
        margin: 1em;
        height: 405px;
        width: 255px;
        text-align: center;
        min-width: 0;
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