import React from 'react'
import SplashScreen from './src/Modules/Auth/SplashScreen/SplashScreen1'
import LogoScreen from './src/Modules/Auth/SplashScreen/LogoScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen2 from './src/Modules/Auth/SplashScreen/SplashScreen2'
import SplashScreen3 from './src/Modules/Auth/SplashScreen/SplashScreen3'
import SignupScreen from './src/Modules/Auth/Signup'


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Logo">
      <Stack.Screen 
        name="Logo" 
        component={LogoScreen} 
        options={{ headerShown: false }} // Hide header for SplashScreen
      />
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{ headerShown: false }} // Hide header for SplashScreen
      />
      <Stack.Screen 
        name="Splash2" 
        component={SplashScreen2} 
        options={{ headerShown: false }} // Hide header for SplashScreen
      />
      <Stack.Screen 
        name="Splash3" 
        component={SplashScreen3} 
        options={{ headerShown: false }} // Hide header for SplashScreen
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{ headerShown: false }} // Hide header for SplashScreen
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
