import Banner from "./components/server/Banner";
import CardContainer from "./components/server/Card/CardContainer";
import FaqContainer from "./components/client/FaqContainer";
import NoticeContainer from "./components/client/NoticeContainer";
import ServiceContainer from "./components/server/Service/ServiceContainer";
import PartnerContainer from "./components/client/PartnerContainer";
import ContactForm from "./components/server/ContactForm";

export default function Home() {
  return (
    <main className="home">
      {/* @ts-expect-error Server Component */}
      <Banner />
      {/* @ts-expect-error Server Component */}
      <ServiceContainer />
      {/* @ts-expect-error Server Component */}
      <CardContainer />
      <NoticeContainer />
      {/* <FaqContainer /> */}
      <ContactForm />
      <PartnerContainer />
    </main>
  );
}