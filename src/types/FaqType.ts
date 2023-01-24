export type FaqType = {
  id: number;
  question: string;
  response: string;
};

export type FaqTypeApi = {
  id: number;
  attributes: {
    question: string;
    response: string;
  };
};