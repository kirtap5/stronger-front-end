import React, { useState } from "react";
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
  const [over, setOver] = useState(false);
  return (
    <button
      style={{
        ...styles.root,
        transform: over ? "scale(0.9)" : "scale(1)",
      }}
      onClick={handleClick}
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      <b>{value}</b>
    </button>
  );
};

const styles: StyleType = {
  root: {
    width: "170px",
    height: "50px",
    padding: "2px",
    border: "none",
    borderRadius: "12px",
    color: colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    backgroundColor: colors.primary,
  },
};
