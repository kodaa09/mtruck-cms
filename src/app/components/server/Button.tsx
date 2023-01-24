import Link from "next/link";

type ButtonProps = {
  text: string;
  image?: string;
  alt?: string;
};

export default function Button({ text, image, alt }: ButtonProps) {
  return (
    <div className="button">
      {image && <img src={image} alt={alt} />}
      <Link href="/vehicules" className="button-action">{text}</Link>
    </div>
  );
}
