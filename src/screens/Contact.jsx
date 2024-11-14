import React from 'react';
// Make sure to import the image with the correct path
import ContactUsLogo from "../assets/images/contactus.webp"; 

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 flex flex-col">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-700">Contact Us</h2>
        
        <div className="flex">
          {/* Form Section */}
          <div className="w-1/2 pr-8">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Mobile No"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 h-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full p-3 bg-primary_green text-white font-semibold rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
          
          {/* Image Section */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-3/4 h-3/4 bg-gray-200 flex items-center justify-center text-gray-500 text-xl rounded-lg">
              <img src={ContactUsLogo} alt="Contact Form" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
