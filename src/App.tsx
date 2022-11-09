import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
// import { CreateWorkout } from "./pages/manageWorkout/CreateWorkout";
import { Statistics } from "./pages/Statistics";
import { AddExercises } from "./pages/manageWorkout/AddExercises";
import { ROUTE_PATHS } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout iconSize={30} />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="createWorkout" element={<CreateWorkout />}></Route> */}
          <Route
            path={ROUTE_PATHS.CREATE_WORKOUT}
            element={<AddExercises />}
          ></Route>

          <Route path={ROUTE_PATHS.STATISTICS} element={<Statistics />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
