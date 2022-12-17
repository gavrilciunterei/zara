import Spinner from "../../components/Spinner";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import TotalTab from "../../components/TotalTab";
import useFetchPodcasts from "./hooks/useFetchPodcasts";
import { searchData } from "../../utils/searchData";

const Home = () => {
  const { data, isFetching, podcasts, setPodcasts } = useFetchPodcasts();

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filtredData = searchData(data?.feed?.entry, value);
    setPodcasts(filtredData);
  };

  return (
    <>
      <div className="flex justify-end mr-5 items-center">
        <TotalTab text={data?.feed?.entry?.length} />
        <input
          type="text"
          name="name"
          placeholder="Filter podcasts"
          className="p-3 border rounded-lg w-80"
          onChange={handleOnSearch}
        />
      </div>
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
