import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { BigRoundButton } from "../components/BigRoundButton";
import { AiOutlineHome } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { colors } from "../assets/colors";
import { StyleType } from "../typescript/types/Types";

interface LayoutProps {
  iconSize: number;
}

export const Layout: React.FC<LayoutProps> = ({ iconSize }) => {
  return (
    <>
      <nav style={styles.root}>
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

const styles: StyleType = {
  root: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "50px",
    boxShadow: `1px 1px 8px ${colors.grey}`,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
};
