import React from "react";
import { colors } from "../assets/colors";
import { TfiPlus } from "react-icons/tfi";
import { IconContext } from "react-icons";

interface BigRoundButtonProps {
  disabled: Boolean;
}

interface name {
  [key: string]: React.CSSProperties;
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    transform: "translateY(-25px)",
    position: "relative",
  },
};

export const BigRoundButton: React.FC<BigRoundButtonProps> = ({ disabled }) => {
  return (
    <div
      style={{
        ...styles.root,
        backgroundColor: disabled ? colors.grey : colors.primary,
      }}
    >
      <IconContext.Provider
        value={{
          color: colors.white,
          size: "35px",
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div>
          <TfiPlus />
        </div>
      </IconContext.Provider>
    </div>
  );
};
