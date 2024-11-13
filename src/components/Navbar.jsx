import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { // Change this value based on when you want the blur effect to activate
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between w-full bg-white p-4 shadow-md font-poppins min-h-[80px] fixed z-50 transition-all ${
        scrolled ? "backdrop-blur-lg bg-white/60" : "bg-white"
      }`}
    >
      {/* Logo Section */}
      <div className="text-lg font-extrabold">TaxApp</div>

      {/* Navigation Links */}
      <div className="max-md:hidden flex gap-10 items-center">
        <Link to="/">
          <p className="navLinks">Home</p>
        </Link>

        <Link to="/about-us">
          <p className="navLinks">About</p>
        </Link>

        <p className="navLinks">Contact</p>

        {/* Link to Sign In page */}
        <Link to="/sign-up">
          <CustomButton text={"Sign In"} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
