import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    total: {
      width: '100%',
    },
    fundo: {
      height: '100%',
    },
    top: {
      flexDirection: 'row',
      //backgroundColor: 'white',
      height: '35%',
      marginTop: 5,
      justifyContent: 'space-around'
    },
  
    abelha_imagem: {
      width: '12%',
      height: '115%',
      marginRight: '7%'
      //backgroundColor: 'black'
    },
  
    box_titulo: {
      backgroundColor: '#FECF12',
      width: '35%',
      height: '40%',
      transform: [{ rotate: '-10deg' }],
      borderRadius: 10,
      marginTop: '5%',
    },
  
    titulo: {
      //backgroundColor: 'red',
      fontSize: 30,
      color: 'white',
      paddingBottom: '10%'
    },
  
    container_icons: {
      //backgroundColor: 'red',
      flexDirection: 'row',
      width: '20%',
      marginTop: '4%',
      justifyContent: 'flex-end'
    },
  
    box_icon: {
      backgroundColor: '#0093E8',
      width: '32%',
      height: '52%',
      borderRadius: 10,
      marginLeft: '40%'
    },
    box_img_home: {
      width: '65%',
      height: '65%',
      alignSelf: 'center',
      marginTop: '18%',
    },
    box_img_set: {
      width: '60%',
      height: '55%',
      alignSelf: 'center',
      marginTop: '22%',
    },
    // (((FIM))) header/topo - ABELHA, TITULO, ICONES DE NAVEGAÇÃO
  
    // fases, imagem das fases, espaço de recompensa por fase
    body: {
      //backgroundColor: 'red'
    },
  
    bloco_fases: {
      flexDirection: 'row',
      width: '85%',
      height: '75%',
      alignSelf: 'center'
    },
  
    fase: {
      //backgroundColor: 'green',
      width: '33.33%',
    },
  
    fase_imagem: {
      width: '80%',
      height: '80%',
      borderRadius: 100,
      alignSelf: 'center',
    },
  
    fase_play1: {
      backgroundColor: '#FECF12',
      width: '70%',
      height: '18%',
      alignSelf: 'center',
      marginTop: '8%',
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  
    fase_play2: {
      backgroundColor: '#FECF12',
      width: '70%',
      height: '18%',
      alignSelf: 'center',
      marginTop: '8%',
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  
    fase_play3: {
      backgroundColor: '#FECF12',
      width: '70%',
      height: '18%',
      alignSelf: 'center',
      marginTop: '8%',
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  
    fase_playtexto: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
  
    honey: {
      marginTop: '2%',
      height: '82%',
      width: '20%'
    },
    Btn_Voltar:{
      width: '70%',
      height: '50%',
      marginLeft: 30,
      justifyContent: 'flex-start',
      backgroundColor: '#0093E8',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems:  'center'
    },
    Btn_Sair:{
      width: '140%',
      height: '50%',
      backgroundColor: '#0093E8',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems:  'center'
    },
    // (((FIM))) fases, imagem das fases, espaço de recompensa por fase
  })
  
  export default styles;