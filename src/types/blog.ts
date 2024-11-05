export type Blog = {
  id: string;
  authorId: string;
  title: string;
  slug: string;
  content: string;
  coverUrl: string;
  views: number;
  createdDate: string;
  updatedDate: string;
  tags: string[];
  author: {
    id: string;
    userName: string;
    imageUrl: string;
  };
};
