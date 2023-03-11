import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { style } from './style';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      gasolina: '',
      alcool:'',
      res: '',
      img: 'https://versareanosdourados.vteximg.com.br/arquivos/ids/205671-1000-1000/Bomba-de-Gasolina-Iluminada-Azul--------------------------------------------------------------------.jpg?v=637636226016130000'
    };
    
   
    this.verifica = this.verifica.bind(this);
  }
  
  verifica(){
    if((this.state.alcool === '') || (this.state.gasolina ==='')){
      alert("Digite os dois valores.")
      return;
    }

    res = (this.state.alcool/this.state.gasolina)
    if (res > 0.7){
        this.setState({res: 'Abasteça com Gasolina'})
    }
    else{
      this.setState({res: 'Abasteça com Alcool'})
    
  }}



  render(){
    return(
      <View style={style.area}>

      <Text style={style.texto}>Alcool ou Gasolina</Text>

      <Image source={{uri: this.state.img }}
          style={style.img}
        />

      <TextInput
      style={style.input}
      placeholder="Preço do alcool"
      keyboardType='numeric'
      onChangeText={ (preco) => this.setState({alcool: preco})}
      />

      <TextInput
      style={style.input}
      placeholder="Preço da gasolina"
      keyboardType='numeric'
      onChangeText={ (preco) => this.setState({gasolina: preco})}
      />
      <Button title="Calcular" color='pink' onPress={this.verifica} />


      <Text style={style.texto}> {this.state.res} </Text>
      </View>
    );
  }
}




export default App;
