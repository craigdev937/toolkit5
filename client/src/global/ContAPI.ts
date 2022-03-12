import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContact } from "../models/Interfaces";

const URL = "http://localhost:9000";
export const ContAPI = createApi({
    reducerPath: "ContAPI",
    tagTypes: ["Contact"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        fetchAll: builder.query<IContact[], void>({
            query: () => "/api",
            providesTags: ["Contact"],
        }),
    })
});




