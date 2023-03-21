import dayjs from "dayjs";
import { useMemo } from "react";

export const useDateFormatter = (date: string) => {
  return useMemo(() => dayjs(date).format("DD.MM.YYYY"), [date]);
};
