import Link from "next/link";

type CardType = {
  image: string;
  text: string;
  cta: string;
  alt: string;
};

export default function Card({ text, image, alt, cta }: CardType) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-content">
          <p className="card-txt">{text}</p>
          <Link className="card-link" href="/vehicules">
            {cta}
          </Link>
        </div>
        <div className="card-media">
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
}
