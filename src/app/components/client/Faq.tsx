"use client";

import { FaqType } from "@/types/FaqType";

export default function Faq({ id, question, response }: FaqType) {
  return (
    <div className="faq">
      <div className="faq-wrapper">
        <div id="accordionGroup" className="faq-accordion">
          <div className="faq-content">
            <h3 className="faq-title" data-faq-title>
              <button type="button" aria-expanded="true" className="accordion-trigger" aria-controls={"faq-" + id} id={"accordionFaq-" + "1"}>
                <span className="accordion-title">{question}</span>
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m7 10l5 5l5-5z"></path>
                </svg>
              </button>
            </h3>
            <div id={"faq-" + "1"} className="accordion-panel" role="region" aria-labelledby={"accordionFaq-" + "1"}>
              <div>{response}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
