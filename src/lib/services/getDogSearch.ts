import { api } from "./api";
import type { QueryParams } from "$lib/types/QueryParams";
import { goto } from "$app/navigation";
import { auth } from "$lib/stores/auth";
import { resetFavorites } from "$lib/stores/favorites";

export const getDogSearch = (query_params:QueryParams) => {
    return api()
    .get("/dogs/search", 
        {params: query_params,})
    .then((res) => {
        if(res.status = 200){
            return res.data;
        }
    })
    .catch((error) => {
        console.log(error)
        if (error.status = 401){
            auth.set("false");
            resetFavorites();
            goto("/login");
        }
    });
}