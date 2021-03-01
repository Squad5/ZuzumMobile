import React from 'react';
import { Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles_fases';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Fases(props) {
  const { navigation } = props

  return (
    <View style={styles.total}>
      <StatusBar />
      <ImageBackground style={styles.fundo} source={require('../../../assets/img/fundo.jpg')}>
        <View style={styles.top}>
          <Image style={styles.abelha_imagem} source={require('../../../assets/img/bzz.png')} />
          <View style={styles.box_titulo}>
            <Text style={{
              fontFamily: 'Paytone One',
              fontSize: 35,
              textAlign: 'center',
              color: 'white',
              marginTop: '-5%',
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 2
            }}>FASES</Text>
          </View>
          <View style={styles.container_icons}>
            <TouchableOpacity style={styles.Btn_Sair} onPress={() => navigation.navigate('Home')}>
              <Icon name="home" style={{ color: "white" }} size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn_Voltar} onPress={() => navigation.navigate('Ajustes')}>
              <Icon name="cog" style={{ color: 'white', }} size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bloco_fases}>
            <View style={styles.fase}>
              <Image style={styles.fase_imagem} source={require('../../../assets/img/fase1.png')} />
              <View style={styles.fase_play1}>
                <Image style={styles.honey} source={require('../../../assets/img/honey.png')} />
                <Text style={{
                  fontFamily: 'Paytone One',
                  color: 'white',
                  fontSize: 20,
                  textAlign: 'center',
                  marginTop: '-4%',
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 2
                }}>100</Text>
              </View>
            </View>
            <View style={styles.fase}>
              <Image style={styles.fase_imagem} source={require('../../../assets/img/fase2.png')} />
              <View style={styles.fase_play2}>
                <Image style={styles.honey} source={require('../../../assets/img/honey.png')} />
                <Text style={{
                  fontFamily: 'Paytone One',
                  color: 'white',
                  fontSize: 20,
                  textAlign: 'center',
                  marginTop: '-4%',
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 2
                }}>200</Text>
              </View>
            </View>
            <View style={styles.fase}>
              <Image style={styles.fase_imagem} source={require('../../../assets/img/fase3.png')} />
              <View style={styles.fase_play3}>
                <Image style={styles.honey} source={require('../../../assets/img/honey.png')} />
                <Text style={{
                  fontFamily: 'Paytone One',
                  color: 'white',
                  fontSize: 20,
                  textAlign: 'center',
                  marginTop: '-4%',
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 2
                }}>300</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}