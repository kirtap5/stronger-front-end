import React from "react";
import { CgChevronLeft } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import { StyleType } from "../typescript/types/Types";
import { colors } from "../assets/colors";
import { DateDisplay } from "./DateDisplay";

interface HeaderSectionProps {
  starter: string;
  highlight: string;
  ending: string;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  starter,
  highlight,
  ending,
}) => {
  console.log("first");
  return (
    <div style={styles.root}>
      <div style={styles.iconContainer}>
        <CgChevronLeft size="40" />
        <BsThreeDots size="40" />
      </div>
      <div style={styles.contentContainer}>
        <h2 style={styles.textContainer}>
          {starter} <span style={styles.highlight}>{highlight}</span> {ending}
        </h2>
        <DateDisplay />
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
};
