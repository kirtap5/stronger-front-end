import React from "react";
import { colors } from "../../assets/colors";
import { StyleType } from "../../typescript/types/Types";
import { IoIosCheckmark } from "react-icons/io";

interface MuscleCardProps {
  id: string;
  key: Number;
  highlightColor: string;
  caption: string;
  path: string;
  isActive: Boolean;
}

export const MuscleCard: React.FC<MuscleCardProps> = ({
  id,
  path,
  caption,
  highlightColor,
  isActive,
}) => {
  return (
    <div
      id={id}
      style={{
        ...styles.root,
        border: `1px solid ${isActive ? highlightColor : colors.black}`,
      }}
    >
      <img
        id={id}
        src={path}
        alt="img not found"
        style={styles.illustration}
      ></img>
      <h3
        id={id}
        style={{
          ...styles.caption,
          color: isActive ? highlightColor : colors.black,
        }}
      >
        {caption}
      </h3>
      {isActive ? (
        <IoIosCheckmark
          style={{ ...styles.checkmark, color: highlightColor }}
        />
      ) : null}
    </div>
  );
};

const styles: StyleType = {
  root: {
    minWidth: "150px",
    minHeight: "90px",
    maxWidth: "170px",
    maxHeight: "100px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "baseline",
    padding: "10px 0px 0px 5px",
    position: "relative",
  },
  illustration: {
    minWidth: "70px",
    minHeight: "70px",
    maxWidth: "80px",
    maxHeight: "80px",
  },
  caption: {
    marginBottom: "10px",
    marginRight: "10px",
    textTransform: "capitalize",
  },
  checkmark: {
    width: "30px",
    height: "40px",
    position: "absolute",
    top: "0",
    right: "10px",
  },
};
