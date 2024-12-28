import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Pages/Footer";
import HomePage from "./Components/Pages/HomePage";
import NotFound from "./Components/Pages/NotFound";
import AboutUs from "./Components/Pages/AboutUs";
import Signup from "./Components/Pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
