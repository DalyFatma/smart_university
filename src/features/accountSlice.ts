import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "app/store";

export interface UserResponse {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
}
export interface Account {
  accessToken: string,
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
}

export interface LoginRequest {
  login: string;
  password: string;
}

export const accountSlice = createApi({
  reducerPath: "account",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users/1",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState)?.auth?.user!;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Account"],
  endpoints(builder) {
    return {
      login: builder.mutation<UserResponse, LoginRequest>({
        query: (credentials) => ({
          url: "/loginSchool",
          method: "POST",
          body: credentials,
        }),
      }),
    //   updateAccount: builder.mutation<void, Account>({
    //     query: ({ idCompte, ...rest }) => ({
    //       url: `editUser/${idCompte}`,
    //       method: "PATCH",
    //       body: rest,
    //     }),
    //     invalidatesTags: ["Account"],
    //   }),
    //   deleteCompte: builder.mutation<void, number>({
    //     query: (idCompte) => ({
    //       url: `removeUser/${idCompte}`,
    //       method: "DELETE",
    //     }),
    //     invalidatesTags: ["Account"],a
    //   }),
    };
  },
});

export const {
//   useUpdateAccountMutation,
  useLoginMutation,
//   useDeleteCompteMutation,
} = accountSlice;
