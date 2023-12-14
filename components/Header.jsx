import React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.encabezado}>Crypto</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
  },
});

export default Header;
