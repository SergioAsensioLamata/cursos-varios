import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react';
import Formulario from './components/Formularios';

export default function App() {

  const [ busqueda, setBusqueda ] = useState({
    ciudad: '',
    pais: ''
  })

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
          <Formulario 
            busqueda={busqueda}
            setBusqueda={setBusqueda}
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
