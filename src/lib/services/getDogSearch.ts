import { api } from "./api";
import { goto } from "$app/navigation";
import { auth } from "$lib/stores/auth";
import { resetFavorites } from "$lib/stores/favorites";
import { toast } from "svelte-sonner";
import type { QueryParams } from "$lib/types/QueryParams";

export const getDogSearch = (query_params:QueryParams) => {
    return api()
    .get("/dogs/search", 
        {params: query_params,})
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