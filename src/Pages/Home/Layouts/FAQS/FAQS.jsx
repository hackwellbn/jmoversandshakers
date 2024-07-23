import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./FAQS.css"
const faqs = [
  {
    question: 'How do I schedule a move?',
    answer: 'You can schedule a move by contacting us through our website or calling our customer service number.'
  },
  {
    question: 'How are your prices calculated?',
    answer: 'Our prices are calculated based on the distance, volume, and additional services required.'
  },
  // Add more FAQs here
];

const FAQS = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="faq-search"
      />
      {filteredFaqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            {faq.question}
            <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} className="faq-icon" />
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQS;
