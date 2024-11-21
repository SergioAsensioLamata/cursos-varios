import { SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';


export default function App() {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([
    {id: 1, cantidad: 30},
    {id: 2, cantidad: 40},
    {id: 3, cantidad: 50}
  ])


  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
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

        {isValidPresupuesto ? (
          <ControlPresupuesto 
            presupuesto={presupuesto} 
            gastos={gastos}  
          /> 
          ) : ( 
          <NuevoPresupuesto 
            handleNuevoPresupuesto={handleNuevoPresupuesto}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
          />)
        }
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
