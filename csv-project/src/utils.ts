export const dateConverter = (stringDate: string): Date => {
  const [day, month, year] = stringDate
    .split("/")
    .map((value: string) => parseInt(value));

  return new Date(year, month - 1, day);
};
