import React from "react"
import { useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native'
import { Picker } from "@react-native-picker/picker"

const Formulario = () => {

  const [ animacionboton ] = useState(new Animated.Value(1))

  const animacionEntrada = () => {
    Animated.spring(animacionboton, {
      toValue: .75

    }).start()
  }

  const animacionSalida = () => {
    Animated.spring(animacionboton, {
      toValue: 1,
      // Rebote de animación
      friction: 4,
      tension: 30

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
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>
        <View>
          <Picker
            itemStyle={{ height: 120, backgroundColor: '#fff'}}
          >
            <Picker.Item label="-- Seleccione un país --" value="" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="México" value="MX " />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="costa Rica" value=" CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Peru" value="PE" />
          </Picker>
        </View>

        <TouchableWithoutFeedback
          onPressIn={animacionEntrada}
          onPressOut={animacionSalida }
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