import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
        About Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Welcome Section */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Welcome</h2>
          <p className="text-gray-700 mb-4">
            Welcome to our Tax Filing App. This initiative is dedicated to making the tax filing process clear and accessible, whether you're filing as an individual, working professional, or a small business owner. We aim to simplify tax-related information, so anyone can approach tax season with confidence and ease.
          </p>
        </div>
        
        {/* Project Purpose Section */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our App Purpose</h2>
          <p className="text-gray-700 mb-4">
            Our App is designed to provide straightforward guidance on tax filing, addressing common questions and simplifying complex concepts. We’re here to break down essential tax filing steps, explain available deductions and credits, and help individuals understand the importance of timely, accurate filing.
          </p>
        </div>
        
        {/* What We Offer Section */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Educational Resources:</strong> Step-by-step guides and tips to help you navigate the filing process, whether you’re filing simple individual taxes or handling business-related forms.</li>
            <li><strong>Helpful Tools:</strong> Checklists, calculators, and sample forms to make preparing for tax season smoother.</li>
            <li><strong>Clear Explanations:</strong> Simplified explanations of terms, tax brackets, and regulations to help users avoid common mistakes.</li>
          </ul>
        </div>
        
        {/* Our Mission Section */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to empower individuals with the knowledge to file taxes accurately and confidently, minimizing errors and maximizing compliance. By providing clear, accessible resources, we hope to make tax season more manageable for everyone involved in this project!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
