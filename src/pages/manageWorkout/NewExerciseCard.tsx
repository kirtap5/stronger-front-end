import React from "react";
import { colors } from "../../assets/colors";
import { ClickEventType, StyleType } from "../../typescript/types/Types";
import { BiPlus } from "react-icons/bi";

interface NewExerciseCardProps {
  handleClick: (event: ClickEventType) => void;
}
export const NewExerciseCard: React.FC<NewExerciseCardProps> = ({
  handleClick,
}) => {
  return (
    <button style={styles.root} onClick={handleClick}>
      <small style={styles.highlightText}>Select</small>
      <small style={styles.date}>3:17 PM</small>
      <b style={styles.caption}>Select a new exersice...</b>

      <BiPlus size={35} style={styles.icon} />
    </button>
  );
};

const styles: StyleType = {
  root: {
    backgroundColor: colors.lightGrey,
    margin: "auto",
    width: "350px",
    height: "80px",
    border: "none",
    borderRadius: "10px",
    padding: "10px 15px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    alignItems: "center",
    rowGap: "5px",
  },
  highlightText: {
    color: colors.secondary,
    justifySelf: "baseline",
  },
  caption: {
    color: colors.black,
    justifySelf: "baseline",
  },
  date: {
    color: colors.grey,
    justifySelf: "flex-end",
  },
  icon: {
    justifySelf: "flex-end",
  },
};
