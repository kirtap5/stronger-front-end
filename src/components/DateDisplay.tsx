import React from "react";
import { colors } from "../assets/colors";
import { StyleType } from "../typescript/types/Types";

// TODO: implement a date library
const date = new Date();
const day = date.toLocaleString("en-GB", { day: "numeric" });
const month = date.toLocaleString("en-GB", { month: "short" });

export const DateDisplay = () => {
  return (
    <div style={styles.root}>
      {month}
      <h1 style={styles.date}>{day}</h1>
    </div>
  );
};

const styles: StyleType = {
  root: {
    margin: "auto 0",
    borderLeft: `1px solid ${colors.lightGrey}`,
    paddingLeft: "20px",
  },
  date: {
    margin: "0",
  },
};
