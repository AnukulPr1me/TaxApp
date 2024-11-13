import RootLayout from "./layouts/RootLayout";
import Hero from "./screens/Hero";
import Login from "./screens/login";
import Signup from "./screens/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import GstRates from "./components/GstRates";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Hero />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/gst-rates" element={<GstRates/>} />
      </Routes>
    </Router>
  );
};

export default App;
