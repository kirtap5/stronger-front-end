import { createSlice } from "@reduxjs/toolkit";
import { initialStateMock } from "../../redux/initialStateMock";

// Define a type for the slice state
interface WorkoutState {
  categories: {
    id: number;
    name: string;
    exercises: { id: number; name: string }[];
  }[];
}

// Define the initial state using that type
const initialState: WorkoutState = initialStateMock;

const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    selectedCategories(state, action) {},
  },
});

export const { selectedCategories } = workoutSlice.actions;

export default workoutSlice.reducer;
