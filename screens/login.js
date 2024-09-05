import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.backgroundImageContainer}>
        <Ionicons name="arrow-back-outline" size={28} color="white" style={styles.backIcon} />
        <ImageBackground 
          source={require('../assets/money.webp')} 
          style={styles.backgroundImage} 
          resizeMode="contain"
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Continue with</Text>

        {/* Social Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/google.png')} // Replace with the actual name of your image
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/face.png')} // Replace with the actual name of your image
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  backgroundImageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  loginContainer: {
    flex: 2,
    backgroundColor: '#10121b',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotText: {
    color: '#888',
    marginBottom: 30,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#2962ff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
