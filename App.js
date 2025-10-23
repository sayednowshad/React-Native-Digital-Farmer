import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import PesticidesAwareness from './src/screens/PesticidesAwareness';
import DiseaseAwareness from './src/screens/DiseaseAwarness';
import DiseaseSelection from './src/DiseaseScreens/DiseaseSelectionTomato';
import DiseaseSelectionMango from './src/DiseaseScreens/DiseaseSelectionMango';
import DiseaseSelectionBanana from './src/DiseaseScreens/DiseaseSelectionBanana';
import DiseaseSelectionApple from './src/DiseaseScreens/DiseaseSelectionApple';
import DiseaseSelectionGuava from './src/DiseaseScreens/DiseaseSelectionGuava';
import DiseaseSelectionGrapes from './src/DiseaseScreens/DiseaseSelectionGrapes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >

      {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} /> */}

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PesticidesAwareness" component={PesticidesAwareness} />
        <Stack.Screen name="DiseaseAwareness" component={DiseaseAwareness} />
        <Stack.Screen name="DiseaseSelection" component={DiseaseSelection} />
        <Stack.Screen name="DiseaseSelectionMango" component={DiseaseSelectionMango} />
        <Stack.Screen name="DiseaseSelectionBanana" component={DiseaseSelectionBanana} />
        <Stack.Screen name="DiseaseSelectionApple" component={DiseaseSelectionApple} />
        <Stack.Screen name="DiseaseSelectionGuava" component={DiseaseSelectionGuava} />
        <Stack.Screen name="DiseaseSelectionGrapes" component={DiseaseSelectionGrapes} />

        
        
       
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
