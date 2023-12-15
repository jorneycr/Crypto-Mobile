import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = ({moneda, cripto, setMoneda, setCripto, setConsultaApi}) => {
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

  const cotizarPrecio = () => {
    if (moneda.trim() === '' || cripto.trim() === '') {
      mostrarAlerta();
      return;
    }
    setConsultaApi(true);
  };

  const mostrarAlerta = () => {
    Alert.alert('Error...', 'Ambos campos son obligatorios', [{text: 'OK'}]);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={coin => obtenerMoneda(coin)}>
        <Picker.Item label="- Selecione -" value="" />
        <Picker.Item label="Dolar" value="USD" />
        <Picker.Item label="Dolar Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
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
      <TouchableHighlight
        onPress={() => cotizarPrecio()}
        style={styles.cotizarBtn}>
        <Text style={styles.cotizarTexto}>Cotizar</Text>
      </TouchableHighlight>
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
  cotizarBtn: {
    backgroundColor: '#5E49E2',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 30,
  },
  cotizarTexto: {
    textAlign: 'center',
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Formulario;
