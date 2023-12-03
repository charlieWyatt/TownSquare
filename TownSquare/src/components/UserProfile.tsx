import React from 'react';
import { View, Text, Image } from 'react-native';
import { User } from '../types/user';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <View>
      <Image source={{ uri: user.profileImage }} />
      <Text>{user.name}</Text>
      <Text>{user.username}</Text>
      <Text>{user.bio}</Text>
    </View>
  );
};

export default UserProfile;