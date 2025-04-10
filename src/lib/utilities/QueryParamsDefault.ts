import type { QueryParams } from "$lib/types/QueryParams"

export const QueryParamsDefault: QueryParams = {
    breeds: [],
    ageMin: "0",
    ageMax: "",
    sort: "breed:asc",
    from: 0,
    size: 30,
    zipCodes: []
}