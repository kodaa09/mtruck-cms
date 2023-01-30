import { ServiceType } from "@/types/ServiceType";

export default function Service({ image, text }: ServiceType) {
  return (
    <div className="service">
      <div className="service-wrapper">
        <div className="service-media">
          <img src={image} alt="" />
        </div>
        <div className="service-content">
          <p className="service-txt">{text}</p>
        </div>
      </div>
    </div>
  );
}
