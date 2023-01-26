import { useState } from "react";
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
import { OutlineButton } from "../../components/OutlineButton";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { initiatedWorkout } from "../../features/workout/workoutSlice";
import { SelectDateModal } from "./SelectDateModal";

//TODO, fixa snyggare lösning för illustrations. Ha dom i databasen ksk?
const illustrations: any = {
  ABS: abs,
  ARMS: arms,
  BACK: back,
  SHOULDERS: shoulders,
  CHEST: chest,
  LEGS: legs,
};

export const CreateWorkout = () => {
  const navigate = useNavigate();
  const categories = useSelector(
    (state: RootState) => state.workout.categories
  );
  const activeCategories = useSelector(
    (state: RootState) => state.workout.selectedCategories
  );
  const dispatch = useDispatch();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleSelectedCategory = (name: string) => {
    let updatedCategories = [...selectedCategories];
    updatedCategories.includes(name, 0)
      ? (updatedCategories = updatedCategories.filter(
          (category) => category !== name
        ))
      : updatedCategories.push(name);

    setSelectedCategories(updatedCategories);
  };
  const handleStartWorkout = (event: ClickEventType) => {
    console.log("this date is selected: ", selectedDate);
    dispatch(initiatedWorkout(selectedCategories));
    navigate(`/${ROUTE_PATHS.ADD_EXERCISE}`);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectedDate = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div style={styles.root}>
      <h1 style={{ textTransform: "capitalize" }}>
        {categories[2].name.toLowerCase()}
      </h1>
      <HeaderSection
        starter="What are"
        highlight="you"
        ending="training today?"
      />
      <div style={styles.cardContainer}>
        {categories.map(({ id, name }) => {
          return (
            <MuscleCard
              key={id}
              path={illustrations[name]}
              caption={name.toLowerCase()}
              highlightColor={colors.secondary}
              handleSelect={handleSelectedCategory}
              initState={
                activeCategories.includes(name.toLowerCase()) ? true : false
              }
            />
          );
        })}
      </div>
      <div style={styles.buttonContainer}>
        <PrimaryButton value="Start Workout" handleClick={handleStartWorkout} />
        <OutlineButton value="Change Date" handleClick={toggleModal} />
      </div>
      {showModal ? (
        <SelectDateModal
          closeModal={toggleModal}
          passSelectedDate={handleSelectedDate}
        />
      ) : null}
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
    margin: "30px auto 40px auto",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};
