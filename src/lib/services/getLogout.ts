import { goto } from "$app/navigation";
import { api } from "./api";
import { auth } from "$lib/stores/auth";
import { resetFavorites } from "$lib/stores/favorites";
import { toast } from "svelte-sonner";

export const logout = () => {
    return api()
    .post("/auth/logout")
    .then((res) => {
        auth.set("false");
        resetFavorites();
        goto("/login");
    })
    .catch((error) => {
        toast("Oops something went wrong: " + error.status);
        auth.set("false");
        resetFavorites();
        goto("/login");
    });
}