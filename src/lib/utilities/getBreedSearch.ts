import { goto } from "$app/navigation";
import { api } from "./api";

export const getBreedSearch = () => {

    return api()
        .get("/dogs/breeds")
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