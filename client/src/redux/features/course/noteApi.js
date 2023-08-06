import { api } from "../../api/apiSlice";

const noteApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getnotes: builder.query({
      query: () => "/notes",
    }),

    singlenote: builder.query({
      query: (id) => `/notes/${id}`,
    }),

    postnote: builder.mutation({
      query: ({ data }) => ({
        url: `/notes/create-note`,
        method: "POST",
        body: data,
      }),
    }),

    deletenote: builder.mutation({
      query: (id) => ({
        url: `/notes/${id}`,
        method: "DELETE",
      }),
    }),

    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/notes/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
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
  usePostReviewMutation,
  usePostnoteMutation,
  useDeletenoteMutation,
  useSinglenoteQuery,
} = noteApi;
