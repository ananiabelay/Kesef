import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import local images
import walletImg from '../assets/money.webp'; // Update the path as needed

export default function GetStartedScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={walletImg}
          style={styles.walletImage}
        />
        <Text style={styles.title}>Kesef</Text>
        <Text style={styles.subtitle}>Easy way for all your transactions</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signup')} >
        <Text style={styles.buttonText}  
      > Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Set the background to black
    justifyContent: 'space-evenly', // Distribute elements evenly from top to bottom
    alignItems: 'center',
    paddingVertical: 20, // Optional: Add padding to avoid elements touching screen edges
  },
  content: {
    alignItems: 'center',
  },
  walletImage: {
    width: 150,  // Adjust according to your image size
    height: 150, // Adjust according to your image size
  },
  title: {
    fontSize: 36,  // Increase font size
    color: '#ffffff',
    fontWeight: '900',  // Make the font bolder
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#1a73e8',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
