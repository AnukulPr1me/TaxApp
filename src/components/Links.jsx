import { Link } from "react-router-dom";
import taxIcon from "../assets/images/taxIcon.webp";
import videoCall from "../assets/images/videoCall.webp";
import taxfiling from "../assets/images/taxfiling.webp";
import gstLogo from "../assets/images/gstlogo.webp";
import GstRates from "../screens/GstRates";

const Links = () => {
  return (
    <div className="py-8 flex justify-center items-center">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Tax Calculator */}
        <Link to="/tax-calculator">
          <div className="bg-white rounded-lg shadow-primary-green p-6 text-center flex flex-col justify-between transition-transform transform hover:scale-105 max-md:h-auto min-h-[300px]">
            <img
              src={taxIcon}
              alt="Tax Calculator"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-[25px] font-bold mb-2">Tax Calculator</h3>
            <p className="text-gray-600 flex-grow">
              Easily calculate your tax with our tool. Enter your income and
              deductions, and get an accurate tax estimate. Save time by
              instantly knowing your potential liabilities or refunds.
            </p>
          </div>
        </Link>

        {/* Tax Filing */}
        <Link to="/">
          <div className="bg-white rounded-lg shadow-primary-green p-6 text-center flex flex-col justify-between transition-transform transform hover:scale-105 max-md:h-auto min-h-[300px]">
            <img
              src={taxfiling}
              alt="Tax Filing"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-[25px] font-bold mb-2">Tax Filing</h3>
            <p className="text-gray-600 flex-grow">
              File your tax returns quickly and securely. Our platform ensures
              you comply with the latest tax laws, making the process easier,
              faster, and error-free. Get reminders and support throughout the
              filing process.
            </p>
          </div>
        </Link>

        {/* GST Rates */}
        <Link to="/gst-rates">
          <div className="bg-white rounded-lg shadow-primary-green p-6 text-center flex flex-col justify-between transition-transform transform hover:scale-105 max-md:h-auto min-h-[300px]">
            <img
              src={gstLogo}
              alt="GST Rates"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-[25px] font-bold mb-2">GST Rates</h3>
            <p className="text-gray-600 flex-grow">
              Optimize your taxes to save money. Discover tax-saving
              opportunities, maximize deductions, and plan ahead for the
              upcoming tax year. Learn strategies to reduce your overall tax
              burden.
            </p>
          </div>
        </Link>

        {/* Tax Planning */}
        <Link to="/tax-planning">
          <div className="bg-white rounded-lg shadow-primary-green p-6 text-center flex flex-col justify-between transition-transform transform hover:scale-105 max-md:h-auto min-h-[300px]">
            <img
              src={taxIcon}
              alt="Tax Planning"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-[25px] font-bold mb-2">Tax Planning</h3>
            <p className="text-gray-600 flex-grow">
              Plan ahead with strategic tax planning to ensure you're prepared
              for future taxes. Learn about retirement contributions, investment
              strategies, and tax-efficient savings to avoid surprises during
              tax season.
            </p>
          </div>
        </Link>

        {/* Tax Consulting */}
        <a
          href="https://localhost:7001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white rounded-lg shadow-primary-green p-6 text-center flex flex-col justify-between transition-transform transform hover:scale-105 max-md:h-auto min-h-[300px]">
            <img
              src={videoCall}
              alt="Tax Consulting"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-[25px] font-bold mb-2">Tax Consulting</h3>
            <p className="text-gray-600 flex-grow">
              Get personalized advice from tax professionals to navigate complex
              tax scenarios. Whether you're self-employed, investing, or have
              international tax concerns, our experts are here to guide you.
            </p>
          </div>
        </a>

        {/* Tax Resources */}
        <Link to="/">
          <div className="bg-white rounded-lg shadow-primary-green p-6 text-center flex flex-col justify-between transition-transform transform hover:scale-105 max-md:h-auto min-h-[300px]">
            <img
              src={taxIcon}
              alt="Tax Resources"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-[25px] font-bold mb-2">Tax Resources</h3>
            <p className="text-gray-600 flex-grow">
              Access a variety of tools, guides, and FAQs to enhance your
              understanding of taxes. Stay informed about tax regulations, learn
              about deductions, credits, and exemptions, and use helpful
              templates to keep track of your financial documents.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Links;
