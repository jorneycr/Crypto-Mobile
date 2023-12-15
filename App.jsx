import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';

function App() {
  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [consultarApi, setConsultaApi] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const cotizarCrypto = async () => {
      if (consultarApi) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
        const res = await axios.get(url);
        setResultado(res.data.DISPLAY[cripto][moneda]);
        setConsultaApi(false);
      }
    };
    cotizarCrypto();
  }, [consultarApi]);
  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            cripto={cripto}
            setCripto={setCripto}
            setMoneda={setMoneda}
            setConsultaApi={setConsultaApi}
          />
        </View>
        <Cotizacion resultado={resultado} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
