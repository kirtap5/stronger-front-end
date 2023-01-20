import React from "react";
import { colors } from "../../assets/colors";
import { ClickEventType, StyleType } from "../../typescript/types/Types";
import { DateDisplay } from "../../components/DateDisplay";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface SelectDateModalProps {
  closeModal: (event: ClickEventType) => void;
}
export const SelectDateModal: React.FC<SelectDateModalProps> = ({
  closeModal,
}) => {
  const exercises = useSelector((state: RootState) => state.workout.categories);
  console.log(exercises);
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
    height: "90%",
    backgroundColor: colors.white,
    borderRadius: "20px",
    margin: "auto",
    padding: "20px",
  },
  header: {
    marginTop: "30px",
    margin: "auto",
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
};
