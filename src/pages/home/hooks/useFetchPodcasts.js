import { useEffect, useState } from "react";
import { useGetPodcastsQuery } from "../../../store/podcast";
import { searchData } from "../../../utils/searchData";

const useFetchPodcasts = () => {
  const { data, isFetching } = useGetPodcastsQuery();

  const [podcasts, setPodcasts] = useState([]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filtredData = searchData(data?.feed?.entry, value);
    setPodcasts(filtredData);
  };

  useEffect(() => {
    if (data) {
      setPodcasts(data?.feed?.entry);
    }
  }, [data]);

  return { data, isFetching, podcasts, handleOnSearch };
};

export default useFetchPodcasts;
