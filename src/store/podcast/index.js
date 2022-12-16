import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createPodcastApi = createApi({
  reducerPath: "podcast",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cors-anywhere.herokuapp.com/https://itunes.apple.com",
  }),
  endpoints: (builder) => ({
    getPodcasts: builder.query({
      query: () => "/us/rss/toppodcasts/limit=100/genre=1310/json",
    }),
    getPodcastsById: builder.query({
      query: (id) =>
        `/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=100`,
    }),
  }),
  refetchOnMountOrArgChange: 86400,
});

export const { useGetPodcastsQuery, useGetPodcastsByIdQuery } =
  createPodcastApi;
