import React from "react"
import { useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Animated, Alert } from 'react-native'
import { Picker } from "@react-native-picker/picker"


const Formulario = ({ busqueda, setBusqueda, setConsultar}) => {

  const { pais, ciudad } = busqueda 
  const [ animacionboton ] = useState(new Animated.Value(1))

  const consultarClima = () => {
    if(pais.trim() === '' || ciudad.trim() === '') {
      mostrarAlerta()

      return
    }

    // Consultar la api
    setConsultar(true)
  }

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Agrega una Ciudad y País para la busqueda',
      [{text: 'Entendido'}]
    )
  }

  const animacionEntrada = () => {
    Animated.spring(animacionboton, {
      toValue: .75,
      useNativeDriver: false

    }).start()
  }

  const animacionSalida = () => {
    Animated.spring(animacionboton, {
      toValue: 1,
      // Rebote de animación
      friction: 4,
      tension: 30,
      useNativeDriver: false
      
    }).start()
  }

  const estiloAnimacion = {
    transform: [{ scale: animacionboton }]
  }

  return ( 
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            value={ciudad}
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="#666"
            onChangeText={ ciudad => setBusqueda({...busqueda, ciudad})}
          />
        </View>
        <View>
          <Picker
            itemStyle={{ height: 120, backgroundColor: '#fff'}}
            selectedValue={pais}
            onValueChange={ pais => setBusqueda({ ...busqueda, pais})}
          >
            <Picker.Item label="-- Seleccione un país --" value="" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="México" value="MX " />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value=" CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Peru" value="PE" />
          </Picker>
        </View>

        <TouchableWithoutFeedback
          onPressIn={animacionEntrada}
          onPressOut={animacionSalida }
          onPress={consultarClima}
        >
          <Animated.View style={[ styles.btnBuscar, estiloAnimacion ]}>
            <Text style={styles.textoBuscar}>Buscar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },

  btnBuscar: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center'
  },

  textoBuscar:{
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18
  }

})
 
export default Formulario;