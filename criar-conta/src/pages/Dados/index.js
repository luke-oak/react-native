import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Dados( {route} ){
  const navigation = useNavigation();

  return(
    <View>
      <Text>Sobre</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.idade}</Text>
      <Text>{route.params?.sexo}</Text>
      <Text>{route.params?.escolaridade}</Text>
      <Text>{route.params?.limite}</Text>
      <Text>{route.params?.brasileiro}</Text>
      <Text>{route.params?.email}</Text>
      <Button
      title='Voltar para tela de criação de conta'
      onPress={ () => navigation.goBack() }
      />
    </View>
  )
}
