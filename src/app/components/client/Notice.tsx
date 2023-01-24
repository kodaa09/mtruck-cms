"use client";
import { NoticeType } from "@/types/NoticeType";
import { ImQuotesLeft } from "react-icons/im";

export default function Notice({ notice, author }: NoticeType) {
  return (
    <div className="notice">
      <div className="notice-wrapper">
        <ImQuotesLeft className="notice-ico"/>
        <div className="notice-content-wrapper">
          <p className="notice-content">{notice}</p>
          <p className="notice-auhtor">{author}</p>
        </div>
      </div>
    </div>
  );
}
