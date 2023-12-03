import { TweetType } from '../types/tweet';
import { User } from '../types/user';

interface ITweetService {
  getTweets(): Promise<TweetType[]>;
  postTweet(user: User, content: string): Promise<TweetType>;
}

class TweetService implements ITweetService {
  async getTweets(): Promise<TweetType[]> {
    // TODO: Implement API call to get tweets
    return [];
  }

  async postTweet(user: User, content: string): Promise<TweetType> {
    // TODO: Implement API call to post a tweet
    return { id: '', user, content, likes: 0, retweets: 0, replies: 0, createdAt: new Date() };
  }
}

export default new TweetService();