import React, { useState } from "react";

import { ClickEventType, StyleType } from "../../typescript/types/Types";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { dayNames, monthNames } from "../../assets/consts";
import { colors } from "../../assets/colors";
import {
  getNumberOfDaysInMonth,
  getSortedDays,
  getTimeFromState,
  getDaysInMonth,
  dateOutOfRange,
  checkDateMatch,
} from "./DatePickerService";

interface DatePickerProps {
  minDate: Date;
  maxDate: Date;
  passSelectedDate: (date: Date) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  minDate,
  maxDate,
  passSelectedDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const isMaxMonth =
    maxDate.getTime() <
    getTimeFromState(
      getNumberOfDaysInMonth(currentYear, currentMonth),
      currentYear,
      currentMonth
    );
  const isMinMonth =
    minDate?.getTime() > getTimeFromState(1, currentYear, currentMonth);

  const nextMonth = React.useCallback(() => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  }, [currentMonth]);

  const prevMonth = React.useCallback(() => {
    console.log("prevMonth running");

    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  }, [currentMonth]);

  const handleSelection = (event: ClickEventType) => {
    // event delegation
    const day = (event.target as HTMLButtonElement).id;
    if (day) {
      const newDate = new Date(currentYear, currentMonth, parseInt(day));
      setSelectedDate(newDate);
      passSelectedDate(newDate);
    }
  };

  const getDateNodeStyle = (day: number) => {
    let nodeStyle: React.CSSProperties = {};

    if (dateOutOfRange(minDate, maxDate, currentYear, currentMonth, day)) {
      nodeStyle = styles.disabledDate;
    } else if (checkDateMatch(selectedDate, currentYear, currentMonth, day)) {
      nodeStyle = styles.active;
    }
    return { ...styles.dayNode, ...nodeStyle };
  };

  return (
    <>
      <div style={styles.pickerWrapper}>
        <div style={styles.header}>
          <button
            onClick={prevMonth}
            style={styles.chevronButton}
            disabled={isMinMonth}
          >
            <CgChevronLeft size="20" style={styles.chevronIcon} />
          </button>

          <p style={styles.month}>
            {monthNames[currentMonth]} {currentYear}
          </p>
          <button
            onClick={nextMonth}
            style={styles.chevronButton}
            disabled={isMaxMonth}
          >
            <CgChevronRight size="20" style={styles.chevronIcon} />
          </button>
        </div>
        <div style={styles.body}>
          <div style={styles.sevenColGrid}>
            {getSortedDays(currentYear, currentMonth, dayNames).map((day) => (
              <p key={day} style={styles.dayLabel}>
                {day}
              </p>
            ))}
          </div>
          <div style={styles.sevenColGrid} onClick={handleSelection}>
            {getDaysInMonth(
              1,
              getNumberOfDaysInMonth(currentYear, currentMonth) + 1
            ).map((day) => (
              <button
                key={day}
                id={day}
                disabled={dateOutOfRange(
                  minDate,
                  maxDate,
                  currentYear,
                  currentMonth,
                  day
                )}
                style={getDateNodeStyle(day)}
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
