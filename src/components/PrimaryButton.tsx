import React from "react";
import { colors } from "../assets/colors";
import { ClickEventType, StyleType } from "../typescript/types/Types";

interface PrimaryButtonProps {
  value: string;
}

const handleClick = (event: ClickEventType) => {
  //TODO: insert click logic here.
  console.log("clicked!");
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ value }) => {
  return (
    <div style={styles.root} onClick={handleClick}>
      <h5>{value}</h5>
    </div>
  );
};

const styles: StyleType = {
  root: {
    width: "170px",
    height: "50px",
    padding: "2px",
    borderRadius: "12px",
    backgroundColor: colors.primary,
    color: colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
};
