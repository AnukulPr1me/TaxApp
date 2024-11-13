import RootLayout from "./layouts/RootLayout";
import Hero from "./screens/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Hero />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
