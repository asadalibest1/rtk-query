import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['List'],
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({ url: '/', method: "POST" }),
            //   query: (name) => `pokemon/${name}`,
            providesTags: (result, error, arg) =>
            result
              ? [...result.map(({ id }) => ({ type: 'List', id })), 'List']
              : ['List'],
        }),
        addPost: builder.mutation({
            query: (newData) => ({
                url: '/post',
                method: "POST",
                body: newData,
                headers: {
                    'Content-Type': 'application/json'
                  },
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'List', id: arg.id }],
            //   query: (name) => `pokemon/${name}`,
        }),
        DeletePost: builder.mutation({
            query: (id) => ({ 
                url: `/delete/${id}`,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'List', id: arg.id }],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostQuery, useAddPostMutation, useDeletePostMutation  } = postApi;