

const CustomButton = ({ text ,  }) => {
  return (
    <div className="flex items-center justify-center bg-primary_green px-4 py-2 rounded-md text-white font-semibold shadow-md hover:bg-secondary_green transition-transform transform hover:scale-105 active:scale-95 cursor-pointer">
      {text ? text : "TEXT"}
    </div>
  );
};

export default CustomButton;
