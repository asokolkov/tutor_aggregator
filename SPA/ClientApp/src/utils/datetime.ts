export const getTimeFromDate = (date: Date) =>
  `${fullHours(date)}:${fullMinutes(date)}`;

export const getDayAndMonthFromDate = (date: Date) =>
  `${fullDate(date)}.${fullMonth(date)}`;

export const getShiftedDate = (date: Date, shift: number) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + shift);
  return newDate;
};

export const russianDayOfTheWeek = (date: Date) => {
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

const fullHours = (date: Date) => ('0' + date.getHours()).slice(-2);
const fullMinutes = (date: Date) => ('0' + date.getMinutes()).slice(-2);
