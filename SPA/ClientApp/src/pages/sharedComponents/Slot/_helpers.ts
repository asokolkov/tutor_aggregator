export const getTimeFromDate = (dateString: string) => {
  if (!dateString) return '00:00';
  const date = new Date(dateString);
  return `${date.getHours()}:${date.getMinutes()}`;
};

export const russianDayOfTheWeekByIndex = (date: Date) => {
  const map = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];
  return map[date.getDay()];
};

const fullMonth = (date: Date) => ('0' + (date.getMonth() + 1)).slice(-2);

const fullDate = (date: Date) => ('0' + date.getDate()).slice(-2);

export const dayAndMonth = (date: Date) =>
  `${fullDate(date)}.${fullMonth(date)}`;

export const dateShift = (date: Date, index: number) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + index);
  return newDate;
};
