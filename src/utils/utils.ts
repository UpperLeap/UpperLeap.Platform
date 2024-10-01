import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeCounter(
  dateStr: string | undefined,
  isFuture?: boolean,
): {
  amount: string;
  duration: string;
} {
  if (!dateStr) return { amount: "", duration: "" };

  const givenDate = new Date(dateStr);
  const currentDate = new Date();

  const diffInMilliseconds = isFuture
    ? givenDate.getTime() - currentDate.getTime()
    : currentDate.getTime() - givenDate.getTime();

  const minutes = Math.floor(diffInMilliseconds / (1000 * 60));
  const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7));
  const months = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));

  if (years > 0) {
    return { amount: years.toString(), duration: "years" };
  } else if (months > 0) {
    return { amount: months.toString(), duration: "months" };
  } else if (weeks > 0) {
    return { amount: weeks.toString(), duration: "weeks" };
  } else if (days > 0) {
    return { amount: days.toString(), duration: "days" };
  } else if (hours > 0) {
    return { amount: hours.toString(), duration: "hours" };
  } else if (minutes > 0) {
    return { amount: minutes.toString(), duration: "minutes" };
  } else {
    const seconds = Math.floor(diffInMilliseconds / 1000);
    return { amount: seconds.toString(), duration: "seconds" };
  }
}

export function formatDate(
  dateString: string,
  locale: string = "en-US",
): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString(locale, options);

  const day = date.getDate();
  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) suffix = "st";
  else if (day === 2 || day === 22) suffix = "nd";
  else if (day === 3 || day === 23) suffix = "rd";

  return formattedDate.replace(/\d+/, day + suffix);
}
