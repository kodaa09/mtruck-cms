import Service from "./Service";
import ServiceService from "@/services/ServiceService";
import { ServiceTypeApi } from "@/types/ServiceType";
import Title from "../../client/Title";

export default async function ServiceContainer() {
  const services = await ServiceService.getAllServices();

  return (
    <div className="service-container" id="service">
      <div className="service-container-wrapper">
      <Title title="Nos services" />
        <div className="service-container-container">
          {services.map((service: ServiceTypeApi) => (
            <Service image={service.attributes.image.data.attributes.url} text={service.attributes.text} key={service.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
