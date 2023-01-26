import React, { useState } from "react";

import { ClickEventType, StyleType } from "../typescript/types/Types";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { dayNames, monthNames } from "../assets/consts";
import { colors } from "../assets/colors";

interface DatePickerProps {
  minDate: Date;
  maxDate: Date;
  passSelectedDate: (date: Date) => void;
}

const getNumberOfDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getSortedDays = (year: number, month: number) => {
  const dayIndex = new Date(year, month).getDay();
  const firstHalf = dayNames.slice(dayIndex);
  return [...firstHalf, ...dayNames.slice(0, dayIndex)];
};

const range = (start: number, end: number) => {
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

export const DatePicker: React.FC<DatePickerProps> = ({
  minDate,
  maxDate,
  passSelectedDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleSelection = (event: ClickEventType) => {
    // event delegation
    const day = (event.target as HTMLButtonElement).id;
    if (day) {
      const newDate = new Date(currentYear, currentMonth, parseInt(day));
      setSelectedDate(newDate);
      passSelectedDate(newDate);
    }
  };

  const getTimeFromState = (_day: number) => {
    return new Date(currentYear, currentMonth, _day).getTime();
  };
  return (
    <>
      <div style={styles.pickerWrapper}>
        <div style={styles.header}>
          <button
            onClick={prevMonth}
            style={styles.chevronButton}
            disabled={minDate?.getTime() > getTimeFromState(1)}
          >
            <CgChevronLeft size="20" style={styles.chevronIcon} />
          </button>

          <p style={styles.month}>
            {monthNames[currentMonth]} {currentYear}
          </p>
          <button
            onClick={nextMonth}
            style={styles.chevronButton}
            disabled={
              maxDate?.getTime() <
              getTimeFromState(
                getNumberOfDaysInMonth(currentYear, currentMonth)
              )
            }
          >
            <CgChevronRight size="20" style={styles.chevronIcon} />
          </button>
        </div>
        <div style={styles.body}>
          <div style={styles.sevenColGrid}>
            {getSortedDays(currentYear, currentMonth).map((day) => (
              <p key={day} style={styles.dayLabel}>
                {day}
              </p>
            ))}
          </div>
          <div style={styles.sevenColGrid} onClick={handleSelection}>
            {range(
              1,
              getNumberOfDaysInMonth(currentYear, currentMonth) + 1
            ).map((day) => (
              <button
                key={day}
                id={day}
                disabled={
                  minDate?.getTime() > getTimeFromState(day + 1) ||
                  maxDate?.getTime() < getTimeFromState(day)
                }
                style={
                  minDate?.getTime() > getTimeFromState(day + 1) ||
                  maxDate?.getTime() < getTimeFromState(day)
                    ? { ...styles.dayNode, ...styles.disabledDate }
                    : selectedDate.getFullYear() === currentYear &&
                      selectedDate.getMonth() === currentMonth &&
                      selectedDate.getDate() === day
                    ? { ...styles.dayNode, ...styles.active }
                    : { ...styles.dayNode }
                }
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const styles: StyleType = {
  pickerWrapper: {
    borderRadius: "7px",
    width: "320px",
    userSelect: "none",
    margin: "40px auto",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px",
    textAlign: "center",
  },
  chevronButton: {
    background: "none",
    border: "none",
  },
  chevronIcon: {
    cursor: "pointer",
  },
  month: {
    flex: "1 0 0",
  },
  body: {
    margin: "5px",
  },
  sevenColGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
  },
  dayLabel: {
    textAlign: "center",
    fontWeight: "bold",
  },
  dayNode: {
    all: "unset",
    height: "25px",
    margin: "0",
    padding: "10px",
    textAlign: "center",
  },
  active: {
    backgroundColor: colors.secondary,
    borderRadius: "100%",
    color: colors.white,
  },
  disabledDate: {
    color: colors.grey,
  },
};
