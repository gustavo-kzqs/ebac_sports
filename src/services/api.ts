import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const Api = createApi({
  baseQuery: fetchBaseQuery({
    PegaProduto: builder.query<Produto[], void>({
      baseUrl: 'https://fake-api-tau.vercel.app/api'
    }),
    endpoints: (builder) => ({
      PegaProduto: builder.query<Produto[], void>({
        query: () => 'ebac-sports',
      }),
    }),
  }),
})

export const { useGetProductQuery } = Api
export default Api
