import serviceTaxData from "../assets/serviceTaxData";

const Services = () => {
  return (
    <>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Chapter / Heading / Sub-heading / Tariff item"
          className="w-1/2 px-3 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Description of Goods"
          className="w-1/2 px-3 py-2 border rounded-md"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Search
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
          Clear
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="border border-gray-500">
            <tr className="bg-blue-200">
              <th className="p-3 text-left">Schedules</th>
              <th className="p-3 text-left">S. No.</th>
              <th className="p-3 text-left">Chapter / Section / Heading</th>
              <th className="p-3 text-left">Description of Service</th>
              <th className="p-3 text-left">CGST Rate (%)</th>
              <th className="p-3 text-left">SGST / UTGST Rate (%)</th>
              <th className="p-3 text-left">IGST Rate (%)</th>
              <th className="p-3 text-left">Condition</th>
            </tr>
          </thead>
          <tbody>
            {serviceTaxData.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{item.Schedules}</td>
                <td className="p-3">{item.SNo}</td>
                <td className="p-3">{item.SectionHeading}</td>
                <td className="p-3">{item.Description}</td>
                <td className="p-3">{item.CGSTRate}</td>
                <td className="p-3">{item.SGSTRate}</td>
                <td className="p-3">{item.IGSTRate}</td>
                <td className="p-3">{item.Condition || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Services;