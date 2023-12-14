import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import Header from './components/Header';

function App() {
  return (
    <>
      <ScrollView>
        <Text style={styles.titulo}>Que hacer en Paris</Text>
        <Header />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
});

export default App;
