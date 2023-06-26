import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  conteiner:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  icone:{
    height: 200,
    width: 200,
    margin: 20,
    alignSelf: 'center',
  },
  image:{
    height: 800,
    width: 400,
    resizeMode: 'contain',
    alignSelf: 'end'
  },
  text:{
      marginTop: 100,
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'purple'
  },
  text2:{
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple'
  },
  h2:{
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }


});

export {styles};
