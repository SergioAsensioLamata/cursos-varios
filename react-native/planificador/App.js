import { SafeAreaView, ScrollView, StyleSheet, Text, View, Alert, Pressable, Image, Modal } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { generarId } from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos';


export default function App() {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)
  const [gasto, setGasto] = useState({})


  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    } else {
      Alert.alert('Error', 
        'El presupuesto no puede ser 0 o menor'
      )
      
    }
    return
  }

  const handleGasto = gasto => {

    // Comprobar formulario gasto rellenado
    if([gasto.nombre, gasto.categoria, gasto.cantidad].includes('')){
      Alert.alert(
        "Error",
        "Todos los campos son obligatorios",
      )

      return
    }

    if(gasto.id) {
      const gastosAztualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosAztualizados)

    } else {
      // Añadir el nuevo gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
  
      setGastos([...gastos, gasto])
    }

    setModal(false)
  }

  const eliminarGasto = id => {
    Alert.alert(
      '¿Deseas eliminar este gasto?',
      'Un gasto eliminado no se puede recuperar',
      [
        { text: 'No', style: 'cancel'},
        { text: 'Si, Eliminar', onPress: () => {
            const gastosAztualizados = gastos.filter( gastoState => gastoState.id !== id )

            setGastos(gastosAztualizados)
            setModal(false)
            setGasto({})
        }}
      ]
    )
  }


  return (
    <View style={styles.contenedor}>
      <ScrollView>
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

        {isValidPresupuesto && (
          <ListadoGastos 
            gastos={gastos}
            setModal={setModal}
            setGasto={setGasto}
            
          />
        )}

      </ScrollView>

      {modal && (
        <Modal 
          animationType='slide'
          visible={modal}
        >
          <FormularioGasto 
            setModal={setModal}
            handleGasto={handleGasto}
            gasto={gasto}
            setGasto={setGasto}
            eliminarGasto={eliminarGasto}
          />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable
          style={styles.pressable}
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
    minHeight: 400
  },

  pressable: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30
  },

  imagen: {
    width: 60,
    height: 60,
  }
});
