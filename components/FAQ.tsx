"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What technologies do you use?",
    answer:
      "I work with Python, Django, Next.js, React, TypeScript, HTML, CSS and Linux.",
  },
  {
    question: "Are you available for internships?",
    answer:
      "Yes! I'm actively looking for internship opportunities to improve my development skills.",
  },
  {
    question: "Where are you based?",
    answer:
      "I'm based in India and open to remote opportunities.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq">
      <div className="content-card">
        <h2 className="section-title">Frequently Asked Questions</h2>

        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {faq.question}
            </button>

            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}