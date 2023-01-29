"use client";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { FaqTypeApi } from "@/types/FaqType";
import FaqService from "@/services/FaqService";
import Title from "./Title";
import { use } from "react";

export default function FaqContainer() {
  const faqs = use(FaqService.getAllFaqs());

  return (
    <div className="faq-container">
      <div className="faq-container-wrapper">
        <div className="faq-container-header">
          <Title title="F.A.Q" />
          <a href="#contact" className="faq-btn">
            Poser une question
          </a>
        </div>
        <Accordion allowZeroExpanded preExpanded={[1]}>
          {faqs.map((faq: FaqTypeApi) => (
            <AccordionItem className="faq-content" uuid={faq.id} key={faq.id}>
              <AccordionItemHeading className="faq-title">
                <AccordionItemButton className="faq-item-btn">
                  {faq.attributes.question}
                  <AccordionItemState>{({ expanded }) => (expanded ? <RiArrowUpSFill size={25} /> : <RiArrowDownSFill size={25} />)}</AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{faq.attributes.response}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
