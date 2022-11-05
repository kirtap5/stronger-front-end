import React from "react";
import { colors } from "../../assets/colors";
import { HeaderSection } from "../../components/HeaderSection";
import { StyleType } from "../../typescript/types/Types";
import { MuscleCard } from "./MuscleCard";
import abs from "../../assets/images/abs.png";
import biceps from "../../assets/images/biceps.png";
import back from "../../assets/images/back.png";
import shoulders from "../../assets/images/shoulders.png";
import chest from "../../assets/images/chest.png";
import legs from "../../assets/images/legs.png";
import { PrimaryButton } from "../../components/PrimaryButton";

export const CreateWorkout = () => {
  return (
    <div style={styles.root}>
      <HeaderSection />
      <div style={styles.cardContainer}>
        <MuscleCard
          path={chest}
          caption="Chest"
          highlightColor={colors.secondary}
        />
        <MuscleCard
          path={back}
          caption="Back"
          highlightColor={colors.secondary}
        />
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
        />
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
