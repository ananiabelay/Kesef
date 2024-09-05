import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet } from 'react-native';
import CreditCard from './cards'
const Tab = createBottomTabNavigator();

function TransferPlaceholder() {
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.placeholderText}>Transfer Screen</Text>
    </View>
  );
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'DashBoard') {
            iconName = 'view-dashboard';
          } else if (route.name === 'Cards') {
            iconName = 'cards';
          } 
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: '#222222',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Ensures no header is shown for tab screens
      })}
    >
      <Tab.Screen name="DashBoard" component={HomeScreen} />
      
      <Tab.Screen name="Cards" component={CreditCard} options={{ gestureEnabled: false }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
  },
  placeholderText: {
    fontSize: 18,
    color: '#e0e0e0', // Light text color for placeholder
  },
});
