import { StyleSheet, View, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Constants from "expo-constants"

export default function App() {

  const [ busqueda, setBusqueda ] = useState({
    ciudad: '',
    pais: ''
  })
  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})
  const [bgcolor, setBgcolor] = useState('rgb(71,149,212)')

  const { ciudad, pais} = busqueda

  useEffect(() => {
    const consultarClima = async () => {
      if(consultar) {
        const appid = Constants.expoConfig.extra.weatherApiKey
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}` 

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        if(resultado.cod !== 200) {
          mostrarAlerta()

        }

        setResultado(resultado)
        setConsultar(false)

        // Modifica los colores de fondo en las consultas
        const kelvin = 273.15
        const { main } = resultado
        const actual = main.temp - kelvin

        if(actual < 10 ){
          setBgcolor('rgb(105, 108, 149)')
        } else if(actual >= 10 && actual < 25) {
          setBgcolor('rgb(71, 149, 212)')
        } else {
          setBgcolor('rgb(178, 28, 61)')
        }

      }
    }    
    consultarClima()
  }, [consultar])

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'No hay resultados, intenta con otra ciudad o país',
      [{text: 'OK'}]
    )
  }

  const ocultarTeclado = () => {
    Keyboard.dismiss()
  }

  const bgColorApp = {
    backgroundColor: bgcolor
  }

  return (
  <>
    <TouchableWithoutFeedback
      onPress={ () => ocultarTeclado()}
    >
      <View style={[styles.app, bgColorApp]}>
        <View style={styles.contenido}>
          <Clima 
            resultado={resultado}
          />
          <Formulario 
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            setConsultar={setConsultar}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center',
  },

  contenido: {
    marginHorizontal: '2.5%'
  }
});
