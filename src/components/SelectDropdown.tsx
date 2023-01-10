import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { colors } from "../assets/colors";
import { RootState } from "../redux/store";
import { StyleType } from "../typescript/types/Types";

interface CategoryOption {
  name: string;
  options: ExerciseOption[];
}
interface ExerciseOption {
  id: number;
  name: string;
  value: string;
}

const formatGroupLabel = (data: CategoryOption) => (
  <div style={styles.groupStyles}>
    <span>{data.name}</span>
    <span style={styles.groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export const SelectDropdown = () => {
  const [categoryOptions, setCategoryOptions] = useState<CategoryOption[]>();

  const categories = useSelector(
    (state: RootState) => state.workout.categories
  );
  const selectedCategories = useSelector(
    (state: RootState) => state.workout.selectedCategories
  );
  useEffect(() => {
    const formattedCategoryOptions: CategoryOption[] = [];
    selectedCategories.forEach((category) => {
      categories.forEach((chosenCategory) => {
        if (category.toUpperCase() == chosenCategory.name) {
          formattedCategoryOptions.push({
            name: category,
            options: chosenCategory.exercises.map((exercise) => ({
              ...exercise,
              label: exercise.name,
              value: exercise.name,
              // TODO: value: String(exercise.id),
            })),
          });
        }
      });
    });
    setCategoryOptions(formattedCategoryOptions);
  }, []);

  return (
    <div style={styles.root}>
      <Select<ExerciseOption, false, CategoryOption>
        defaultValue={null}
        options={categoryOptions}
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
