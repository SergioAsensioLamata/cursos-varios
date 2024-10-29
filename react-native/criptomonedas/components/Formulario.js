import React from 'react'
import { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from "react-native"
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'

const Formulario = () => {
  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptomoneda] = useState('')
  const [criptomonedas, setCriptomonedas] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const resultado = await axios.get(url)

      setCriptomonedas(resultado.data.Data)
    } 
    consultarAPI()
    console.log(criptomonedas)
  }, [])

  const obtenerMoneda = moneda => {
    setMoneda(moneda)
  }

  const obtenerCriptomoneda = cripto => {
    setCriptomoneda(cripto)
  }

  return ( 
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={ moneda => obtenerMoneda(moneda)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label='- Seleccione -' value=''/>
        <Picker.Item label='Dolar Estados Unidos' value='USD'/>
        <Picker.Item label='Peso Mexicano' value='MXN'/>
        <Picker.Item label='Euro' value='EUR'/>
        <Picker.Item label='Libra Esterlina' value='GBP'/>
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>

      <Picker
        selectedValue={criptomoneda}
        onValueChange={ cripto => obtenerCriptomoneda(cripto)}
        itemStyle={{ height: 120 }}
      >
        <Picker.item label='- Seleccione -' />
        { criptomonedas.map( cripto => (
          <Picker.item
            key={cripto.CoinInfo.Id} 
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>

    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22, 
    marginVertical: 20,
  }
})
 
export default Formulario;