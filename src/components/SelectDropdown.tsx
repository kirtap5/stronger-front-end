import React from "react";
import Select from "react-select";
import { colors } from "../assets/colors";
import { StyleType } from "../typescript/types/Types";

interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isDisabled?: boolean;
}

const colourOptions: readonly ColourOption[] = [
  { value: "ocean", label: "Ocean", color: "#00B8D9" },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

interface FlavourOption {
  readonly value: string;
  readonly label: string;
  readonly rating: string;
}

const flavourOptions: readonly FlavourOption[] = [
  { value: "vanilla", label: "Vanilla", rating: "safe" },
  { value: "chocolate", label: "Chocolate", rating: "good" },
  { value: "strawberry", label: "Strawberry", rating: "wild" },
  { value: "salted-caramel", label: "Salted Caramel", rating: "crazy" },
];

interface GroupedOption {
  readonly label: string;
  readonly options: readonly ColourOption[] | readonly FlavourOption[];
}

const groupedOptions: readonly GroupedOption[] = [
  {
    label: "Colours",
    options: colourOptions,
  },
  {
    label: "Flavours",
    options: flavourOptions,
  },
];

const formatGroupLabel = (data: GroupedOption) => (
  <div style={styles.groupStyles}>
    <span>{data.label}</span>
    <span style={styles.groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export const SelectDropdown = () => {
  return (
    <div style={styles.root}>
      <Select<ColourOption | FlavourOption, false, GroupedOption>
        defaultValue={null}
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: colors.primary,
          },
        })}
      />
    </div>
  );
};

const styles: StyleType = {
  root: { width: "90%", margin: "auto" },
  groupStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  groupBadgeStyles: {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center",
  },
};
