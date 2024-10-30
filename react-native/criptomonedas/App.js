import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView, ActivityIndicator } from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import axios from 'axios';
import { useFonts } from "expo-font"

export default function App() {
  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptomoneda] = useState('')
  const [consultarAPI, setConsultarAPI] = useState(false)
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect( () => {
    const cotizarCriptomoneda = async () => {
      if(consultarAPI) {
        // Consultar API para obtener la cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const resultado = await axios.get(url)

        setCargando(true)

        // Ocultar el spinner y mostrar el resultado
        setTimeout(()=> {
          setResultado(resultado.data.DISPLAY[criptomoneda][moneda])
          setConsultarAPI(false)
          setCargando(false)
        }, 3000)
      }

    }
    cotizarCriptomoneda()
  }, [consultarAPI])

  // Mostrar el spinner o el componente
  const componente = cargando ? <ActivityIndicator size='large' color='#5E49E2'/> : <Cotizacion resultado={resultado}/>

  // Importacion de las fuentes de las letras
  const[loaded] = useFonts({
    LatoBlack : require('./assets/fonts/Lato-Black.ttf'),
    LatoRegular:  require('./assets/fonts/Lato-Regular.ttf')
  })

  if(!loaded) return null

  return (
    <>
      <ScrollView>
        <Header style={styles.contenedorBase}/>

        <Image 
          style={styles.imagen}
          source={ require('./assets/img/cryptomonedas.png')}
        />

        <View style={styles.contenido}>
          <Formulario 
            moneda={moneda}
            setMoneda={setMoneda}
            criptomoneda={criptomoneda}
            setCriptomoneda={setCriptomoneda}
            setConsultarAPI={setConsultarAPI}
          />
        </View>

        <View style={{ marginTop: 40 }}>
          {componente}
        </View>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contenedorBase: {
    marginVertical: 10,
  },

  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },

  contenido: {
    marginHorizontal: '2.5%'
  }
});
