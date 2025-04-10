import { writable } from "svelte/store";

const stored = localStorage.getItem("auth");

export const auth = writable(stored || "False");

auth.subscribe((value) => localStorage.setItem("auth", value));