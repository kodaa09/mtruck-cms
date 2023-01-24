export type BannerType = {
  id: number;
  attributes: {
    text: string;
    cta: string;
    name: string;
    media : {
      data: {
        id: string,
        attributes: {
          url: string
        }
      }
    }
  };
};