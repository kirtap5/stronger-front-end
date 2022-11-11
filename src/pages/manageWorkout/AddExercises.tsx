import React from "react";
import { ExersiceInputModal } from "./ExerciseInputModal";
import { ExersiceCard } from "./ExersiceCard";
import { NewExerciseCard } from "./NewExerciseCard";
export const AddExercises = () => {
  return (
    <div>
      {/* <p>New</p> */}
      {/* <NewExerciseCard /> */}
      {/* <p>Activity</p> */}

      {/* <ExersiceCard group="Chest" name="Bench press" value={50} /> */}
      <ExersiceInputModal />
    </div>
  );
};
