import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { Film } from "./types";

export const useFilm = (filmId: number) => {
    return useQuery<Film, AxiosError>({
        queryKey: ["film", filmId],
        queryFn: async () => (await axios.get<Film>(`https://swapi.info/api/films/${filmId}`)).data,
    });
};