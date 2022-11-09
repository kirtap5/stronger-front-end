import React from "react";
import { colors } from "../../assets/colors";
import { StyleType } from "../../typescript/types/Types";
import { BiPlus } from "react-icons/bi";
export const NewExerciseCard = () => {
  return (
    <button style={styles.root}>
      <div style={styles.topContainer}>
        <small style={styles.highlightText}>Select</small>
        <small style={styles.date}>3:17 PM</small>
      </div>
      <div style={styles.bottomContainer}>
        <b style={styles.caption}>Select a new exersice...</b>

        <BiPlus size={35} />
      </div>
    </button>
  );
};

const styles: StyleType = {
  root: {
    backgroundColor: colors.lightGrey,
    margin: " 200px auto",
    width: "350px",
    height: "200px",
    border: "none",
    borderRadius: "10px",
    padding: "15px 15px",
    display: "flex",
    alignItems: "start",
    flexWrap: "wrap",
    alignContent: "space-between",
  },
  topContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  highlightText: {
    color: colors.secondary,
  },
  caption: {
    marginTop: "10px",
    color: colors.black,
  },
  date: {
    color: colors.grey,
  },
};
