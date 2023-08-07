import { api } from "../../api/apiSlice";

const noteApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getnotes: builder.query({
      query: () => "/note",
    }),

    singlenote: builder.query({
      query: (id) => `/note/${id}`,
    }),

    postNote: builder.mutation({
      query: ({ data }) => ({
        url: `/note/create-note`,
        method: "POST",
        body: data,
      }),
    }),

    deleteNote: builder.mutation({
      query: (id) => ({
        url: `/note/${id}`,
        method: "DELETE",
      }),
    }),

    editNote: builder.mutation({
      query: ({ id, data, headers }) => ({
        url: `note/${id}`,
        method: "PATCH",
        body: data,
        headers: headers,
      }),
    }),
  }),
});

export const {
  useGetnotesQuery,
  useEditNoteMutation,
  usePostNoteMutation,
  useDeleteNoteMutation,
  useSinglenoteQuery,
} = noteApi;
