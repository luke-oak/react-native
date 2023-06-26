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
      marginTop: 210,
      marginBottom: 30,
      alignSelf: 'center',
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white'
  },
  h2:{
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  opacity: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 8,
    padding: 10,
    borderWidth: 3,
    color: 'white',
    borderColor: 'white',
    fontWeight: 'bold',
    width: 130,
    fontFamily: 'System'
  },
  opacity2:{
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 8,
    padding: 10,
    borderWidth: 3,
    color: 'white',
    borderColor: 'white',
    fontWeight: 'bold',
    width: 150,
    fontFamily: 'System'
  },
  textButtons:{
    color: 'white',
    fontSize: 12,
    fontWeight: '600'

  }


});

export {styles};
