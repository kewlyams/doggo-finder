<script lang="ts">
    import type { Doggo } from "$lib/types/Dog";
    import {favorites, addFavorite, removeFavorite} from "$lib/stores/favorites";

    export let dog:Doggo

    const toggleFav = (dogID: string) => {
        if($favorites.some((id) => id == dogID)){
            removeFavorite(dogID);
        } else {
            addFavorite(dogID);
        }
    }

    const checkFav = (dogID:string) => {
        return $favorites.some((id: string) => id == dogID);
    }

</script>

    <button 
        class={checkFav(dog.id) ? 'favorite' : 'not-favorite'} 
        onclick={() => toggleFav(dog.id)} aria-label="favorite button">
        {checkFav(dog.id) ? "remove from favories" : "add to favorites"}
    </button>


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
</style>