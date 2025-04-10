import { goto } from "$app/navigation";
import { auth } from "$lib/stores/auth";
import { resetFavorites } from "$lib/stores/favorites";
import { api } from "./api";

export const getDogMatch = (ids : string[]) => {
    return api()
    .post('/dogs/match', ids)
    .then((res) => {
        if(res.status = 200) {
            return res.data;
        }
    })
    .catch((error) => {
        if (error.status = 401){
            auth.set("false");
            resetFavorites();
            goto("/login");
        }
    });
}