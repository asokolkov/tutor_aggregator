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

export const fullMonth = (date: Date) =>
  ('0' + (date.getMonth() + 1)).slice(-2);

export const fullDate = (date: Date) => ('0' + date.getDate()).slice(-2);

export const dayAndMonth = (date: Date) =>
  `${fullDate(date)}.${fullMonth(date)}`;
