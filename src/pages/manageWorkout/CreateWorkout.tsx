import React from "react";
import { colors } from "../../assets/colors";
import { HeaderSection } from "../../components/HeaderSection";
import { StyleType } from "../../typescript/types/Types";
import { MuscleCard } from "./MuscleCard";
import abs from "../../assets/images/abs.png";
import arms from "../../assets/images/arms.png";
import back from "../../assets/images/back.png";
import shoulders from "../../assets/images/shoulders.png";
import chest from "../../assets/images/chest.png";
import legs from "../../assets/images/legs.png";
import { PrimaryButton } from "../../components/PrimaryButton";

type muscleDataType = {
  id?: number;
  path: string;
  caption: string;
  highlightColor: string;
};

const muscleData = [
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
  return (
    <div style={styles.root}>
      <HeaderSection />
      <div style={styles.cardContainer}>
        {muscleData.map(
          ({ id, path, caption, highlightColor }: muscleDataType) => {
            return (
              <MuscleCard
                key={id}
                path={path}
                caption={caption}
                highlightColor={highlightColor}
              />
            );
          }
        )}
        {/* 
        
        <MuscleCard
          path={legs}
          caption="Legs"
          highlightColor={colors.secondary}
        />
        <MuscleCard
          path={biceps}
          caption="Arms"
          highlightColor={colors.secondary}
        />
        <MuscleCard
          path={shoulders}
          caption="Shoulders"
          highlightColor={colors.secondary}
        />
        <MuscleCard
          path={abs}
          caption="Abs"
          highlightColor={colors.secondary}
        /> */}
      </div>
      <PrimaryButton value="Start Workout" />
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
