import React from 'react'
import { useState, useEffect } from 'react'
import{ View, Image, Text, StyleSheet } from 'react-native'
import globalStyles from '../styles'
import{ formatearCantidad } from '../helpers'
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const ControlPresupuesto = ({presupuesto, gastos}) => {
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto) => Number(gasto.cantidad) + total, 0)
    const totalDisponible = presupuesto - totalGastado

    const nuevoPorcentaje = (
      ((presupuesto -  totalDisponible) / presupuesto) * 100
    )

    setPorcentaje(nuevoPorcentaje)

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
            <Text>{porcentaje} %</Text>
          )
        }
      </AnimatedCircularProgress>
      </View>

      <View style={styles.contenedorTexto}>
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

  imagen: {
    width: 250,
    height: 250
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
  }
})

export default ControlPresupuesto
