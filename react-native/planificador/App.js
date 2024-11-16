import { SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

export default function App() {

  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      console.log('Presupuesto valido')
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor', 
        'Ok'
      )
      
    }
  }

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        <NuevoPresupuesto 
          handleNuevoPresupuesto={handleNuevoPresupuesto}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1
  },

  header: {
    backgroundColor: '#3B82F6',
  },

});
