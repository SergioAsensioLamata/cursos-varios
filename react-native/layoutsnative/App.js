import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <>
      {/* Scroll principal de toda pantalla */}
      <ScrollView>

        {/* 1 - Imagen principal app */}
        <View style={{ flexDirection: 'row'}}>
          <Image
            style={styles.banner}
            source={ require('./assets/img/bg.jpg')}
          />
        </View>

        {/* contenedor margen de la app */}
        <View style={styles.contenedor}>

          {/* 2 - Paris  */}
          <Text style={styles.titulo}>Qué hacer en Paris</Text>

          {/* Scroll HORIZONTAL que hacer en paris */}
          <ScrollView
            horizontal
          >
            <View>
              <Image 
                style={styles.ciudad}
                source={ require('./assets/img/actividad1.jpg')}
              />
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={ require('./assets/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={ require('./assets/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={ require('./assets/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={ require('./assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>

          {/* 3 - Mejores alojamientos */}
          <Text style={styles.titulo}>Los Mejores Alojamientos</Text>
          <View>
            <View>
              <Image
                style={styles.mejores} 
                source={ require('./assets/img/mejores1.jpg')}
              />
            </View>
            <View>
              <Image 
                style={styles.mejores}
                source={ require('./assets/img/mejores2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores} 
                source={ require('./assets/img/mejores3.jpg')}
              />
            </View>
          </View>

          {/* 4 - Hospedaje */}
          <Text style={styles.titulo}>Hospedaje en LA</Text>
          
          <View style={styles.listado}>
            <View style={styles.listadoItem}>
                <Image
                  style={styles.mejores} 
                  source={ require('./assets/img/hospedaje1.jpg')}
                />
            </View>

            <View style={styles.listadoItem}>
                <Image
                  style={styles.mejores} 
                  source={ require('./assets/img/hospedaje2.jpg')}
                />
            </View>

            <View style={styles.listadoItem}>
                <Image
                  style={styles.mejores} 
                  source={ require('./assets/img/hospedaje3.jpg')}
                />
            </View>

            <View style={styles.listadoItem}>
                <Image
                  style={styles.mejores} 
                  source={ require('./assets/img/hospedaje4.jpg')}
                />
            </View>
          </View>

        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  
  contenedor: {
    marginHorizontal: 10,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },

  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },

  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },

  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  listadoItem: {
    flexBasis: '49%',
  },
});
