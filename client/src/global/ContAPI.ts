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
        getOne: builder.query<IContact, string>({
            query: (_id) => `/api/${_id}`,
            providesTags: ["Contact"],
        }),
        add: builder.mutation<{}, IContact>({
            query: (contact) => ({
                url: "/api",
                method: "POST",
                body: contact
            }),
            invalidatesTags: ["Contact"],
        }),
        update: builder.mutation<void, IContact>({
            query: ({ _id, ...contact }) => ({
                url: `/api/${_id}`,
                method: "PUT",
                body: contact
            }),
            invalidatesTags: ["Contact"],
        }),
        delete: builder.mutation<void, string>({
            query: (_id) => ({
                url: `/api/${_id}`,
                method: "DELETE"
            })
        }),
    })
});




