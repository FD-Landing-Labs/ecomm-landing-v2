"use client";

import { useState } from "react";
import { Plus, Minus, Mail, ArrowRight } from "lucide-react";
import SocialMedia from "./social-media";
import placeholderData from "@/data/place_holder.json";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData = placeholderData.faq;
const faqs: FAQItem[] = faqData.items;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="px-4 pb-4 md:px-8 md:pb-4 lg:px-4 lg:pb-4">
      <div className=" mx-auto p-4 md:p-10 lg:p-12 rounded-3xl bg-gray-100 mb-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column: Title & Contact */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-black text-white rounded-full">
                {faqData.sectionLabel}
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-tighter font-medium capitalize text-black">
                {faqData.sectionTitle}
              </h2>
            </div>

            {/* Still have questions card */}
            <div className="p-4 mt-8 md:mt-32 bg-gray-200 rounded-2xl">
              <div className="flex flex-col items-start space-y-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl  font-medium text-gray-900">
                    {faqData.contactCard.title}
                  </h3>
                  <p className="mt-2 text-base tracking-tighter text-gray-600">
                    {faqData.contactCard.description}
                  </p>
                </div>
                <button className="inline-flex cursor-pointer items-center px-4 py-2 md:px-6 md:py-3 text-base tracking-tighter capitalize font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
                  {faqData.contactCard.ctaText}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="md:col-span-2">
            <div className="space-y-4 ">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`overflow-hidden transition-all duration-200 border rounded-2xl ${openIndex === index
                    ? "bg-white border-gray-00 shadow-sm"
                    : "bg-gray-200 border-transparent hover:bg-gray-50"
                    }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none cursor-pointer  "
                  >
                    <span
                      className={`text-lg md:text-xl tracking-tighter font-medium  ${openIndex === index ? "text-gray-900" : "text-gray-600"
                        }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`ml-6 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                        }`}
                    >
                      <div
                        className={`p-1 rounded-md ${openIndex === index
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
                    className={`transition-all duration-300 ease-in-out ${openIndex === index
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="px-6 pb-6 text-base md:text-lg tracking-tighter text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SocialMedia />
    </section>
  );
}
