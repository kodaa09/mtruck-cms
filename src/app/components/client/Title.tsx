"use client";
import { Fade } from "react-awesome-reveal";

type TitleType = {
  title: string;
};

export default function Title({ title }: TitleType) {
  return (
    <Fade duration={2500}>
      <h2 className="title-element">{title}</h2>;
    </Fade>
  );
}