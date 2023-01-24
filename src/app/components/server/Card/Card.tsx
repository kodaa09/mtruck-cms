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
          <a className="card-link" href="">{cta}</a>
        </div>
        <div className="card-media">
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
}
