import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput} from 'react-native';


export default function App(){
  const [numero, setNumero] = useState()


  function gerar() {
    aleatorio = Math.floor(Math.random() * 10)
    setNumero(aleatorio)
  }


  return(
    <View style={{ marginTop: 20 }}>

    <View>
      <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 20, color:'purple'}} > Jogo do número aleatório </Text></View>
      
      <Charada/ >
      
      <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 20, color:'purple'}} > Pense em um número de 0 a 10: </Text>
   
      <Button style={{ marginTop: 20}} title="Descobrir" color="green" onPress={gerar} />

      <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20, color:'purple'}} >{numero}</Text>
      
    </View>
  )
}

function Charada() {  
    let img = 'https://i0.wp.com/www.arrobanerd.com.br/wp-content/uploads/2023/03/audio-serie-charada-spotify-2023.png?fit=1280%2C720&ssl=1';


    return(
        <Image
        source={{ uri: img }}
        style={{ width: 250, height: 150, alignSelf: 'center'}}
      />
    )
}
