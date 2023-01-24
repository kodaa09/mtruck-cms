import { FaqType, FaqTypeApi } from "@/types/FaqType";
import FaqService from "@/services/FaqService";
import Faq from "../client/Faq";
import Title from "../client/Title";

export default async function FaqContainer() {
  const faqs = await FaqService.getAllFaqs();

  return (
    <div className="faq-container">
      <div className="faq-container-wrapper">
      <div className="faq-container-header">
        <Title title="F.A.Q" />
        <a href="#contact" className="faq-btn">Poser une question</a>
      </div>
        {
          faqs.map((faq: FaqTypeApi) => (
            <Faq question={faq.attributes.question} response={faq.attributes.response} id={faq.id} />
          ))
        }
      </div>
    </div>
  );
}
