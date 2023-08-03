
import { api } from "./../../api/apiSlice";


const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/",
    }),

    singleProduct: builder.query({
      query: (id) => `/${id}`,
    }),




  }),
});

export const {
  useGetProductsQuery,

  useSingleProductQuery,
} = productApi;
