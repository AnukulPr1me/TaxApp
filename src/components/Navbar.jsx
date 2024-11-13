import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full p-4  shadow-md font-poppins min-h-[80px]">
      {/* Logo Section */}
      <div className="text-lg font-extrabold">TaxApp</div>

      {/* Navigation Links */}
      <div className="flex gap-10  items-center">
        <p className="navLinks">Home</p>
        <p className="navLinks">About</p>
        <p className="navLinks">Contact</p>
        <CustomButton text={"Sign In"} />
        {/* <a
          href="/src/assets/files/taxDetails.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PDF
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
