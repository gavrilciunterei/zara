import { useEffect, useState } from "react";
import { useGetPodcastsByIdQuery } from "../../../store/podcast";

const useFetchEpisodes = ({ id }) => {
  const { data, isFetching } = useGetPodcastsByIdQuery(id);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (data) {
      const { results } = data;
      const deleteFirstEpisode = results.slice(1);
      setEpisodes(deleteFirstEpisode);
    }
  }, [data]);

  return { isFetchingEpisodes: isFetching, episodes };
};

export default useFetchEpisodes;
