import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

const Header = () => (
    <SafeAreaView>
        <Text style={styles.texto}>Planificador de Gastos</Text>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    texto: {
      textAlign: 'center',
      color: '#FFF',
      fontSize: 30,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      paddingTop: 20, 
    }
})

export default Header