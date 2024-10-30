import React from "react"
import { Text, StyleSheet, Platform } from 'react-native'
import { useFonts } from "expo-font"

const Header = () => {
    const[loaded] = useFonts({
      LatoBlack : require('../assets/fonts/Lato-Black.ttf'),
      LatoRegular:  require('../assets/fonts/Lato-Regular.ttf')
    })
    
    return ( 
    <Text style={styles.encabezado}>Criptomonedas</Text>
    )
}

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'LatoBlack',
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30

  }

})
 
export default Header