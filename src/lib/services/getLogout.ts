import { goto } from "$app/navigation";
import { api } from "./api";
import { auth } from "$lib/stores/auth";
import { resetFavorites } from "$lib/stores/favorites";

export const logout = () => {
    return api()
    .post("/auth/logout")
    .then((res) => {
        if(res.status == 200){
            auth.set("false");
            resetFavorites();
            goto("/login");
        }
    })
    .catch((error) => {
        
    });
}