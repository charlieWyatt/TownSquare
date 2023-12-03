import React from 'react';
import { View, Text } from 'react-native';
import UserProfile from '../components/UserProfile';
import { User } from '../types/user';

interface ProfileScreenProps {
  user: User;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ user }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <UserProfile user={user} />
    </View>
  );
};

export default ProfileScreen;