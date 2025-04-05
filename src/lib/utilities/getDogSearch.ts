import { api } from "./api";
import type { QueryParams } from "$lib/types/QueryParams";
import { goto } from "$app/navigation";

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
            goto("/");
        }
    });
}