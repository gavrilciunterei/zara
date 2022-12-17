import { useEffect, useState } from "react";
import { useGetPodcastsQuery } from "../../../store/podcast";

const useFetchPodcast = ({ id }) => {
  const { data, isFetching } = useGetPodcastsQuery();
  const [podcast, setPodcast] = useState({
    id: "",
    image: "",
    title: "",
    artist: "",
    description: "",
  });

  useEffect(() => {
    if (!isFetching && data) {
      data?.feed?.entry.find((item) => {
        if (item.id.attributes["im:id"] === id) {
          setPodcast({
            id: item.id.attributes["im:id"],
            image: item["im:image"][2].label,
            title: item["im:name"].label,
            artist: item["im:artist"].label,
            description: item.summary.label,
          });
        }
      });
    }
  }, [data]);

  return { podcast, isFetchingPodcast: isFetching };
};

export default useFetchPodcast;
