import { useEffect, useState } from "react";
import { useGetPodcastsByIdQuery } from "../../../store/podcast";

const useFetchEpisode = ({ episodeId, podcastId }) => {
  const { data, isFetching } = useGetPodcastsByIdQuery(podcastId);
  const [episode, setEpisode] = useState({
    episodeTitle: "",
    episodeDescription: "",
    episodeUrl: "",
  });

  useEffect(() => {
    if (!isFetching && data) {
      const { results } = data;
      const episodeFound = results.find(
        (episode) => `${episode.trackId}` === `${episodeId}`
      );

      if (episodeFound) {
        setEpisode({
          episodeTitle: episodeFound.trackName,
          episodeDescription: episodeFound.description,
          episodeUrl: episodeFound.episodeUrl,
        });
      }
    }
  }, [data]);

  return { isFetchingEpisode: isFetching, episode };
};

export default useFetchEpisode;
