import { useParams } from "react-router-dom";
import LeftTab from "../../components/LeftTab";
import Spinner from "../../components/Spinner";
import EpisodeInfo from "./components/episodeInfo";
import useFetchEpisode from "./hooks/useFetchEpisode";

const Episode = () => {
  const { episodeId, podcastId } = useParams();
  const { episode, isFetchingEpisode } = useFetchEpisode({
    episodeId,
    podcastId,
  });

  return (
    <div className="flex flex-row p-4 justify-between">
      <LeftTab podcastId={podcastId} />
      {isFetchingEpisode && <Spinner />}
      <EpisodeInfo
        title={episode.episodeTitle}
        description={episode.episodeDescription}
        url={episode.episodeUrl}
      />
    </div>
  );
};

export default Episode;
