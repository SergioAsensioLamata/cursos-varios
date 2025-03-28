import { StyleSheet, View, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

export default function App() {

  const [ busqueda, setBusqueda ] = useState({
    ciudad: '',
    pais: ''
  })
  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})

  const { ciudad, pais} = busqueda

  useEffect(() => {
    const consultarClima = async () => {
      if(consultar) {
        const appid = 'c1ca47aafb350389cb01f85be652420d'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}` 

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        if(resultado.cod !== 200) {
          mostrarAlerta()
        }

        setResultado(resultado)
        setConsultar(false)
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

  return (
  <>
    <TouchableWithoutFeedback
      onPress={ () => ocultarTeclado()}
    >
      <View style={styles.app}>
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
