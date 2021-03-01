import React, { useState } from 'react';
import { Switch, Text, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import style_index from './styles_ajustes';




function Ajustes(props) {

    const { navigation } = props
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            <ImageBackground style={{ flex: 1 }} source={require('../../../assets/img/fundo-nuvem-2.jpg')}>
                <View style={style_index.container}>
                    <View style={style_index.Btn_Voltar} />
                    <View style={style_index.Btn_Ajustes}>
                        <Text style={{
                            color: 'white',
                            fontFamily: 'Paytone One',
                            fontSize: 36,
                            textShadowColor: 'rgba(0, 0, 0, 0.75)',
                            textShadowOffset: { width: -1, height: 1 },
                            textShadowRadius: 2
                        }}>AJUSTES</Text>
                    </View>
                    <TouchableOpacity style={style_index.Btn_Sair} onPress={() => navigation.navigate('Home')}>
                        <Icon name="home" style={{ color: "white" }} size={30} />
                    </TouchableOpacity>
                </View>
                <View style={style_index.container}>
                    <View style={style_index.Ajustes}>
                        <View style={style_index.toggle}>
                            <Text style={{
                                color: 'white',
                                fontFamily: 'Paytone One',
                                marginTop: '5%',
                                fontSize: 23,
                                color: 'white',
                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                textShadowOffset: { width: -1, height: 1 },
                                textShadowRadius: 2
                            }}>MÚSICA DE FUNDO</Text>
                            <Switch
                                style={style_index.Switch}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <View style={style_index.toggle}>
                            <Text style={{
                                color: 'white',
                                fontFamily: 'Paytone One',
                                marginTop: '5%',
                                fontSize: 23,
                                color: 'white',
                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                textShadowOffset: { width: -1, height: 1 },
                                textShadowRadius: 2
                            }}>TAMANHO DA FONTE</Text>
                            <View style={style_index.conte_fonte}>
                                <Text style={{
                                    color: 'white',
                                    fontFamily: 'Paytone One',
                                    fontSize: 25,
                                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                    textShadowOffset: { width: -1, height: 1 },
                                    textShadowRadius: 2
                                }}>3</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}



export default Ajustes;