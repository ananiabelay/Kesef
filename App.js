import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { CardStyleInterpolators } from '@react-navigation/stack';
import GetStartedScreen from './screens/getstarted'; 
import Signup from './screens/signup';
import Main from './screens/mains';
import DepositScreen from './screens/settings'
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false,          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} >
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          
        />
        <Stack.Screen
          name="signup"
          component={Signup}

          options={{
          goBackGesture: "swipeDown",
        }}
         
        />
          <Stack.Screen
          name="Home" 
          component={Main}
          options={{
            gestureEnabled: false, 
          }}
        />

         <Stack.Screen
          name="Settings" 
          component={DepositScreen}
          options={{
            gestureEnabled: false, 
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
