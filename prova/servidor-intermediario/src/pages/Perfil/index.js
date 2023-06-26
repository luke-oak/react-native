import React, { useState, useEffect } from 'react';
import { Image, Text, SafeAreaView, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles';

export default function Perfil() {
  const [dadosSummoner, setDadosSummoner] = useState();
  const [imagemIcone, setImagemIcone] = useState();
  const image = {uri: 'https://lolhdwall.com/storage/202101/jax-lol-god-staff-splash-art-4K-wallpaper-pc-preview.jpg'};

  useEffect(() => {
    const carregarDadosSummoner = async () => {
        const dadosAsync = await AsyncStorage.getItem('dadosSummoner');
        if (dadosAsync) {
          const dados = JSON.parse(dadosAsync);
          setDadosSummoner(dados);

          const iconeImageUrl = `http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/${dados.profileIconId}.png`;
          setImagemIcone(iconeImageUrl);
        }
    };

    carregarDadosSummoner();
  }, []);

if(dadosSummoner){
    return (
      <SafeAreaView style = {styles.conteiner}>
        <ImageBackground source = {image} style = {styles.image} resizeMode="cover">
            <Text style = {styles.text}>Nome do Invocador: {dadosSummoner.name}</Text>
            <Image source={{uri : imagemIcone}} style={styles.icone} />
            <Text style = {styles.text2}>Nível: {dadosSummoner.summonerLevel}</Text>
        </ImageBackground>
      </SafeAreaView>

    );
  }
}