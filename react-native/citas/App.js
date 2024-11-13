// import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable, FlatList, Alert, Modal } from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes ] = useState([])
  const [paciente, setPaciente] = useState({})
  const [modalPaciente, setModalPaciente] = useState(false)

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
    setPaciente(pacienteEditar[0])
  }

  const pacienteEliminar = id =>  {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        { text: 'Cancelar'},
        { text: 'Si, Eliminar', onPress: () => {
          const pacientesActualizados = pacientes.filter( 
            pacientesState => pacientesState.id !== id )
            setPacientes(pacientesActualizados)
        }}
      ]
    )
  }

  return (
    <SafeAreaView style={!modalVisible ? styles.contenedor : styles.contenedorFalso }>

      <Text style={styles.titulo}>Administrador de Citas {' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnNuevaCitaTexto}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? 
        <Text style={styles.noPacientes}>No hay pacientes aún</Text> : 
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={(item) => item.id }
          renderItem={({item}) => {
            return (
              <Paciente 
                item={item}
                setModalVisible={setModalVisible}
                pacienteEditar={pacienteEditar}
                pacienteEliminar={pacienteEliminar}
                setModalPaciente={setModalPaciente}
                setPaciente={setPaciente}
              />
            )
          }}
        />
      }

      
      {modalVisible && (
        <Formulario 
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />)
      }

      <Modal
        visible={modalPaciente}
        animationType='fade'
      >
        <InformacionPaciente 
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },

  contenedorFalso: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },

  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
    marginTop: 20
  },

  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9'
  },

  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10

  },

  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },

  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },

  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }

});
