import React, { useState, useEffect } from "react";
import { colors } from "../../assets/colors";
import { ClickEventType, StyleType } from "../../typescript/types/Types";
import { DateDisplay } from "../../components/DateDisplay";
import { DatePicker } from "../../components/DatePicker";
import { PrimaryButton } from "../../components/PrimaryButton";

interface SelectDateModalProps {
  closeModal: () => void;
  passSelectedDate: (date: Date) => void;
}

export const SelectDateModal: React.FC<SelectDateModalProps> = ({
  closeModal,
  passSelectedDate,
}) => {
  const maxDate = new Date();
  maxDate.setFullYear(new Date().getFullYear() + 1);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleSelectedDate = (date: Date) => {
    setSelectedDate(date);
  };

  const handleConfirm = (event: ClickEventType) => {
    passSelectedDate(selectedDate);
    closeModal();
  };

  return (
    <div style={styles.root} onClick={closeModal}>
      <div
        style={styles.container}
        onClick={(event: ClickEventType) => event.stopPropagation()}
      >
        <div style={styles.header}>
          <div style={styles.captionContainer}>
            <h2 style={styles.caption}>
              When is
              <span style={styles.highlight}>your</span>
              <br />
              Workout ?
            </h2>
          </div>
          <DateDisplay />
        </div>

        <DatePicker
          minDate={new Date()}
          maxDate={maxDate}
          passSelectedDate={handleSelectedDate}
        />
        <div style={styles.buttonContainer}>
          <PrimaryButton value="Confirm" handleClick={handleConfirm} />
        </div>
      </div>
    </div>
  );
};

const styles: StyleType = {
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: colors.backDrop,
    display: "flex",
    justifyContent: "center",
    zIndex: "2",
  },
  container: {
    width: "80%",
    height: "80%",
    backgroundColor: colors.white,
    borderRadius: "20px",
    margin: "auto",
    padding: "20px",
    position: "relative",
  },
  header: {
    margin: " 40px auto",
    display: "flex",
    justifyContent: "space-around",
  },

  captionContainer: {
    maxWidth: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  caption: {
    display: "inline-block",
    margin: "0",
  },

  highlight: {
    color: colors.primary,
    marginLeft: "10px",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "80px",
    left: "50%",
    transform: "translateX(-50%)",
  },
};
