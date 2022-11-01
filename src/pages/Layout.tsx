import { Outlet, NavLink } from "react-router-dom";
import CSS from "csstype";
import { BigRoundButton } from "../components/BigRoundButton";
import { AiOutlineHome } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { colors } from "../assets/colors";

interface LayoutProps {
  iconSize: number;
}

export const Layout = ({ iconSize }: LayoutProps) => {
  return (
    <>
      <nav style={navStyle}>
        <NavLink to="/" end>
          {({ isActive }) => (
            <AiOutlineHome
              size={iconSize}
              style={{
                color: isActive ? colors.primary : colors.black,
              }}
            />
          )}
        </NavLink>

        <NavLink to="/createWorkout">
          {({ isActive }) => <BigRoundButton disabled={isActive} />}
        </NavLink>

        <NavLink to="/statistics">
          {({ isActive }) => (
            <BsBarChart
              size={iconSize}
              style={{
                color: isActive ? colors.primary : colors.black,
              }}
            />
          )}
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

const navStyle: CSS.Properties = {
  position: "absolute",
  bottom: "0",
  width: "100%",
  height: "50px",
  boxShadow: `1px 1px 8px ${colors.grey}`,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const iconStyle: CSS.Properties = {
  color: colors.black,
};
