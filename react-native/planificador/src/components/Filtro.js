import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'

const Filtro = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Filtrar Gastos</Text>
      <Picker>
        <Picker.Item label='-- Seleccione --' enabled={false}/>
        <Picker.Item label='Ahorro' value='ahorro'/>
        <Picker.Item label='Comida' value='comida'/>
        <Picker.Item label='Casa' value='casa'/>
        <Picker.Item label='Ocio' value='ocio'/>
        <Picker.Item label='Salud' value='salud'/>
        <Picker.Item label='Suscripciones' value='suscripciones'/>
        <Picker.Item label='Gastos Varios' value='gastosvarios'/>
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    transform: [{ translateY: 0}],
    marginTop: 80
  },

  label: {
    fontSize: 22,
    fontWeight: '900',
    color: '#64748b'
  }
})
export default Filtro
