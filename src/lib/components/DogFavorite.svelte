<script lang="ts">
    import {favorites, addFavorite, removeFavorite} from "$lib/stores/favorites";
    import type { Doggo } from "$lib/types/Dog";

    export let dog:Doggo

    const toggleFav = (dogID: string) => {
        $favorites.some((id) => id == dogID) ? removeFavorite(dogID) : addFavorite(dogID);
    }

    const checkFav = (dogID:string) => {
        return $favorites.some((id: string) => id == dogID);
    }

</script>

    <button 
        class={checkFav(dog.id) ? 'favorite' : 'not-favorite'} 
        onclick={() => toggleFav(dog.id)}>
        {checkFav(dog.id) ? '-' : '+'}
    </button>


<style>
    button {
        width: 100%;
        height: 100%;
        background-color: rgb(45, 42, 61);
        border: none;
        border-radius: 10px;
    }

    button:hover {
        background-color: #a46ede;
    }

    .favorite {
        color: rgb(255, 255, 255);
        cursor: pointer;
        font-weight: 900;
        background-color:#a46ede;
    }

    .not-favorite {
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
</style>