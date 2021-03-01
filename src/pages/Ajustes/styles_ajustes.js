import {StyleSheet} from 'react-native'


const style_index = StyleSheet.create({
    box: {
        width: '100%',
        height: '100%'
    },
    fundo: {
        width: '100%',
        height: '100%'
    },
    container:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    Btn_Voltar:{
      width: '10%',
      height: '10%',
      margin: 30,
      justifyContent: 'flex-start',
      
      borderRadius: 10,
      justifyContent: 'center',
      alignItems:  'center'
    },
    Btn_Sair:{
      width: '6%',
      height: '36%',
      backgroundColor: '#0093E8',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '20%',
    },
    Btn_Ajustes:{
      width: '35%',
      height: '40%',
      paddingBottom: '1%',
      marginLeft: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FECF12',
      transform: [{rotate: '-10deg'}],
      borderRadius: 10,
      
      marginTop: '1%'
    },
    Ajustes:{
      width: '70%',
      height: '90%',
      alignItems: 'center',
      backgroundColor: '#FECF12',
      borderRadius: 16
    },
    text_Ajustes:{
      fontSize: 35,
      color: 'blue',
    },
    toggle:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    Switch:{
        marginLeft: '15%', 
        marginTop: '6%'
    },
    text_toggle:{
        marginTop: '6%',
        fontSize: 30,
        color: 'white',
    },
    conte_fonte:{
        width: '9%',
        height: '44%',
        marginLeft: '9%',
        marginTop: '6%',
        borderRadius: 10,
        backgroundColor: '#53b3e9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '1%'
    }, 
    text_fonte:{
        fontSize: 30,
        color: 'white'
    }
  })

  export default style_index