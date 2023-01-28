import React from "react";

export const getOneYearFromNow = () => {
  const date = new Date();
  date.setFullYear(new Date().getFullYear() + 1);
  return date;
};

export const getNumberOfDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getSortedDays = (
  year: number,
  month: number,
  dayNames: string[]
) => {
  const dayIndex = new Date(year, month).getDay();
  const firstHalf = dayNames.slice(dayIndex);
  return [...firstHalf, ...dayNames.slice(0, dayIndex)];
};

export const getDaysInMonth = (start: number, end: number) => {
  const length = Math.abs((end - start) / 1);
  const { result } = Array.from({ length }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: start }
  );

  return result;
};

export const getTimeFromState = (
  day: number,
  currentYear: number,
  currentMonth: number
) => {
  return new Date(currentYear, currentMonth, day).getTime();
};

export const dateOutOfRange = (
  minDate: Date,
  maxDate: Date,
  currentYear: number,
  currentMonth: number,
  day: number
) => {
  const dateOutOfMinRange =
    minDate.getTime() > getTimeFromState(day + 1, currentYear, currentMonth);
  const dateOutOfMaxRange =
    maxDate.getTime() < getTimeFromState(day, currentYear, currentMonth);
  return dateOutOfMinRange || dateOutOfMaxRange ? true : false;
};

export const checkDateMatch = (
  selectedDate: Date,
  currentYear: number,
  currentMonth: number,
  day: number
) => {
  return selectedDate.getFullYear() === currentYear &&
    selectedDate.getMonth() === currentMonth &&
    selectedDate.getDate() === day
    ? true
    : false;
};
