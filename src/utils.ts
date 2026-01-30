import { ResultStatusType } from "antd/es/result";

export const convertStatusCode = (status?: number): ResultStatusType => {
    if (status === 403 || status === 404 || status === 500) {
        return status;
    }
    return "error";
};

const getIdFromUrl = (url: string) => {
    const regex = /\/(?<id>\d+)$/ui;
    const match = url.match(regex);
    return match?.groups!.id;
};

export const getPersonUrl = (apiUrl: string) => `/person/${getIdFromUrl(apiUrl)}`;

export const getFilmUrl = (apiUrl: string) => `/film/${getIdFromUrl(apiUrl)}`;
