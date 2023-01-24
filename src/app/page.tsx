import Title from "./components/client/Title";
import Banner from "./components/server/Banner";
import CardContainer from "./components/server/Card/CardContainer";
import FaqContainer from "./components/server/FaqContainer";
import NoticeContainer from "./components/server/NoticeContainer";
import ServiceContainer from "./components/server/Service/ServiceContainer";

export default function Home() {
  return (
    <main className="home">
      {/* @ts-expect-error Server Component */}
      <Banner />
      {/* @ts-expect-error Server Component */}
      <ServiceContainer />
      {/* @ts-expect-error Server Component */}
      <CardContainer />
      {/* @ts-expect-error Server Component */}
      <FaqContainer />
      <NoticeContainer />
    </main>
  );
}
