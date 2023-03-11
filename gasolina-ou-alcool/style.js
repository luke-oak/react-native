import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: 'pink',
    marginTop: 30
  },
  img:{
    alignSelf: 'center', 
    width: 150,
    height: 150,
    marginTop: 10
  }

})

export {style};