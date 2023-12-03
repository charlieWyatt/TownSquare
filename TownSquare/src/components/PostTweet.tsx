import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { postTweet } from '../services/tweet';

const PostTweet: React.FC = () => {
  const [tweetText, setTweetText] = useState('');
  const navigation = useNavigation();

  const handlePostTweet = async () => {
    try {
      await postTweet(tweetText);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="What's happening?"
        value={tweetText}
        onChangeText={setTweetText}
      />
      <Button title="Tweet" onPress={handlePostTweet} />
    </View>
  );
};

export default PostTweet;