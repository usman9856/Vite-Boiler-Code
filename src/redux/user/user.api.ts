// src/redux/user/user.api.ts
import { apiService } from "../api";

export const userApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    fetchUserName: builder.query<{ name: string }, void>({
      query: () => `/user/name`,
      providesTags: ["User"],
      keepUnusedDataFor: 60,
    }),
  }),
  overrideExisting: false,
});

export const { useFetchUserNameQuery } = userApi;
