import { colors } from "../../assets/colors";
import { StyleType } from "../../typescript/types/Types";

export const WeightSelection = () => {
  return (
    <div style={styles.root}>
      <p style={styles.header}>Select the weight</p>
      <input type="number" inputMode="decimal" style={styles.weightInput} />
    </div>
  );
};

const styles: StyleType = {
  root: {},
  header: { fontWeight: "600" },
  weightInput: {
    fontSize: "40px",
    width: "80%",

    borderRadius: "10px",
    border: `1px solid ${colors.lightGrey}`,
  },
};
