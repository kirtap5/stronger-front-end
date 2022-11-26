import React from "react";
import { colors } from "../../assets/colors";
import { DateDisplay } from "../../components/DateDisplay";
import { ClickEventType, StyleType } from "../../typescript/types/Types";

interface ExerciseInputModalProps {
  closeModal: (event: ClickEventType) => void;
}
export const ExersiceInputModal: React.FC<ExerciseInputModalProps> = ({
  closeModal,
}) => {
  return (
    <div style={styles.root} onClick={closeModal}>
      <div
        style={styles.container}
        onClick={(event: ClickEventType) => event.stopPropagation()}
      >
        <div style={styles.header}>
          <div style={styles.captionContainer}>
            <div>
              <h2 style={styles.caption}>Chest</h2>
              <b style={styles.highlight}>and</b>
            </div>
            <h2 style={styles.caption}>Triceps</h2>
          </div>
          <DateDisplay />
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
    width: "90%",
    height: "90%",
    backgroundColor: colors.white,
    borderRadius: "20px",
    margin: "auto",
    padding: "20px 0",
  },
  header: {
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
  },

  captionContainer: {
    maxWidth: "40%",
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
};
