import React, { useState } from "react";
import { colors } from "../assets/colors";
import { ClickEventType, StyleType } from "../typescript/types/Types";

interface PrimaryButtonProps {
  value: string;
  handleClick: (event: ClickEventType) => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  value,
  handleClick,
}) => {
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
    marginBottom: "100px",
  },
};
