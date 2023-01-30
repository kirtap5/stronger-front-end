import { colors } from "../../assets/colors";
import { StyleType } from "../../typescript/types/Types";

export const WeightSelection = () => {
  return (
    <div style={styles.root}>
      <p style={styles.header}>Select the weight</p>
      <input type="number" inputMode="decimal" style={styles.weightInput} />
      <b style={styles.text}>kg</b>
    </div>
  );
};

const styles: StyleType = {
  root: {},
  header: { fontWeight: "600" },
  weightInput: {
    all: "unset",
    width: "40px",
    height: "50px",
    padding: "0 10px",
    fontSize: "18px",
    fontWeight: "500",
    backgroundColor: colors.lightGrey,
    textAlign: "center",
    borderRadius: "10px",
    marginRight: "10px",
  },
  text: {
    fontWeight: "500",
  },
};
