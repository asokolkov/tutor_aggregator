export const getTimeFromDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getHours()}:${date.getMinutes()}`;
};
