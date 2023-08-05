import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/courses",
    }),

    singleCourse: builder.query({
      query: (id) => `/courses/${id}`,
    }),

    postCourse: builder.mutation({
      query: ({ data }) => ({
        url: `/courses/create-course`,
        method: "POST",
        body: data,
      }),
    }),

    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/courses/${id}`,
        method: "DELETE",
      }),
    }),

    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/courses/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    editCourse: builder.mutation({
      query: ({ id, data }) => ({
        url: `/courses/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useEditCourseMutation,
  usePostReviewMutation,
  usePostCourseMutation,
  useDeleteCourseMutation,
  useSingleCourseQuery,
} = productApi;
