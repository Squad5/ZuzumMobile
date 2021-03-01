import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%'
    },
    img_fundo: {
      width: '100%',
      height: '100%'
    },
    header: {
      width: '100%',
      height: '10%',
      alignItems: 'center'
    },
    box_header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '90%',
      height: '100%',
    },
    box_icn: {
      //backgroundColor: 'red',
      marginTop: '3%',
      flexDirection: 'row',
    },
    icn: {
      backgroundColor: '#E16E3C',
      width: '10%',
      alignItems: 'center',
      borderRadius: 15,
      marginLeft: '2%',
      marginRight: '2%',
    },
    img_contato: {
      marginTop: '2%'
    },
    img_parceiro: {
      marginTop: '6%',
      width: '17%'
    },
    main: {
      width: '100%',
      height: '90%'
    },
    section_zuzum: {
      width: '100%',
      height: '40%',
      marginTop: '-3%',
      alignItems: 'center'
    },
    img_zuzum: {
      height: '195%',
      marginRight: '6%',
    },
    section_btn: {
      width: '100%',
      height: '15%',
      alignItems: 'center',
      marginTop: '19%'
    },
    box_btn: {
      width: '80%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn: {
      backgroundColor: '#FECF12',
      width: '27%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginLeft: '5%',
      marginRight: '5%'
    }
  });

export default styles;