import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { searchTweets } from '../services/tweet';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = async () => {
    const results = await searchTweets(searchTerm);
    navigation.navigate('SearchResults', { results });
  };

  return (
    <View>
      <TextInput
        placeholder="Search Twitter"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchScreen;