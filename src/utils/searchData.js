export const searchData = (data, value) => {
  if (value) {
    const filteredPodcasts = data?.filter((podcast) => {
      return (
        podcast?.title?.label?.toLowerCase().includes(value.toLowerCase()) ||
        podcast["im:artist"]?.label?.toLowerCase().includes(value.toLowerCase())
      );
    });
    return filteredPodcasts;
  } else {
    return data;
  }
};
