import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { Planet } from "./types";

export const usePlanets = () => {
    return useQuery<Planet[], AxiosError>({
        queryKey: ["planets"],
        queryFn: async () => (await axios.get<Planet[]>("https://swapi.info/api/planets")).data,
    });
};