import RootLayout from "./layouts/RootLayout";
import Hero from "./screens/Hero";
import Login from "./screens/login";
import Signup from "./screens/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import GstRates from "./screens/GstRates";
import AboutUs from "./components/AboutUs";
<<<<<<< HEAD
import Contact from "./screens/Contact";
=======
import TaxPlanning from "./screens/taxPlanning";
import TaxCalculator from "./TaxCalculator/TaxCalculator";


>>>>>>> b4c358e2d643fab3374050387e8f3b3e818145e4

// added the gst-rates route
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Hero />} />
          <Route path="/gst-rates" element={<GstRates/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact-us" element={<Contact/>} />
        </Route>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/tax-planning" element={<TaxPlanning />} />
        <Route path="/temp" element={<TaxCalculator />} />

      </Routes>
    </Router>
  );
};

export default App;
