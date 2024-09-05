import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Icon name="account-circle" size={100} color="white" />
        <Text style={styles.profileName}>Kidus Gizaw</Text>
        <Text style={styles.profileEmail}>kidusgizaw@example.com</Text>
      </View>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.optionButton}>
        <Icon name="cash" size={24} color="white" style={styles.optionIcon} />
        <Text style={styles.optionText}>Deposit Money</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Icon name="lock" size={24} color="white" style={styles.optionIcon} />
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Icon name="account-edit" size={24} color="white" style={styles.optionIcon} />
        <Text style={styles.optionText}>Update Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Icon name="bell" size={24} color="white" style={styles.optionIcon} />
        <Text style={styles.optionText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Icon name="shield-account" size={24} color="white" style={styles.optionIcon} />
        <Text style={styles.optionText}>Privacy Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Icon name="help-circle" size={24} color="white" style={styles.optionIcon} />
        <Text style={styles.optionText}>Help & Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Icon name="logout" size={24} color="white" style={styles.optionIcon} />
        <Text style={styles.optionText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileName: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#b0b0b0',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SettingsScreen;
