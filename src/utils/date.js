export const formatMillis = (millis) => {
  if (!millis) return "00:00:00";
  const duration = new Date(millis).toISOString().slice(11, 19);
  return duration;
};

export const formatDate = (dateToFormat) => {
  const date = new Date(dateToFormat);

  return date.toLocaleDateString("en-US");
};
