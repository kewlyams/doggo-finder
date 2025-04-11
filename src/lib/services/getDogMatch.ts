import { goto } from "$app/navigation";
import { auth } from "$lib/stores/auth";
import { resetFavorites } from "$lib/stores/favorites";
import { toast } from "svelte-sonner";
import { api } from "./api";

export const getDogMatch = (ids : string[]) => {
    return api()
    .post('/dogs/match', ids)
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