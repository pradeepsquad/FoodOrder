import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './src/screen/FirstScreen';
import SecondScreen from './src/screen/SecondScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
