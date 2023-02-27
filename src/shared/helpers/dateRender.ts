export const renderDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const validateDate = (value: number): string => `0${value}`;
  return ((day < 10 ? validateDate(day) : day) + '.' + (month < 10 ? validateDate(month) : month) + '.' + date.getFullYear());
};