import React from "react";
import { HeaderSection } from "../../components/HeaderSection";
import { StyleType } from "../../typescript/types/Types";
import { ExersiceInputModal } from "./ExerciseInputModal";
import { ExersiceCard } from "./ExersiceCard";
import { NewExerciseCard } from "./NewExerciseCard";
export const AddExercises = () => {
  return (
    <div style={styles.root}>
      <HeaderSection starter="Register" highlight="your" ending="exercises" />
      <p>New</p>
      <NewExerciseCard />
      <p>Activity</p>
      <ExersiceCard group="Chest" name="Bench press" value={50} />
      {/* <ExersiceInputModal /> */}
    </div>
  );
};

const styles: StyleType = {
  root: {
    width: "90%",
    margin: "auto",
  },
};
