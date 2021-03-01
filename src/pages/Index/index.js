import React from 'react';
import { Text, View, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native';

import Icons from 'react-native-vector-icons/FontAwesome';

import styles from './styles_index.js';

import fundo from '../../../assets/img/fundo-nuvem-2.jpg';
import contato from '../../../assets/img/contato.png';
import parceiro from '../../../assets/img/parceiro.png';
import zuzum from '../../../assets/img/bee-zuzum.png';

export default function Index(props) {
  const { navigation } = props

  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground style={styles.img_fundo} source={fundo}>
        <View style={styles.header}>
          <View style={styles.box_header}>
            <View style={styles.box_icn}>
              <TouchableOpacity style={styles.icn}>
                <Icons name="facebook-f" color='#ffff' size={22} style={{marginTop: '15%'}} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icn}>
                <Icons name="instagram" color='#ffff' size={20} style={{marginTop: '8%'}} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icn}>
                <Icons name="envelope" color='#ffff' size={15} style={{marginTop: '17%'}} />
              </TouchableOpacity>
            </View>
            <Image source={parceiro} resizeMode="contain" style={styles.img_parceiro} />
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.section_zuzum}>
            <Image source={zuzum} resizeMode="contain" style={styles.img_zuzum} />
          </View>
          <View style={styles.section_btn}>
            <View style={styles.box_btn}>
              <TouchableOpacity style={styles.btn} >
                <Icons name="home" color='#FFF' size={25} />
                <Text style={{
                  fontFamily: 'Paytone One',
                  color: '#FFF',
                  fontSize: 20,
                  marginLeft: '5%',
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 1
                }} onPress={() => navigation.navigate('Fases')}>INICIAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Ajustes')}>
                <Icons name="cog" color='#FFF' size={30} />
                <Text style={{
                  fontFamily: 'Paytone One',
                  color: '#FFF',
                  fontSize: 20,
                  marginLeft: '5%',
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 1
                }}>AJUSTAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
