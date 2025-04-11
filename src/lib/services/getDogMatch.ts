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
        if (error.status == 400) {
            toast("Oops! You have no favorites...");
            goto("/");
        } else if(error.status == 401 || error){
            toast("401: Unauthorized");
            auth.set("false");
            resetFavorites();
            goto("/login");
        }
    });
}