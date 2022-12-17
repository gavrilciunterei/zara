import { useParams } from "react-router-dom";

const Episode = () => {
  const { episodeId, podcastId } = useParams();

  return <div>Episode</div>;
};

export default Episode;
