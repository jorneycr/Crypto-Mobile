import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Formulario = () => {
  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');

  const obtenerMoneda = coin => {
    setMoneda(coin);
  };
  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={coin => obtenerMoneda(coin)}>
        <Picker.Item label="- Selecione -" value="" />
        <Picker.Item label="Dolar" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Colon" value="CRC" />
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black.ttf',
    fontSize: 22,
    marginVertical: 20,
    textTransform: 'uppercase',
  },
});

export default Formulario;
