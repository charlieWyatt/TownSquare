import React from 'react';
import { FlatList } from 'react-native';
import { TweetType } from '../types/tweet';
import Tweet from './Tweet';

type FeedProps = {
  data: TweetType[];
};

const Feed: React.FC<FeedProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Tweet tweet={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Feed;