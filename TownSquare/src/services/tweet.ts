import { Tweet } from '../types/tweet';
import { User } from '../types/user';

interface ITweetService {
  getTweets(): Promise<Tweet[]>;
  postTweet(user: User, content: string): Promise<Tweet>;
}

class TweetService implements ITweetService {
  async getTweets(): Promise<Tweet[]> {
    // TODO: Implement API call to get tweets
    return [];
  }

  async postTweet(user: User, content: string): Promise<Tweet> {
    // TODO: Implement API call to post a tweet
    return { id: '', user, content, likes: 0, retweets: 0, replies: 0, createdAt: new Date() };
  }
}

export default new TweetService();