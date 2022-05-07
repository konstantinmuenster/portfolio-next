const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

/**
 * @param date (e.g. 2022/12/02)
 * @returns string (e.g. 02 December 2022)
 */

export const formatDate = (date: string) => {
  const parsedDate = new Date(date);

  let day = parsedDate.getDate().toString();
  if (day.length === 1) day = `0${day}`;

  const month = Months[parsedDate.getMonth()];
  const year = parsedDate.getFullYear();

  return `${day} ${month} ${year}`;
};
