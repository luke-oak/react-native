import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image , ImageBackground } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Champion(){

  const navigation = useNavigation();

  const image = {uri: 'https://images5.alphacoders.com/381/381913.jpg'};

 
    const champions = [
      'Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'AurelionSol',
      'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Corki',
      'Darius', 'Diana', 'DrMundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora',
      'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi',
      'Irelia', 'Ivern', 'Janna', 'JarvanIV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kalista',
      'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Kindred', 'Kled',
      'LeBlanc', 'LeeSin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite',
      'Malzahar', 'Maokai', 'MasterYi', 'MissFortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko',
      'Nidalee', 'Nocturne', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana',
      'Quinn', 'Rakan', 'Rammus', 'Rell', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze',
      'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion',
      'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'TahmKench', 'Taliyah', 'Talon',
      'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'TwistedFate', 'Twitch', 'Udyr', 'Urgot',
      'Varus', 'Vayne', 'Veigar', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong',
      'Xayah', 'Xerath', 'XinZhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Ziggs',
      'Zilean', 'Zoe', 'Zyra'
    ];

  const [champAleatorio, setChampAleatorio] = useState('');
  const [imagemChamp, setImagemChamp] = useState('');

  const sorteiaChampion = () => {
    const numeroAleatorio = Math.floor(Math.random() * champions.length);
    const champion = champions[numeroAleatorio];
    setChampAleatorio(champion);

    const championImageUrl = `https://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/${champion}.png`;
    setImagemChamp(championImageUrl);
  };

  return (
    <SafeAreaView style = {styles.conteiner}>
      <ImageBackground source = {image} style = {styles.image} resizeMode="cover">
      <Text style = {styles.text}>Você é x:</Text>
      <Text style = {styles.text2}>{champAleatorio}</Text>
      <Image source={{ uri: imagemChamp }} style={styles.champion} />
      <TouchableOpacity
          style={styles.opacity}
          onPress = {sorteiaChampion}>
        <Text style = {styles.textButtons}>Descobrir</Text>
        </TouchableOpacity>
        </ImageBackground>
    </SafeAreaView>
  );
};

