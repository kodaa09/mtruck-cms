"use client";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import NoticeService from "@/services/NoticeService";
import Notice from "../client/Notice";
import Title from "../client/Title";
import { NoticeTypeApi } from "@/types/NoticeType";
import { use } from "react";

export default function NoticeContainer() {
  const notices = use(NoticeService.getAllNotices());
  return (
    <div className="notice-container">
      <div className="notice-container-wrapper">
        <Title title="Vos avis" />

        <div className="notice-container-content">
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            pagination={{ clickable: true }}
            className="mySwiper">
            {notices.map((notice: NoticeTypeApi) => (
              <SwiperSlide key={notice.id}>
                <Notice notice={notice.attributes.notice} author={notice.attributes.author} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
