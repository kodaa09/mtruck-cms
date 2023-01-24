type ButtonProps = {
  text: string;
  image?: string;
  alt?: string;
};

export default function Button({ text, image, alt }: ButtonProps) {
  return (
    <div className="button">
      {image && <img src={image} alt={alt} />}
      <button className="button-action">{text}</button>
    </div>
  );
}