import React from "react";
import { colors } from "../../assets/colors";
import { HeaderSection } from "../../components/HeaderSection";
import { ClickEventType, StyleType } from "../../typescript/types/Types";
import { MuscleCard } from "./MuscleCard";
import abs from "../../assets/images/abs.png";
import arms from "../../assets/images/arms.png";
import back from "../../assets/images/back.png";
import shoulders from "../../assets/images/shoulders.png";
import chest from "../../assets/images/chest.png";
import legs from "../../assets/images/legs.png";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes";

type muscleDataType = {
  id?: number;
  path: string;
  caption: string;
  highlightColor: string;
};

const muscleData: muscleDataType[] = [
  {
    id: 1,
    path: chest,
    caption: "Chest",
    highlightColor: colors.secondary,
  },
  {
    id: 2,
    path: back,
    caption: "Back",
    highlightColor: colors.secondary,
  },
  {
    id: 3,
    path: legs,
    caption: "Legs",
    highlightColor: colors.secondary,
  },
  {
    id: 4,
    path: arms,
    caption: "Arms",
    highlightColor: colors.secondary,
  },
  {
    id: 5,
    path: shoulders,
    caption: "Shoulders",
    highlightColor: colors.secondary,
  },
  {
    id: 6,
    path: abs,
    caption: "Abs",
    highlightColor: colors.secondary,
  },
];

export const CreateWorkout = () => {
  const navigate = useNavigate();

  const handleStartWorkout = (event: ClickEventType) => {
    console.log("sjk");
    navigate(ROUTE_PATHS.ADD_EXERCISE);
  };

  return (
    <div style={styles.root}>
      <HeaderSection />
      <div style={styles.cardContainer}>
        {muscleData.map(({ id, path, caption, highlightColor }) => {
          return (
            <MuscleCard
              key={id}
              path={path}
              caption={caption}
              highlightColor={highlightColor}
            />
          );
        })}
      </div>
      <PrimaryButton value="Start Workout" handleClick={handleStartWorkout} />
    </div>
  );
};
const styles: StyleType = {
  root: {
    width: "90%",
    margin: "auto",
  },
  cardContainer: {
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(1, 1fr 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    margin: "50px auto",
  },
};
