import useFetchPodcast from "./hooks/useFetchPodcast";
import Spinner from "../Spinner";
import { useNavigate, useParams } from "react-router-dom";

const LeftTab = ({ podcastId }) => {
  const { podcast, isFetchingPodcast } = useFetchPodcast({ id: podcastId });
  const { episodeId } = useParams();
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (!episodeId) return;
    navigate(`/podcast/${podcastId}`);
  };

  return isFetchingPodcast ? (
    <Spinner />
  ) : (
    <div className="bg-white shadow-lg flex mr-20 p-4 flex-col max-w-xs h-max rounded-sm">
      <div className="flex justify-center">
        <img
          onClick={handleOnClick}
          src={podcast.image}
          alt={podcast.title}
          className={`w-40 h-40 shadow-md rounded-lg ${
            episodeId && "cursor-pointer"
          }`}
        />
      </div>
      <hr className="h-px border-0 dark:bg-gray-200 mt-2 mb-4" />
      <p
        className={`font-bold ${episodeId && "cursor-pointer"}`}
        onClick={handleOnClick}
      >
        {podcast.title}
      </p>
      <p className="text-gray-500">{podcast.artist}</p>
      <hr className="h-px border-0 dark:bg-gray-200 mt-2 mb-4" />
      <p className="font-bold">Description:</p>
      <p className="text-gray-500">{podcast.description}</p>
    </div>
  );
};

export default LeftTab;
