import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, ImageBackground, Pressable, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login(){
  const navigation = useNavigation();
  
  const image = {uri: 'https://images8.alphacoders.com/114/1142583.jpg'};
  const [summoner, setSummoner] = useState('')
  const [summonerSemEspaco, setSummonerSemEspaco] = useState('');

  const tiraEspaco = () => {
    const summonerSemEspaco = summoner.replace(/ /g, '%20');
    setSummonerSemEspaco(summonerSemEspaco);
  };

  const busca = async (summoner) => {
    try {
      const response = await api.get(`/summoner/${summoner}`);
      const dados = response.data;
      await AsyncStorage.setItem('dadosSummoner', JSON.stringify(dados));
      navigation.navigate('Perfil');
      
    } catch (error) {
      alert('Invocador não encontrado.');
    }
  };
  
  return(
    <SafeAreaView style = {styles.conteiner}>
      <ImageBackground source = {image} style = {styles.image} resizeMode="cover">
        <Text style = {styles.login} >JAX.GG</Text>
        <View style = {styles.view}> 
          <TextInput
            style = {styles.input}
            onChangeText={setSummoner}
            placeholder = 'Nome de invocador'
            value={summoner}
          />
        </View>
        <TouchableOpacity
          style={styles.opacity}
          onPressIn={tiraEspaco}
          onPressOut={() => busca(summonerSemEspaco)}>
        <Text style = {styles.buscar}>BUSCAR🔎</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  )
}