import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { postTweet } from '../services/tweet';

const PostScreen: React.FC = () => {
  const [tweet, setTweet] = useState('');
  const navigation = useNavigation();

  const handlePostTweet = async () => {
    try {
      await postTweet(tweet);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="What's happening?"
        value={tweet}
        onChangeText={setTweet}
      />
      <Button title="Tweet" onPress={handlePostTweet} />
    </View>
  );
};

export default PostScreen;