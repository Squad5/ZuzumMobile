import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ajustes from './src/pages/Ajustes/index';
import Index from './src/pages/Index/index';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Fases from './src/pages/fases/index';

const Stack = createStackNavigator();

function App() {
  const [font] = useFonts({
    'Paytone One': require('./assets/fonts/PaytoneOne-Regular.ttf')
  })

  if (!font) {
    return <AppLoading />
  } else {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Index}/>
        <Stack.Screen name="Ajustes" component={Ajustes}/>
        <Stack.Screen name="Fases" component={Fases}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
}

export default App;