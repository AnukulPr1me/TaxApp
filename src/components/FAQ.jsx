import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const FAQ = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const answerRefs = useRef([]);

  const toggleAccordion = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  useEffect(() => {
    answerRefs.current.forEach((el, index) => {
      if (el) {
        if (activeIndexes.includes(index)) {
          gsap.to(el, { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' });
        } else {
          gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
        }
      }
    });
  }, [activeIndexes]);

  const faqData = [
    {
      question: 'What is income tax?',
      answer: 'Income tax is a tax imposed by the government on the income earned by individuals and businesses. It is calculated as a percentage of the income and is used to fund public services.'
    },
    {
      question: 'When is the tax filing deadline?',
      answer: 'The tax filing deadline varies by country, but it is generally in the first half of the year. For example, in the United States, the deadline for filing individual income taxes is usually April 15.'
    },
    {
      question: 'What are tax deductions and credits?',
      answer: 'Tax deductions reduce your taxable income, while tax credits directly reduce the amount of tax you owe. Common deductions include mortgage interest, while credits might include education or child tax credits.'
    },
    {
      question: 'How do I file my taxes?',
      answer: 'You can file taxes through online tax software, by hiring a tax professional, or using government portals for electronic filing. Some countries offer free filing options for certain income levels.'
    },
    {
      question: 'What happens if I miss the tax deadline?',
      answer: 'If you miss the deadline, you may incur penalties or interest on the amount owed. Many tax authorities allow you to file a late return, and in some cases, you can request an extension.'
    }
  ];

  return (
    <div className="w-full px-2 md:px-[110px]">
      {faqData.map((faq, index) => (
        <div key={index} className="border-b">
          <div
            className="cursor-pointer py-4 px-6 flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <p className="font-semibold text-[20px]">{faq.question}</p>
            <button className="roundedButton">+</button>
          </div>
          <div
            ref={(el) => (answerRefs.current[index] = el)}
            style={{ overflow: 'hidden', height: 0 }}
            className="px-6 bg-gray-100"
          >
            <p className="py-4">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
