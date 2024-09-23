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
    { question: "What types of sweets do you offer?", answer: "We offer a variety of sweets, including traditional Indian mithai, chocolates, and fusion desserts." },
    { question: "Do you have sugar-free options?", answer: "Yes, we have a selection of sugar-free sweets available." },
    { question: "What is the shelf life of your sweets?", answer: "Our sweets typically have a shelf life of 1-2 weeks, depending on the type. Please check the packaging for specific details." },
    { question: "Can I customize my order?", answer: "Absolutely! We offer customization options for special occasions. Please contact us for more details." },
    { question: "What payment methods do you accept?", answer: "We accept various payment methods, including credit/debit cards, UPI, and cash on delivery." },
    { question: "Do you offer bulk orders for events?", answer: "Yes, we offer bulk orders for weddings, parties, and other events. Please reach out to us for pricing and availability." },
    { question: "How do I store the sweets?", answer: "For best results, store the sweets in a cool, dry place. Refrigeration is recommended for some items." },
    { question: "What is your return policy?", answer: "Due to the nature of our products, we do not accept returns. However, please contact us if you have any issues with your order." },
  ];
  

  return (
    <div className="faq-section mt-24 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Frequently Asked Questions
        <span className="block h-1 w-16 md:w-24 bg-orange-500 mt-2"></span>
      </h2>
      <div className="max-w-4xl">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
