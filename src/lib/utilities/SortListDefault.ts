import type { Sort } from "$lib/types/Sort";

export const SortListDefault: Sort[] = [
    {name: "Breed: Ascending", query: "breed:asc"},
    {name: "Breed: Descending", query: "breed:desc"},
    {name: "Name: Ascending", query: "name:asc"},
    {name: "Name: Descending", query: "name:desc"},
    {name: "Age: Old to Young", query: "age:desc"},
    {name: "Age: Young to Old", query: "age:asc"},
];