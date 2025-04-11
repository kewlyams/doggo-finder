import { writable } from "svelte/store";

const stored = localStorage.getItem("favorites");
const init: string[] = stored ? JSON.parse(stored) : [];

export const favorites = writable(init);

favorites.subscribe((value) => localStorage.setItem("favorites", JSON.stringify(value)));

export const addFavorite = (value:string) => {
    favorites.update(list => [...list, value])
}

export const removeFavorite = (value:string) => {
    favorites.update(list => list.filter(str => str !== value));
}

export const resetFavorites = () => {
    favorites.set([]);
}

