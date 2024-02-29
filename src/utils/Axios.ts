import axios from "axios"
import React from "react";

interface AxiosProps {
    method: string;
    url: string,
    data: any
}

export const AxiosGet: React.FC<AxiosProps> = async ({method, url, data}) => {
    return (
        await axios({
            method: method,
            url: `${url}/${data !== null ? data : ''}`
        })
            .then(async (response: any) => {
                return await response.data.data;
            })
            .catch((error: any) => {
                return error;
            })
    )
}