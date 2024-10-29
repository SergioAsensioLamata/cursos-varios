import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import { useFonts } from "expo-font"


export default function App() {
  const[loaded] = useFonts({
    LatoBlack : require('./assets/fonts/Lato-Black.ttf'),
    LatoRegular:  require('./assets/fonts/Lato-Regular.ttf')
  })

  return (
    <>
      <Header style={styles.contenedorBase}/>

      <Image 
        style={styles.imagen}
        source={ require('./assets/img/cryptomonedas.png')}
      />

      <View style={styles.contenido}>
        <Formulario />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contenedorBase: {
    marginVertical: 10,
  },

  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },

  contenido: {
    marginHorizontal: '2.5%'
  }
});
