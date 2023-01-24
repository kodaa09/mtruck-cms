"use client";

type TitleType = {
  title: string;
};

export default function Title({ title }: TitleType) {
  return <h2 className="title-element">{title}</h2>;
}
