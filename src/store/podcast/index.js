import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createPodcastApi = createApi({
  reducerPath: "podcast",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.allorigins.win/raw?url=https://itunes.apple.com",
  }),
  endpoints: (builder) => ({
    getPodcasts: builder.query({
      query: () => "/us/rss/toppodcasts/limit=100/genre=1310/json",
    }),
    getPodcastsById: builder.query({
      query: (id) => `/lookup?id=${id}`,
    }),
  }),
  refetchOnMountOrArgChange: 86400,
});

export const { useGetPodcastsQuery, useGetPodcastsByIdQuery } =
  createPodcastApi;
