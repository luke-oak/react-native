import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  conteiner:{
    marginTop: 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  champion:{
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
      marginTop: 20,
      alignSelf: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      color: 'white'
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
    width: 110,
    fontFamily: 'System'
  },
  textButtons:{
    color: 'white',
    fontSize: 12,
    fontWeight: '600'

  }


});

export {styles};
