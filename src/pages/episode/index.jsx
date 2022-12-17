import { useParams } from "react-router-dom";
import LeftTab from "../../components/LeftTab";
import Spinner from "../../components/Spinner";
import useFetchEpisode from "./hooks/useFetchEpisode";
import parse from "html-react-parser";

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
      <div className="bg-white shadow-lg p-4 max-w-2xl">
        <p className="font-bold mb-4">{episode.episodeTitle}</p>
        <p className="font-light italic mb-10">
          {parse(episode.episodeDescription)}
        </p>
        <audio src={episode.episodeUrl} controls className="w-full" />
      </div>
    </div>
  );
};

export default Episode;
