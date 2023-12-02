type User = {
  id: string;
  name: string;
  username: string;
  avatar: string;
};

export type Tweet = {
  id: string;
  user: User;
  content: string;
  createdAt: string;
  likes: number;
  retweets: number;
  replies: number;
};