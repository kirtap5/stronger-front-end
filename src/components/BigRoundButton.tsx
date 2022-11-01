import { colors } from "../assets/colors";
import { TfiPlus } from "react-icons/tfi";
import { IconContext } from "react-icons";

interface BigRoundButtonProps {
  disabled: Boolean;
}

export const BigRoundButton = ({ disabled }: BigRoundButtonProps) => {
  return (
    <div
      style={{
        width: "75px",
        height: "75px",
        borderRadius: "50%",
        backgroundColor: disabled ? colors.grey : colors.primary,
        transform: "translateY(-25px)",
        position: "relative",
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
