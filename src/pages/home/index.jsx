import Spinner from "../../components/Spinner";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import useFetchPodcasts from "./hooks/useFetchPodcasts";
import SearchBar from "./components/search";

const Home = () => {
  const { data, isFetching, podcasts, handleOnSearch } = useFetchPodcasts();

  return (
    <>
      <SearchBar
        total={data?.feed?.entry?.length}
        handleOnSearch={handleOnSearch}
      />
      {isFetching && <Spinner />}
      <CardList>
        {podcasts?.map((podcast) => {
          return (
            <Card
              key={podcast?.id?.attributes["im:id"]}
              image={podcast["im:image"][2]?.label}
              title={podcast?.title?.label}
              artist={podcast["im:artist"]?.label}
              id={podcast?.id?.attributes["im:id"]}
            />
          );
        })}
      </CardList>
    </>
  );
};

export default Home;
