import React from "react";
import { CgChevronLeft } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import { StyleType } from "../typescript/types/Types";
import { colors } from "../assets/colors";

export const HeaderSection = () => {
  // TODO: implement a date library
  const date = new Date();
  const day = date.toLocaleString("en-GB", { day: "numeric" });
  const month = date.toLocaleString("en-GB", { month: "short" });

  return (
    <div style={styles.root}>
      <div style={styles.iconContainer}>
        <CgChevronLeft size="40" />
        <BsThreeDots size="40" />
      </div>
      <div style={styles.contentContainer}>
        <h2 style={styles.textContainer}>
          What are <span style={styles.highlight}>you</span> training today?
        </h2>
        <div style={styles.dateContainer}>
          {month}
          <h1 style={styles.date}>{day}</h1>
        </div>
      </div>
    </div>
  );
};

const styles: StyleType = {
  root: {},
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: " 20px auto",
  },
  contentContainer: {
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
  },
  textContainer: {
    maxWidth: "50%",
  },
  highlight: {
    color: colors.primary,
  },
  dateContainer: {
    margin: "auto 0",
    borderLeft: `1px solid ${colors.lightGrey}`,
    paddingLeft: "20px",
  },
  date: {
    margin: "0",
  },
};
