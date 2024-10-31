import React from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable, Modal } from 'react-native';

export default function App() {
   const nuevaCitaHandler = () => {
    console.log('Presssioonando')
   }

  return (
    <SafeAreaView style={styles.contenedor}>


      <Text style={styles.titulo}>Administrador de Citas {' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={nuevaCitaHandler}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnNuevaCitaTexto}>Nueva Cita</Text>
      </Pressable>

      <Modal
        animationType='slide'
        visible={false}
      >
        <Text>Desde modal</Text>
      </Modal>

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
