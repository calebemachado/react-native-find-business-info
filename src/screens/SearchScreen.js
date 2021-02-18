import React, { useState } from 'react';
import {
  Text, StyleSheet, ScrollView,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => results.filter((result) => result.price === price);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text style={styles.title}>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
        <ResultsList results={filterResultsByPrice('$$$$')} title="Take My Money" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
