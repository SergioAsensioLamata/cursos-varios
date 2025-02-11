import React from 'react'
import { useState, useEffect } from 'react'
import{ View, Text, StyleSheet, Pressable } from 'react-native'
import globalStyles from '../styles'
import{ formatearCantidad } from '../helpers'
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const ControlPresupuesto = ({presupuesto, gastos, resetesarApp}) => {
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto) => Number(gasto.cantidad) + total, 0)
    const totalDisponible = presupuesto - totalGastado

    const nuevoPorcentaje = (
      ((presupuesto -  totalDisponible) / presupuesto) * 100
    )

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1000);

    setGastado(totalGastado)
    setDisponible(totalDisponible)
  }, [gastos])

  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
      <AnimatedCircularProgress 
              size={200}
              width={18}
              fill={porcentaje}
              tintColor="#3B82F6"
              backgroundColor="#f0f2f5"
              rotation={0}
      >
        {
          (porcentaje) => (
            <View style={styles.contenedorPorcentaje}>
              <Text style={styles.textoPorcentaje}>{porcentaje} %</Text>
              <Text style={styles.textoGastado}>Gastado</Text>
            </View>
          )
        }
      </AnimatedCircularProgress>
      </View>

      <View style={styles.contenedorTexto}>
        <Pressable
          style={styles.boton}
          onLongPress={resetesarApp}
        >
          <Text style={styles.textoBoton}>Reiniciar App</Text>
        </Pressable>

        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto: </Text>
          {formatearCantidad(presupuesto)}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible: </Text>
          {formatearCantidad(disponible)}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado: </Text>
          {formatearCantidad(gastado)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor
  },

  centrarGrafica: {
    alignItems: 'center'
  },

  boton: {
    backgroundColor: '#db2777',
    padding: 10,
    marginBottom: 40,
    borderRadius: 5,
  },

  textoBoton: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },

  contenedorTexto: {
    marginTop: 50,
  },

  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10
  }, 

  label: {
    fontWeight: '700',
    color: '#3B82F6'
  },

  contenedorPorcentaje: {
  },

  textoPorcentaje: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#3B82F6',
    textAlign: 'center',
    marginBottom: 10
  },

  textoGastado: {
    color: '#64748b',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
  }
})

export default ControlPresupuesto
