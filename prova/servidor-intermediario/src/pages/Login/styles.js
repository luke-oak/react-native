import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  conteiner:{
    marginTop: 0,
    flex: 1,
    flexDirection: 'column'
  },
  view:{
    flexDirection: 'row',
    alignSelf: 'center'
  },
  image:{
    height: 800,
    resizeMode: 'cover'
  },
  login:{
      marginTop: 200,
      marginBottom: 60,
      alignSelf: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      color: 'white'
  },
  input:{
      width: 210,
      height: 30,
      borderWidth: 3,
      borderColor: 'white',
      fontSize: 12,
      padding: 15,
      borderRadius: 8,
      color: 'white',
      flexDirection: 'column',
      fontWeight: 'bold',
      backgroundColor: 'rgba(255,255,255,0.3)'
  },
  buscar: {
      alignSelf: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'System',

  },
  opacity: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignSelf: 'center',
      marginTop: 10,
      borderRadius: 8,
      padding: 5,
      borderWidth: 3,
      color: 'white',
      borderColor: 'white',
      fontWeight: 'bod',
      width: 110,
      fontFamily: 'System',
      height: 40,

  },
  dados: {
    color: 'white'
  }

});

export {styles};
