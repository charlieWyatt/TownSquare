import React from 'react';
import { View, Text, Image } from 'react-native';
import { TweetType } from '../types/tweet';

interface TweetProps {
  tweet: TweetType;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  return (
    <View>
      <View>
        <Image source={{ uri: tweet.user.image }} />
        <Text>{tweet.user.name}</Text>
      </View>
      <Text>{tweet.content}</Text>
      <Image source={{ uri: tweet.image }} />
    </View>
  );
};

export default Tweet;