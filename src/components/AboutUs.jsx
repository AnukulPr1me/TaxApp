import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-8 rounded-lg max-w-6xl mx-auto text-black h-screen mt-[60px]">
      <h2 className="text-3xl font-semibold mb-4 border-b border-gray-600 pb-2">About Us</h2>
      <div className="space-y-6">
        <div className="p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Our App</h3>
          <p className="text-black mt-2">
            We’re introducing a powerful platform designed to make tax management simple and hassle-free. Here’s what our app offers:
          </p>
          <ul className="list-disc list-inside mt-2 text-black">
            <li>Easy Tax Filing: Guided steps to help you file accurately every time.</li>
            <li>Automatic Calculations: Fewer errors with precise, automated calculations.</li>
            <li>Document Storage: Keep all your tax documents organized and secure.</li>
            <li>Secure Payments: Manage tax payments quickly and safely in one place.</li>
            <li>Tax-Saving Insights: Personalized tips to help you save more.</li>
            <li>Deadline Reminders: Get alerts to stay on top of important dates.</li>
            <li>24/7 Support: Assistance whenever you need it with chatbot and expert consultants.</li>
            <li>Always Up-to-Date: Compliance with the latest tax rules and regulations.</li>
          </ul>
        </div>
        <div className="p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Why It Matters</h3>
          <p className="text-black mt-2">
            Our app brings everything together to make tax filing quick, accurate, and stress-free. By simplifying the process, you can avoid penalties, maximize your savings, and focus on what matters most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;