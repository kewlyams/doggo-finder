import { goto } from "$app/navigation";
import { api } from "./api";
import { auth } from "$lib/stores/auth";
import {resetFavorites} from "$lib/stores/favorites";
import { toast } from "svelte-sonner";

export const getBreedSearch = () => {
    return api()
    .get("/dogs/breeds")
    .then((res) => {
        return res.data;
    })
    .catch((error) => {
        (error.status == 401) ? toast("401: Unauthorized") : toast("Oops something went wrong: " + error.status);
        
        auth.set("false");
        resetFavorites();
        goto("/login");
    });
}