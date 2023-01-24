import { BannerType } from "@/types/BannerType";

class BannerService {
  static instance: BannerService;

  private constructor() {}

  public static getInstance(): BannerService {
    if (!BannerService.instance) {
      BannerService.instance = new BannerService();
    }
    return BannerService.instance;
  }

  async getAllBanners() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/banners?populate=*`);
    if (!res.ok) throw new Error("Failed to fetch banners data");
    const json = await res.json();
    return json.data;
  }

  async getBannerById(id: number) {
    let goodBanner: BannerType | undefined = undefined;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/banners?populate=*`);
    if (!res.ok) throw new Error(`Failed to fetch banner ${id} data`);
    const json = await res.json();
    const banners = json.data;
    banners.forEach((banner: BannerType) => {
      if (banner.id === id) goodBanner = banner;
    });
    return goodBanner;
  }

  async getBannerByName(name: string): Promise<BannerType | undefined>{
    let goodBanner: BannerType | undefined = undefined;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/banners?populate=*`);
    if (!res.ok) throw new Error(`Failed to fetch banner ${name} data`);
    const json = await res.json();
    const banners = json.data;
    banners.forEach((banner: BannerType) => {
      if (banner.attributes.name === name) goodBanner = banner;
    });
    return goodBanner;
  }
}

export default BannerService.getInstance();
