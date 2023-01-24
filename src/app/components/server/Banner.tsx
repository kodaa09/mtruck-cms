import Button from "./Button";
import BannerService from "@/services/BannerService";

export default async function Banner() {
  const homeBanner = await BannerService.getBannerByName("home banner");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const bgImage = {
    backgroundImage: homeBanner ? `url(${homeBanner.attributes.media.data.attributes.url})`: ''
  };

  return (
    <div className="banner" style={bgImage}>
      {
        homeBanner &&
        <div className="banner-wrapper">
          <h1 className="banner-title">{homeBanner.attributes.text}</h1>
          <Button text={homeBanner.attributes.cta} />
        </div>
      }
    </div>
  );
}