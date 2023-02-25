import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';


class App extends Component{
  render(){

    const styles = StyleSheet.create({
  fundo: {
    backgroundColor: 'lavender',
    borderBottom: 100
  },
    
  img: {
    borderWidth: 5,
    borderRadius: 100,
    borderColor: 'grey',
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20
  },
  
  title: {
    marginTop: 15,
    paddingVertical: 8,
    color: '#696969 ',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  categorias: {
    fontSize: 20,
    margin:10 ,
    fontWeight: 'bold'
  },

  texto: {
    fontSize: 15,
    marginLeft: 10
  },

  link:{
    color: 'blue',
    fontWeight: 'bold'
  }
});

    return(
      <View style={styles.fundo}>

      <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/95755190?v=4'}}
          style={styles.img} />

        <Text style={styles.title}>Lucas Carvalho Santos</Text>
        <Text style={styles.texto}>• 23 Yo 👨🏿</Text>
        <Text style={styles.texto}>• IT Student 👨🏿‍💻</Text>
        <Text style={styles.texto}>• Basketball Lover 💙🏀</Text>

        <Text style={styles.categorias}>Formation</Text>
        <Text style={styles.texto}>• IT to Internet - ETEC</Text>
        <Text style={styles.texto}>• Analisys and Development Sistems - FATEC PG</Text>

        <Text style={styles.categorias}>Experiency</Text>
        <Text style={styles.texto}>• Sargeant in Brazillian Army</Text>

        <Text style={styles.categorias}>Projects</Text>
        <Text style={styles.texto}>
          • Visit my{' '}
          <Text
            style={styles.link}
            onPress={() => {
              Linking.openURL('https://github.com/luke-oak');
            }}>
            GitHub
          </Text>
        </Text>

        <Text>  </Text>
      </View>
    )
  }
}


export default App;
