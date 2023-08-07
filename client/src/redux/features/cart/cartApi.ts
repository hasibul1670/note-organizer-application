/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "../../api/apiSlice";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getcart: builder.query({
      query: (email) => `/cart/${email}`,
    }),

    createCart: builder.mutation({
      query: ({ data }) => ({
        url: `/cart/create-cart`,
        method: "POST",
        body: data,
      }),
    }),

    deleteWish: builder.mutation({
      query: ({ email, cartItemId }) => ({
        url: "/cart",
        method: "DELETE",
        body: { email: email, cartItemId: cartItemId },
      }),
    }),

    updateCart: builder.mutation({
      query: ({ email,enrolled }) => ({
        url: `/cart/update`,
        method: "PATCH",
        body: {
          enrolled: enrolled,
          email: email,
        },
      }),
    }),
  }),
});


export const {
  useCreateCartMutation,
  useDeleteWishMutation,
  useGetcartQuery,
  useUpdateCartMutation,
} = cartApi;
