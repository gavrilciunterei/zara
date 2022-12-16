import { useGetPodcastsQuery } from "../../store/podcast";
import Spinner from "../../components/Spinner";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import TotalTab from "../../components/TotalTab";
const Home = () => {
  const { data, isFetching } = useGetPodcastsQuery();

  return (
    <>
      <div className="flex justify-end mr-5 items-center">
        <TotalTab text={data?.feed?.entry?.length} />
        <input
          type="text"
          name="name"
          placeholder="Filter podcasts"
          className="p-3 border rounded-lg w-80"
        />
      </div>
      {isFetching && <Spinner />}
      <CardList>
        {data?.feed?.entry?.map((podcast) => {
          return (
            <Card
              key={podcast?.id?.attributes["im:id"]}
              image={podcast["im:image"][2]?.label}
              title={podcast?.title?.label}
              artist={podcast["im:artist"]?.label}
            />
          );
        })}
      </CardList>
    </>
  );
};

export default Home;
