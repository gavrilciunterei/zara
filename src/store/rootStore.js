import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { createPodcastApi } from "./podcast";

export const store = configureStore({
  reducer: {
    [createPodcastApi.reducerPath]: createPodcastApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(createPodcastApi.middleware),
});
setupListeners(store.dispatch);
