import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import CustomButton from './CustomButton';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    answerRefs.current.forEach((el, index) => {
      if (el) {
        if (index === activeIndex) {
          gsap.to(el, { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' });
        } else {
          gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
        }
      }
    });
  }, [activeIndex]);

  const faqData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript framework used mainly for developing mobile applications. It works by directly manipulating the browser’s HTML and CSS, making it very fast without any delays in loading content. React also refreshes the entire page every time an update happens, ensuring all data is always up-to-date.'
    },
    {
      question: 'What is an accordion?',
      answer: 'An accordion is a type of UI component where all content is visible all the time. Instead of expanding or collapsing, it uses scrollbars to show content that doesn’t fit within the section. It’s best for displaying static content with little need for user interaction or animation.'
    },
    {
      question: 'How do I create an accordion in React?',
      answer: 'You can create an accordion in React by using loops and hiding each section individually with a loop. No state or extra logic is required, as you can directly change the visibility of each part using plain JavaScript. This approach works best with multiple nested loops to simplify the structure.'
    }
  ];
  

  return (
    <div className="w-full">
      {faqData.map((faq, index) => (
        <div key={index} className="border-b">
          <div
            className="cursor-pointer py-4 px-6 bg-gray-200 flex justify-between items-center"
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
