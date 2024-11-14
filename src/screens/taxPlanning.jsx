import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CategoryList.css";

const categories = [
  {
    id: 1,
    title: "Crypto Taxation in India 2024: A Comprehensive Guide",
    imageUrl: "https://coindcx.com/blog/wp-content/uploads/2023/11/IMG_1071.png",
    blogContent: `
        In India, virtual digital assets (VDAs), including cryptocurrencies and NFTs, 
        are taxed under the Income Tax Act following the Union Budget 2022. 
        Profits from the sale or exchange of crypto assets are taxed at 30%, with no deductions 
        allowed other than the acquisition cost. A 1% Tax Deducted at Source (TDS) is levied on crypto 
        transactions, effective from July 1, 2022. Losses from crypto assets cannot be offset against other income, 
        and gifting crypto will be taxed in the hands of the recipient. The Income Tax Return (ITR) for 2023-2024 
        includes a section to report gains from VDAs, with a filing deadline of July 31, 2024, and an option for belated 
        returns until December 31, 2024. Additionally, if a person has not filed returns in the past two years with 
        TDS over INR 50,000, the TDS rate increases to 5%. The government has not introduced new changes to crypto 
        taxation in the 2024 budget.
    `
  },
  {
    id: 2,
    title: "Understanding Wealth Tax in India",
    imageUrl: "https://cms-resources.groww.in/uploads/Understanding_Wealth_Tax_in_India_e1997db5fd.jpg",
    blogContent:`
      The blog explains crypto taxation in India, 
      stating that virtual digital assets (VDAs), including cryptocurrencies and NFTs,
      are taxed at a 30% rate on profits from sales or exchanges. 
      A 1% Tax Deducted at Source (TDS) is applied to crypto transactions from July 1, 2022. 
      Losses from crypto assets can't be offset against other income, 
      and gifting crypto is taxable for the recipient. 
      The Income Tax Return (ITR) for 2023-2024 includes a section for reporting crypto gains, 
      with a filing deadline of July 31, 2024, and a belated return option until December 31, 2024. 
      If a person has not filed returns in the past two years with TDS over INR 50,000, 
      the TDS rate increases to 5%. The 2024 budget does not introduce new changes to crypto taxation.`,
  },
  {
    id: 3,
    title: "Tax Arbitration in India: Scope and Trends...",
    imageUrl: "https://www.careinsurance.com/upload_master/media/posts/October2020/tax%202.jpg",
    blogContent:
      `Combining the intricate conceptual nuances of tax laws and law of contracts to apply them in an arbitration paradigm, 
      tax arbitration, as a niche species of arbitration, 
      has gradually come to fore as a distinct and specialised segment of dispute resolution mechanism in the Indian legal system. 
      There are enough peculiarities and features of tax arbitration which justify a delineation of its features and analysis of its trends. 
      This is particularly true in the domestic law scenario which traverses much beyond its limited (though well instituted) tenets in an international law context.
        Seeking to sketch its contours, this post attempts to identify the facets of tax arbitration in India`,
  },
  {
    id: 4,
    title: "Inheritance Tax in India – A Looming Debate",
    imageUrl: "https://5.imimg.com/data5/IG/SV/MY-28580821/income-tax-500x500.jpg",
    blogContent:
      `Inheritance tax, also known as estate duty, 
      is a levy imposed on the value of assets inherited from a deceased person. 
      Essentially, the government collects a share of the wealth transferred from the deceased 
      to their beneficiaries. This tax is typically applied before the inheritance is distributed to heirs. 
      It’s important to distinguish inheritance tax from other taxes related to death, such as capital gains tax,
       which may apply when inherited assets are sold.`,
  },
  {
    id: 5,
    title: "Tax Benefits for Families",
    imageUrl: "https://example.com/family-tax-benefits.jpg",
    blogContent:
      "Learn about the various tax benefits available to families, including child tax credits, deductions, and other tax-saving strategies...",
  },
  {
    id: 6,
    title: "Investment Strategies for Beginners",
    imageUrl: "https://example.com/investment-strategies.jpg",
    blogContent:
      "This guide covers fundamental investment strategies for beginners, including stocks, bonds, and real estate...",
  },
  {
    id: 7,
    title: "Managing Wealth Efficiently",
    imageUrl: "https://example.com/wealth-management.jpg",
    blogContent:
      "Efficient wealth management is key to long-term financial security. Explore tips on budgeting, investing, and tax planning...",
  },
  {
    id: 8,
    title: "Understanding Capital Gains Tax",
    imageUrl: "https://example.com/capital-gains-tax.jpg",
    blogContent:
      "Capital gains tax is levied on the profit from the sale of assets. Learn how it works and ways to minimize your tax burden...",
  },
];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 4;

  // Calculate the current categories to display
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(categories.length / categoriesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {selectedCategory ? (
          <div className="blog-view">
            <button onClick={handleBack} className="back-button">
              Back to Categories
            </button>
            <h2>{selectedCategory.title}</h2>
            <img
              src={selectedCategory.imageUrl}
              alt={selectedCategory.title}
              className="blog-image"
            />
            <p>{selectedCategory.blogContent}</p>
          </div>
        ) : (
          <div className="grid">
            {currentCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="grid-item"
              >
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="grid-image"
                />
                <h3 className="grid-title">{category.title}</h3>
              </div>
            ))}
          </div>
        )}
        {/* Pagination Controls */}
        {!selectedCategory && (
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={
                currentPage === Math.ceil(categories.length / categoriesPerPage)
              }
            >
              Next
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoryList;
