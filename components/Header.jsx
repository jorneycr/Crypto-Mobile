import React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.encabezado}>CriptoMonedas</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontSize: 20,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    marginBottom: 30,
  },
});

export default Header;
