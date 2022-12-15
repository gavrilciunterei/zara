import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const initialState = {
  podcasts: [],
};

export const createPodcastApi = createApi({
  reducerPath: "podcast",
  baseQuery: fetchBaseQuery({ baseUrl: "https://itunes.apple.com" }),
  endpoints: (builder) => ({
    getPodcasts: builder.query({
      query: () => "/us/rss/toppodcasts/limit=100/genre=1310/json",
    }),
  }),
  refetchOnMountOrArgChange: 10000,
});

export const { useGetPodcastsQuery } = createPodcastApi;
