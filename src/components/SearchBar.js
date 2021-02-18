import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

const SearchBar = ({ term, onTermChange, onTermSubmit }) => (
  <View style={styles.container}>
    <Feather name="search" style={styles.iconStyle} />
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Search"
      style={styles.searchInput}
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
    />
  </View>
);

export default SearchBar;
