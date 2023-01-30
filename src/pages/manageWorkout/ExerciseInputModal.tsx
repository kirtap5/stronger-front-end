import { colors } from "../../assets/colors";
import { DateDisplay } from "../../components/DateDisplay";
import { ClickEventType, StyleType } from "../../typescript/types/Types";
import { SelectDropdown } from "../../components/SelectDropdown";
import { RepSelection } from "./RepSelection";
import { WeightSelection } from "./WeightSelection";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PrimaryButton } from "../../components/PrimaryButton";

interface ExerciseInputModalProps {
  closeModal: () => void;
}
export const ExersiceInputModal: React.FC<ExerciseInputModalProps> = ({
  closeModal,
}) => {
  const exercises = useSelector((state: RootState) => state.workout.categories);

  return (
    <div style={styles.root} onClick={closeModal}>
      <div
        style={styles.container}
        onClick={(event: ClickEventType) => event.stopPropagation()}
      >
        <div style={styles.header}>
          <div style={styles.captionContainer}>
            <div>
              <h2 style={styles.caption}>Chest</h2>
              <b style={styles.highlight}>and</b>
            </div>
            <h2 style={styles.caption}>Triceps</h2>
          </div>
          <DateDisplay />
        </div>
        <SelectDropdown />
        <RepSelection />
        <WeightSelection />

        <div style={styles.buttonContainer}>
          <PrimaryButton value="Confirm" handleClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

const styles: StyleType = {
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: colors.backDrop,
    display: "flex",
    justifyContent: "center",
    zIndex: "2",
  },
  container: {
    width: "80%",
    height: "90%",
    backgroundColor: colors.white,
    borderRadius: "20px",
    margin: "auto",
    padding: "20px",
  },
  header: {
    margin: "auto",
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-around",
  },

  captionContainer: {
    maxWidth: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  caption: {
    display: "inline-block",
    margin: "0",
  },

  highlight: {
    color: colors.primary,
    marginLeft: "10px",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "80px",
    left: "50%",
    transform: "translateX(-50%)",
  },
};
