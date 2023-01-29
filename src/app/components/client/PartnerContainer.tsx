"use client";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import Image from "next/image";
import PartnerService from "@/services/PartnerService";

export default function PartnerContainer() {
  const images = PartnerService.getAllImages();
  return (
    <div className="partner-container">
      <div className="partner-container-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          slidesPerView={5}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          autoplay
          className="mySwiper">
          {images.map((image, index) => (
            <SwiperSlide className="partner-container-swiperslide" key={index}>
              <div className="partner-container-media">
                <Image src={image.url} alt={image.url} width={image.width} height={image.height} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
