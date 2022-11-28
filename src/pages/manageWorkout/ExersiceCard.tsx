import React from "react";
import { colors } from "../../assets/colors";
import { StyleType } from "../../typescript/types/Types";

interface ExerciseCardProps {
  group: string;
  name: string;
  value: number;
}
export const ExersiceCard: React.FC<ExerciseCardProps> = ({
  group,
  name,
  value,
}) => {
  return (
    <button style={styles.root}>
      <small style={styles.highlightText}>{group}</small>
      <small style={styles.date}>3:17 PM</small>
      <b style={styles.caption}>{name}</b>

      <span style={styles.valueContainer}>
        <h2 style={styles.value}>{value}</h2>kg
      </span>
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
    rowGap: "10px",
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
  value: {
    margin: "0px",
    marginRight: "5px",
    display: "inline-block",
  },
  valueContainer: {
    justifySelf: "flex-end",
  },
};
