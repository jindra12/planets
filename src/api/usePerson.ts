import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { Person } from "./types";

export const usePerson = (personId: number) => {
    return useQuery<Person, AxiosError>({
        queryKey: ["person", personId],
        queryFn: async () => (await axios.get<Person>(`https://swapi.info/api/people/${personId}`)).data,
    });
};