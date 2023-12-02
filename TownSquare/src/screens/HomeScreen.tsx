import React from 'react';
import { View, Text } from 'react-native';
import Feed from '../components/Feed';

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Feed />
    </View>
  );
};

export default HomeScreen;