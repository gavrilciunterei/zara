import { useParams } from "react-router-dom";
import LeftTab from "../../components/LeftTab";
import Spinner from "../../components/Spinner";
import EpisodeHeader from "./components/episode";
import TableComponent from "./components/table";
import useFetchEpisodes from "./hooks/useFetchEpisodes";

const Podcast = () => {
  const { podcastId } = useParams();
  const { episodes, isFetchingEpisodes } = useFetchEpisodes({ id: podcastId });

  return (
    <div className="flex flex-row p-4 justify-between">
      <LeftTab podcastId={podcastId} />
      <div>
        {isFetchingEpisodes && <Spinner />}
        <EpisodeHeader total={episodes.length} />
        <TableComponent episodes={episodes} />
      </div>
    </div>
  );
};

export default Podcast;
