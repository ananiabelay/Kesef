import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Signup() {
      const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Title with "Create" and "an account" on separate lines */}
      <Text style={styles.title}>
        <Text style={styles.createText}>Continue{'\n'} </Text>
        <Text style={styles.createText}>to you'r account</Text>
      </Text>

      {/* "Sign up with" text */}
      <Text style={styles.signupWithText}>Sign up with</Text>

      {/* Social Buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={() => navigation.navigate('Home')}>
          <Image
          
            source={require('../assets/google.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}  >Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/face.png')} // Replace with the actual name of your image
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
  

      {/* Register Button */}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 36,  // Adjust the line height if necessary
  },
  createText: {
    fontWeight: 'bold',  // Bolder "Create"
    fontSize: 34,  // Larger font size for emphasis
  },
  accountText: {
    fontWeight: 'normal', // Normal weight for "an account"
    fontSize: 28,
  },
  signupWithText: {
    fontSize: 18,
    color: '#b0b0b0',
    marginBottom: 20,
    textAlign: 'center',
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
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#2C2C2E',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
