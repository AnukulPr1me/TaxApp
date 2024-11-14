import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function TaxCalculator() {
  const summaryRef = useRef();

  // State for step navigation
  const [step, setStep] = useState(1);

  // State to hold income and deduction data
  const [basicSalary, setBasicSalary] = useState(0);
  const [hra, setHra] = useState(0);
  const [leaveAllowance, setLeaveAllowance] = useState(0);
  const [otherAllowance, setOtherAllowance] = useState(0);
  const [standardDeduction] = useState(50000);
  const [otherDeductions, setOtherDeductions] = useState(0);
  const [lifeInsurance, setLifeInsurance] = useState(0);
  const [childEducation, setChildEducation] = useState(0);
  const [healthInsurance, setHealthInsurance] = useState(0);
  const [homeLoanInterest, setHomeLoanInterest] = useState(0);
  const [section80CInvestments, setSection80CInvestments] = useState(0);

  // State for calculated results
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [estimatedTax, setEstimatedTax] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  // Calculate the taxable income
  const calculateTaxableIncome = () => {
    const totalIncome = parseFloat(basicSalary) + parseFloat(hra) + parseFloat(leaveAllowance) + parseFloat(otherAllowance);
    const totalDeductions = parseFloat(standardDeduction) + parseFloat(otherDeductions) + parseFloat(lifeInsurance) +
      parseFloat(childEducation) + parseFloat(healthInsurance) + parseFloat(homeLoanInterest) + parseFloat(section80CInvestments);
    const incomeAfterDeductions = totalIncome - totalDeductions;
    setTaxableIncome(incomeAfterDeductions > 0 ? incomeAfterDeductions : 0);
    return incomeAfterDeductions > 0 ? incomeAfterDeductions : 0;
  };

  // Calculate the tax and move to the Calculation section
  const calculateTax = () => {
    const income = calculateTaxableIncome();
    let tax = 0;
    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
      tax = 12500 + (income - 500000) * 0.2;
    } else {
      tax = 112500 + (income - 1000000) * 0.3;
    }
    setEstimatedTax(tax);
    setShowSummary(true);
    setStep(3); // Move to Calculation section
  };

  // Function to download the report as PDF
  const downloadPDF = () => {
    html2canvas(summaryRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save('Tax_Report.pdf');
    });
  };

  // Navigation handlers
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#4CAF50' }}>Income Tax Calculator</h2>

      {/* Step-Based Form */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        
        {/* Income Section */}
        {step === 1 && (
          <div>
            <h3>Income Details</h3>
            <div style={inputContainerStyle}>
              <label>Basic Salary:</label>
              <input type="number" value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} placeholder="Enter Basic Salary" />
            </div>
            <div style={inputContainerStyle}>
              <label>House Rent Allowance (HRA):</label>
              <input type="number" value={hra} onChange={(e) => setHra(e.target.value)} placeholder="Enter HRA" />
            </div>
            <div style={inputContainerStyle}>
              <label>Leave Allowance:</label>
              <input type="number" value={leaveAllowance} onChange={(e) => setLeaveAllowance(e.target.value)} placeholder="Enter Leave Allowance" />
            </div>
            <div style={inputContainerStyle}>
              <label>Other Allowances:</label>
              <input type="number" value={otherAllowance} onChange={(e) => setOtherAllowance(e.target.value)} placeholder="Enter Other Allowances" />
            </div>
            <button onClick={nextStep} style={buttonStyle}>Next</button>
          </div>
        )}

        {/* Deduction Section */}
        {step === 2 && (
          <div>
            <h3>Deduction Details</h3>
            <div style={inputContainerStyle}>
              <label>Other Deductions:</label>
              <input type="number" value={otherDeductions} onChange={(e) => setOtherDeductions(e.target.value)} placeholder="Enter Other Deductions" />
            </div>
            <div style={inputContainerStyle}>
              <label>Life Insurance Premium:</label>
              <input type="number" value={lifeInsurance} onChange={(e) => setLifeInsurance(e.target.value)} placeholder="Enter Life Insurance Premium" />
            </div>
            <div style={inputContainerStyle}>
              <label>Child Education Fees:</label>
              <input type="number" value={childEducation} onChange={(e) => setChildEducation(e.target.value)} placeholder="Enter Child Education Fees" />
            </div>
            <div style={inputContainerStyle}>
              <label>Health Insurance Premium:</label>
              <input type="number" value={healthInsurance} onChange={(e) => setHealthInsurance(e.target.value)} placeholder="Enter Health Insurance Premium" />
            </div>
            <div style={inputContainerStyle}>
              <label>Home Loan Interest:</label>
              <input type="number" value={homeLoanInterest} onChange={(e) => setHomeLoanInterest(e.target.value)} placeholder="Enter Home Loan Interest" />
            </div>
            <div style={inputContainerStyle}>
              <label>Investments under Section 80C:</label>
              <input type="number" value={section80CInvestments} onChange={(e) => setSection80CInvestments(e.target.value)} placeholder="Enter 80C Investments" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={prevStep} style={buttonStyle}>Previous</button>
              <button onClick={calculateTax} style={buttonStyle}>Calculate</button>
            </div>
          </div>
        )}

        {/* Calculation Section */}
        {step === 3 && showSummary && (
          <div>
            <h3>Calculation</h3>
            <div ref={summaryRef} style={{ backgroundColor: '#e6f5e9', padding: '15px', borderRadius: '10px', marginTop: '20px' }}>
              <h4>Summary of Inputs:</h4>
              <p><strong>Basic Salary:</strong> ₹{basicSalary}</p>
              <p><strong>House Rent Allowance (HRA):</strong> ₹{hra}</p>
              <p><strong>Leave Allowance:</strong> ₹{leaveAllowance}</p>
              <p><strong>Other Allowances:</strong> ₹{otherAllowance}</p>
              <p><strong>Standard Deduction:</strong> ₹{standardDeduction}</p>
              <p><strong>Other Deductions:</strong> ₹{otherDeductions}</p>
              <p><strong>Life Insurance Premium:</strong> ₹{lifeInsurance}</p>
              <p><strong>Child Education Fees:</strong> ₹{childEducation}</p>
              <p><strong>Health Insurance Premium:</strong> ₹{healthInsurance}</p>
              <p><strong>Home Loan Interest:</strong> ₹{homeLoanInterest}</p>
              <p><strong>Investments under Section 80C:</strong> ₹{section80CInvestments}</p>
              <h4>Calculation Results:</h4>
              <p><strong>Taxable Income:</strong> ₹{taxableIncome}</p>
              <p><strong>Estimated Tax:</strong> ₹{estimatedTax}</p>
            </div>
            <button onClick={downloadPDF} style={{ ...buttonStyle, marginTop: '20px' }}>Download Report</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Styling for form elements
const inputContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 0',
  alignItems: 'center'
};

// Styling for buttons
const buttonStyle = {
  padding: '10px 15px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#4CAF50',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default TaxCalculator;
