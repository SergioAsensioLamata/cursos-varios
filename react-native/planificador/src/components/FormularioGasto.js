import React from 'react'
import { Text, SafeAreaView, View, TextInput, StyleSheet, Pressable } from 'react-native'

const FormularioGasto = () => {
  return (
    <SafeAreaView>
      <View>
        <Pressable>
          <Text>Cancelar</Text>
        </Pressable>
      </View>

      <View>
        <Text>Nuevo Gasto</Text>

        <View>
          <Text>Nombre Gasto</Text>
          <TextInput 
            placeholder='Nombre del gasto. ej. Comida'
          />
        </View>

        <View>
          <Text>cantidad Gasto</Text>
          <TextInput 
            placeholder='Cantidad del gasto. ej. 300'
            keyboardType='numeric'
          />
        </View>

      </View>
    </SafeAreaView>
  )
}

export default FormularioGasto
