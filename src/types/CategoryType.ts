export type CategoryType = {
  id: number;
  attributes: {
    text: string;
    cta: string;
    name: string;
    alt: string;
    image: {
      data: {
        id: string;
        attributes: {
          url: string;
        };
      };
    };
  };
};
