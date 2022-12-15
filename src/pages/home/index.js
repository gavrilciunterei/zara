import { useGetPodcastsQuery } from "../../store/podcast";

const Home = () => {
  const { data } = useGetPodcastsQuery();
  console.log("data", data);

  return <div>Home</div>;
};

export default Home;
