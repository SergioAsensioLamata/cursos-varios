import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const Paciente = ({ item, setModalVisible, pacienteEditar }) => {

  const { paciente, fecha, id } = item

  return(
    <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente:</Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.fecha}>{fecha}</Text>

      <View style={styles.contenedorBotones}>
        <Pressable 
          style={[styles.btn, styles.btnEditar]}
          onLongPress={() => {
            setModalVisible(true)
            pacienteEditar(id)
          }}
        >
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>

        <Pressable 
          style={[styles.btn, styles.btnEliminar]}
        >
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>

    </View>


  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
    // marginBottom: 10,
    borderBottomColor: '#94A3B8',
    borderBottomWidth: 1
  },

  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700'
  },

  texto: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10
  },

  fecha: {
    color: '#374151'
  },

  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },

  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5
  },

  btnTexto: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '700',
    color: '#FFF'
  },

  btnEditar: {
    backgroundColor: '#F59E0B'
  },

  btnEliminar: {
    backgroundColor: '#EF4444'
  },

  sheila: {
    color: '#1aaba0',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 100

  }
})

export default Paciente