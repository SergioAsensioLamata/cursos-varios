import { SafeAreaView, StyleSheet, Text, View, Alert, Pressable, Image, Modal } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { generarId } from './src/helpers';


export default function App() {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)


  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor', 
        'Ok'
      )
      
    }
  }

  const handleGasto = gasto => {

    // Comprobar formulario gasto rellenado
    if(Object.values(gasto).includes('')){
      Alert.alert(
        "Error",
        "Todos los campos son obligatorios",
      )

      return
    }

    // Añadir el nuevo gasto
    gasto.id = generarId()
    setGastos([...gastos, gasto])
    setModal(false)
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

      {modal && (
        <Modal 
          animationType='slide'
          visible={modal}
        >
          <FormularioGasto 
            setModal={setModal}
            handleGasto={handleGasto}
          />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable
          onPress={() => setModal(true)}
        >
          <Image 
            source={require('./src/img/nuevo-gasto.png')}
            style={styles.imagen}
          />
        </Pressable>
      )}
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

  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 10,
    right: 20
  }
});
