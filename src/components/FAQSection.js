import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="faq-item bg-white shadow-md rounded-md p-4 mb-4 transition-transform transform hover:scale-105">
      <button
        className="w-full flex justify-between items-center focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold text-gray-800">{question}</h2>
        <FontAwesomeIcon icon={isExpanded ? faMinus : faPlus} className="text-gray-500" />
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden mt-2 text-gray-600"
      >
        <p className="pt-2">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { question: "What is the return policy?", answer: "You can return the item within 30 days." },
    { question: "How do I track my order?", answer: "You will receive a tracking link via email." },
    { question: "Can I cancel my order?", answer: "Yes, cancellations are allowed within 24 hours of placing the order." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship internationally with applicable charges." },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-section mt-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="max-w-4xl">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
