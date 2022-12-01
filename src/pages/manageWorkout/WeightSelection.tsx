import { StyleType } from "../../typescript/types/Types";

export const WeightSelection = () => {
  return (
    <div style={styles.root}>
      <p style={styles.header}>Select the weight</p>
    </div>
  );
};

const styles: StyleType = {
  root: {},
  header: { fontWeight: "600" },
};
