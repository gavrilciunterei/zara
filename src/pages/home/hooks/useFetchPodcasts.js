import { useEffect, useState } from "react";
import { useGetPodcastsQuery } from "../../../store/podcast";

const useFetchPodcasts = () => {
  const { data, isFetching } = useGetPodcastsQuery();

  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    if (data) {
      setPodcasts(data?.feed?.entry);
    }
  }, [data]);

  return { data, isFetching, podcasts, setPodcasts };
};

export default useFetchPodcasts;
