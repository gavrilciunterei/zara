import { useParams } from "react-router-dom";

const Podcast = () => {
  const { id } = useParams();

  return <div>Podcast</div>;
};

export default Podcast;
