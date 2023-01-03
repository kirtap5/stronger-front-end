import React, { useState } from "react";
import { colors } from "../../assets/colors";
import { StyleType } from "../../typescript/types/Types";
import { IoIosCheckmark } from "react-icons/io";

interface MuscleCardProps {
  highlightColor: string;
  caption: string;
  path: string;
}

export const MuscleCard: React.FC<MuscleCardProps> = ({
  path,
  caption,
  highlightColor,
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      style={{
        ...styles.root,
        border: `1px solid ${isActive ? highlightColor : colors.black}`,
      }}
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        setIsActive(!isActive)
      }
    >
      <img src={path} alt="img not found" style={styles.illustration}></img>
      <h3
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
