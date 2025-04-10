import { goto } from "$app/navigation";
import { api } from "./api";
import { auth } from "$lib/stores/auth";
import { resetFavorites } from "$lib/stores/favorites";

export const getDogSearchById = (ids: string[]) => {
    return api()
    .post("/dogs", ids)
    .then((res) => {
        if(res.status = 200){
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