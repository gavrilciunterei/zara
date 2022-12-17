export const formatMillis = (millis) => {
  const duration = new Date(millis);

  return { minute: duration.getMinutes(), second: duration.getSeconds() };
};

export const formatDate = (dateToFormat) => {
  const date = new Date(dateToFormat);

  return date.toLocaleDateString("en-US");
};
