import { colors } from "../../assets/colors";
import { StyleType } from "../../typescript/types/Types";
export const RepSelection = () => {
  return (
    <div style={styles.root}>
      <p style={styles.header}>Select the amount</p>
      <small style={{ ...styles.leftTitle, ...styles.title }}>Sets</small>
      <small style={{ ...styles.rightTitle, ...styles.title }}>Reps</small>
      {/* Todo: insert inputs for the numers. Skicka upp vald value onChange?*/}
      <div style={{ ...styles.leftField, ...styles.field }}>
        <input
          type="number"
          inputMode="numeric"
          defaultValue="3"
          style={styles.numberInput}
        />
      </div>

      <div style={{ ...styles.rightField, ...styles.field }}>
        <input
          type="number"
          inputMode="numeric"
          defaultValue="6"
          style={styles.numberInput}
        />
      </div>
    </div>
  );
};

const styles: StyleType = {
  root: {
    display: "grid",
    gridTemplateAreas: `"header header header"
    "LeftTitle Empty RightTitle"
    "LeftField Multiplier RightField"
    "LeftField Multiplier RightField"`,
    justifyContent: "start",
    textAlign: "center",
  },
  header: {
    gridArea: "header",
    fontWeight: "600",
  },
  title: {
    color: colors.secondary,
    fontWeight: "500",
  },
  leftTitle: {
    gridArea: "LeftTitle",
  },
  rightTitle: {
    gridArea: "RightTitle",
  },
  field: {
    width: "50px",
    height: "80px",
    backgroundColor: colors.lightGrey,
    marginTop: "5px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500",
  },
  leftField: {
    gridArea: "LeftField",
  },
  rightField: {
    gridArea: "RightField",
  },
  numberInput: {
    all: "unset",
    textDecoration: "none",
    fontWeight: "500",
    background: "none",
    fontSize: "18px",
    minWidth: "50%",
    maxWidth: "100%",
    textAlign: "center",
    borderRadius: "10px",
    border: `1px solid ${colors.lightGrey}`,
  },
};
