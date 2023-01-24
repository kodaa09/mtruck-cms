import { ServiceType } from "@/types/ServiceType";

export default function Service({ image, text }: ServiceType) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div className="service" id="service">
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
