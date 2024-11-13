import RootLayout from "./layouts/RootLayout";
import Hero from "./screens/Hero";
import Login from "./screens/login";
import Signup from "./screens/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import GstRates from "./screens/GstRates";
import AboutUs from "./components/AboutUs";

// added the gst-rates route
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Hero />} />
          <Route path="/gst-rates" element={<GstRates/>} />
          <Route path="/about-us" element={<AboutUs/>} />
        </Route>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />

      </Routes>
    </Router>
  );
};

export default App;
