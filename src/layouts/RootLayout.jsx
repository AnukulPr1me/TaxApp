import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <section className="w-full min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default RootLayout;
