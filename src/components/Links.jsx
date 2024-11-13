import { Link } from "react-router-dom"; // Import Link from react-router-dom
import taxIcon from "../assets/images/taxIcon.webp";

const linksData = [
  {
    id: 0,
    title: "Tax Calculator",
    details:
      "Easily calculate your tax with our tool. Enter your income and deductions, and get an accurate tax estimate. Save time by instantly knowing your potential liabilities or refunds.",
    imageLink: taxIcon,
    link: "/", // Default link, replace later
  },
  {
    id: 1,
    title: "Tax Filing",
    details:
      "File your tax returns quickly and securely. Our platform ensures you comply with the latest tax laws, making the process easier, faster, and error-free. Get reminders and support throughout the filing process.",
    imageLink: taxIcon,
    link: "/", // Default link, replace later
  },
  {
    id: 2,
    title: "Tax Optimization",
    details:
      "Optimize your taxes to save money. Discover tax-saving opportunities, maximize deductions, and plan ahead for the upcoming tax year. Learn strategies to reduce your overall tax burden.",
    imageLink: taxIcon,
    link: "/", // Default link, replace later
  },
  {
    id: 3,
    title: "Tax Planning",
    details:
      "Plan ahead with strategic tax planning to ensure you're prepared for future taxes. Learn about retirement contributions, investment strategies, and tax-efficient savings to avoid surprises during tax season.",
    imageLink: taxIcon,
    link: "/", // Default link, replace later
  },
  {
    id: 4,
    title: "Tax Consulting",
    details:
      "Get personalized advice from tax professionals to navigate complex tax scenarios. Whether you're self-employed, investing, or have international tax concerns, our experts are here to guide you.",
    imageLink: taxIcon,
    link: "/", // Default link, replace later
  },
  {
    id: 5,
    title: "Tax Resources",
    details:
      "Access a variety of tools, guides, and FAQs to enhance your understanding of taxes. Stay informed about tax regulations, learn about deductions, credits, and exemptions, and use helpful templates to keep track of your financial documents.",
    imageLink: taxIcon,
    link: "/", // Default link, replace later
  },
];

const Links = () => {
  return (
    <div className="w-full md:h-screen py-8 flex justify-center items-center">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {linksData.map((link) => (
          <Link key={link.id} to={link.link}>
            <div className="bg-white rounded-lg shadow-primary-green p-6 text-center flex flex-col justify-between transition-transform transform hover:scale-105 h-auto lg:h-[300px]">
              <img
                src={link.imageLink}
                alt={link.title}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-[25px] font-bold mb-2">{link.title}</h3>
              <p className="text-gray-600 flex-grow">{link.details}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
