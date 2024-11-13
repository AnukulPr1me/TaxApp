import { useState } from "react";
import Goods from "../components/Goods";
import Services from "../components/Services";

const GstRates = () => {
  // State to manage which tab is active
  const [activeTab, setActiveTab] = useState("goods");

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home / Services / GST rates for Goods and Services as on 01.04.2023
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">GST Rates</h1>

      {/* Buttons for Toggling */}
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab("goods")}
          className={`px-4 py-2 font-semibold rounded-l ${
            activeTab === "goods" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          Goods
        </button>
        <button
          onClick={() => setActiveTab("services")}
          className={`px-4 py-2 font-semibold rounded-r ${
            activeTab === "services" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          Services
        </button>
      </div>

      {/* Conditional Rendering of Components */}
      {activeTab === "goods" ? <Goods /> : <Services />}
    </div>
  );
};

export default GstRates;
