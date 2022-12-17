import { useParams } from "react-router-dom";
import LeftTab from "../../components/LeftTab";
import Spinner from "../../components/Spinner";
import EpisodeHeader from "./components/episode";
import TableComponent from "./components/table";
import useFetchEpisodes from "./hooks/useFetchEpisodes";
import useFetchPodcast from "./hooks/useFetchPodcast";

const Podcast = () => {
  const { id } = useParams();
  const { episodes, isFetchingEpisodes } = useFetchEpisodes({ id });
  const { podcast, isFetchingPodcast } = useFetchPodcast({ id });

  return (
    <div className="flex flex-row p-4  justify-between">
      <div className="bg-white shadow-lg flex mr-20 p-4 flex-col max-w-xs h-max rounded-sm">
        {isFetchingPodcast ? (
          <Spinner />
        ) : (
          <LeftTab
            image={podcast?.image}
            title={podcast?.title}
            artist={podcast?.artist}
            description={podcast?.description}
          />
        )}
      </div>
      <div>
        {isFetchingEpisodes && <Spinner />}
        <EpisodeHeader total={episodes.length} />
        <TableComponent episodes={episodes} />
      </div>
    </div>
  );
};

export default Podcast;
