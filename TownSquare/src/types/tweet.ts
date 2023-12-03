type User = {
  id: string;
  name: string;
  username: string;
  avatar: string;
};

export type TweetType = {
  id: string;
  user: User;
  content: string;
  createdAt: string;
  likes: number;
  retweets: number;
  replies: number;
};