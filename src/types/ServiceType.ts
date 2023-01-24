export type ServiceType = {
  image: string;
  text: string;
};

export type ServiceTypeApi = {
  id: number;
  attributes: {
    text: string;
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
};
