"use client";

import { useState } from "react";
import { Plus, Minus, Mail, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is finance analytics and how can it help my business?",
    answer:
      "Finance analytics helps you understand your financial data better, so you can make smarter decisions, spot trends, and improve your business strategy.",
  },
  {
    question: "How do I start using your finance analytics platform?",
    answer:
      "Getting started is easy. Simply sign up for an account, connect your data sources, and our platform will improvedlly begin analyzing your financial information.",
  },
  {
    question: "Is my financial data secure with your platform?",
    answer:
      "Yes, we take security very seriously. We use bank-level encryption and adhere to strict data privacy regulations to ensure your financial information remains confidential and secure.",
  },
  {
    question: "Can I customize the reports and dashboards?",
    answer:
      "Absolutely. Our platform offers highly customizable dashboards and reports, allowing you to focus on the metrics that matter most to your specific business needs.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="px-4 pb-4 md:px-8 md:pb-4 lg:px-4 lg:pb-4 ">
      <div className=" mx-auto p-6 md:p-10 lg:p-12 rounded-3xl bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column: Title & Contact */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-black text-white rounded-full">
                Support
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black">
                Frequently asked questions
              </h2>
            </div>

            {/* Still have questions card */}
            <div className="p-6 md:p-8 mt-8 md:mt-32 bg-gray-300 rounded-2xl">
              <div className="flex flex-col items-start space-y-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-medium text-gray-900">
                    Still have questions?
                  </h3>
                  <p className="mt-2 text-sm md:text-lg text-gray-600">
                    Can&apos;t find the answer you&apos;re looking for? Please
                    chat to our friendly team.
                  </p>
                </div>
                <button className="inline-flex cursor-pointer items-center px-4 py-2 md:px-6 md:py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
                  Get in touch
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="space-y-4 ">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`overflow-hidden transition-all duration-200 border rounded-2xl ${
                    openIndex === index
                      ? "bg-white border-gray-200 shadow-sm"
                      : "bg-gray-300 border-transparent hover:bg-gray-50"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none cursor-pointer  "
                  >
                    <span
                      className={`text-sm md:text-lg font-medium  ${
                        openIndex === index ? "text-gray-900" : "text-gray-600"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`ml-6 flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <div
                        className={`p-1 rounded-md ${
                          openIndex === index
                            ? "bg-black text-white"
                            : "text-gray-400"
                        }`}
                      >
                        {openIndex === index ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-sm md:text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
