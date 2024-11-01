// import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';
import Formulario from './src/components/Formulario';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)


  return (
    <SafeAreaView style={styles.contenedor}>

      <Text style={styles.titulo}>Administrador de Citas {' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnNuevaCitaTexto}>Nueva Cita</Text>
      </Pressable>

      <Formulario 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },

  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
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
  }

});
