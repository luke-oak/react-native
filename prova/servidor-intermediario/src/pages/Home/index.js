import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';


export default function Home(){
  const navigation = useNavigation();
  
function irChamp(){
    navigation.navigate('Champion');
}

function irLogin(){
  navigation.navigate('Login');
}

const image = {uri: 'https://images8.alphacoders.com/128/1281654.jpg'};
  
  return(
    <SafeAreaView style = {styles.conteiner}>
      <ImageBackground source = {image} style = {styles.image} resizeMode="cover">
        <Text style = {styles.login} >Bem vindx ao Jax.GG</Text>
        <Text style = {styles.h2} >Selecione a opção desejada</Text>
        <View style = {styles.view}> 
        </View>
        <View style = {styles.view}>
        <TouchableOpacity
          style={styles.opacity}
          onPress = {irLogin}>
        <Text style = {styles.textButtons}>Perfil de invocador</Text>
        </TouchableOpacity>
        <Text>  </Text>
        <TouchableOpacity
          style={styles.opacity2}
          onPress = {irChamp}>
        <Text style = {styles.textButtons}>Que campeão é você?</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

