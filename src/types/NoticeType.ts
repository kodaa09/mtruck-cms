export type NoticeType = {
  notice: string;
  author: string;
};

export type NoticeTypeApi = {
  id: number;
  attributes: {
    notice: string;
    author: string;
  };
};
