import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = () => {
  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [criptos, setCriptos] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);
      setCriptos(resultado.data.Data);
    };
    consultarApi();
  }, []);

  const obtenerMoneda = coin => {
    setMoneda(coin);
  };

  const obtenerCrypto = crypto => {
    setCripto(crypto);
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
      <Picker
        selectedValue={cripto}
        onValueChange={cripto => obtenerCrypto(cripto)}>
        <Picker.Item label="- Selecione -" value="" />
        {criptos.map(item => (
          <Picker.Item
            key={item.CoinInfo.Id}
            label={item.CoinInfo.FullName}
            value={item.CoinInfo.Name}
          />
        ))}
      </Picker>
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
