"use client";
import { FaqType } from "@/types/FaqType";
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

export default function Faq({ id, question, response }: FaqType) {
  return (
    <div className="faq">
      <div className="faq-wrapper">
        <div id="accordionGroup" className="faq-accordion">
          <div className="faq-content">
            <h3 className="faq-title">
              <button type="button" aria-expanded="false" className="faq-accordion-trigger" aria-controls={"faq-" + id} id={"accordionFaq-" + id}>
                <span className="faq-accordion-title">{question}</span>
                <RiArrowUpSFill size={25}/>
                {/* <RiArrowDownSFill size={25} /> */}
              </button>
            </h3>
            <div id={"faq-" + id} className="faq-accordion-panel" role="region" aria-labelledby={"accordionFaq-" + id}>
              <div>{response}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
