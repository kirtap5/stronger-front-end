import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { CreateWorkout } from "./pages/CreateWorkout";
import { Statistics } from "./pages/Statistics";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout iconSize={30} />}>
          <Route index element={<Home />}></Route>
          <Route path="createWorkout" element={<CreateWorkout />}></Route>
          <Route path="statistics" element={<Statistics />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
