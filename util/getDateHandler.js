import { format } from "date-fns";

export function getDateHandler(date) {
  const formattedDate = format(date, "dd/MM/yyyy");
  return formattedDate;
}
