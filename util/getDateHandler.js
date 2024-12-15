import { format } from "date-fns";

export function getDateHandler(date) {
  const formattedDate = format(date, "dd/MM/yyyy");
  return formattedDate;
}


export function getMinusDate(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}  