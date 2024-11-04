import { useState } from "react"
import { StyleSheet, Text, Modal, SafeAreaView, TextInput, View, ScrollView, Pressable } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = ({ modalVisible, setModalVisible }) => {
  const [paciente, setPaciente] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [fechaVisible, setFechaVisible] = useState(false)
  const [fecha, setFecha] = useState('')

  const handleConfirmDate = (date) => {
    setFechaVisible(false)
    setFecha(date.toString())
  }


  return (
    <Modal
    animationType='slide'
    visible={modalVisible}
  >
    <SafeAreaView style={styles.contenedor}>
      <ScrollView>

        <Text style={styles.titulo}>Nueva {' '}
          <Text style={styles.tituloBold}>Cita</Text>
        </Text>

        <Pressable
          style={styles.btnCancelar}
          onLongPress={() => setModalVisible(false)}
        >
          <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
        </Pressable>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Paciente</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre Paciente"
            placeholderTextColor='#666'
            value={paciente}
            onChangeText={setPaciente}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Propietario</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre Propietario"
            placeholderTextColor='#666'
            value={propietario}
            onChangeText={setPropietario}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email Propietario</Text>
          <TextInput
            style={styles.input}
            placeholder="Email Propietario"
            placeholderTextColor='#666'
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Teléfono Propietario</Text>
          <TextInput
            style={styles.input}
            placeholder="Teléfono Propietario"
            placeholderTextColor='#666'
            keyboardType='number-pad'
            value={telefono}
            onChangeText={setTelefono}
            maxLength={9}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha</Text>
          <Pressable
            onPress={() => setFechaVisible(true)}
            style={styles.input}
          >
            <Text>{fecha === '' ? '-- -- --' : fecha}</Text>
          </Pressable>
          
          <DateTimePickerModal
            isVisible={fechaVisible}
            mode="datetime"
            onConfirm={handleConfirmDate}
            onCancel={() => setFechaVisible(false)}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas</Text>
          <TextInput
            style={[styles.input, styles.sintomasInput]}
            placeholder="Sintomas paciente"
            placeholderTextColor='#666'
            value={sintomas}
            onChangeText={setSintomas}
            multiline={true}
            numberOfLines={4}
          />
        </View>

        <Pressable
          style={styles.btnNuevaCita}
        >
          <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  </Modal>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },

  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF'
  },

  tituloBold: {
    fontWeight: '900',
  },

  btnCancelar: {
    backgroundColor: '#5827A4',
    marginVertical: 30,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
  },

  btnCancelarTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'
  },

  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },

  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15, 
    fontSize: 20,
    fontWeight: '600'
  },

  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },

  sintomasInput: {
    height: 100,
  },

  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10
  },

  btnNuevaCitaTexto: {
    color: '#5827A4',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 16
  }
})

export default Formulario
