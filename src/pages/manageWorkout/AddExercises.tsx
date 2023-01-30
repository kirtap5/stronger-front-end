import { useState } from "react";
import { HeaderSection } from "../../components/HeaderSection";
import { ClickEventType, StyleType } from "../../typescript/types/Types";
import { ExersiceInputModal } from "./ExerciseInputModal";
import { ExersiceCard } from "./ExersiceCard";
import { NewExerciseCard } from "./NewExerciseCard";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const AddExercises = () => {
  //todo: fetch the exercises and display them instead.
  const categories = useSelector(
    (state: RootState) => state.workout.categories
  );

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div style={styles.root}>
      <HeaderSection starter="Register" highlight="your" ending="exercises" />
      <div style={styles.topSection}>
        <b style={styles.sectionHeader}>New</b>
        <NewExerciseCard handleClick={toggleModal} />
      </div>
      <div>
        <b style={styles.sectionHeader}>Activity</b>
        <ExersiceCard group="Chest" name="Bench press" value={50} />
      </div>
      {showModal ? <ExersiceInputModal closeModal={toggleModal} /> : null}
    </div>
  );
};

const styles: StyleType = {
  root: {
    width: "90%",
    margin: "auto",
  },
  topSection: {
    margin: "30px 0",
  },
  sectionHeader: {
    marginLeft: "20px",
    fontWeight: "bold",
  },
};
