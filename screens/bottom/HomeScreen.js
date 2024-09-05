import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const getRandomBalance = () => {
  return (Math.random() * (43000 - 41000) + 41000).toFixed(2);
};

const HomeScreen = () => {
  const [balance, setBalance] = useState(getRandomBalance());
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setBalance(getRandomBalance());
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const statusBarHeight = Constants.statusBarHeight;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      
      <LinearGradient
        colors={['black', '#00c6fb']}
        start={[0.01, 0.3]}
        end={[0.001, 0.000]}
        style={styles.gradient}
      >
        <ScrollView
          contentContainerStyle={[styles.container, { paddingTop: statusBarHeight }]}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#00c6fb']}
            />
          }
        >

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>

          <View style={styles.header}>
         
               <Icon name="account-circle" size={35} color="white" />


            <View style={styles.iconContainer}>
              {/* Icon components here */}
            </View>
          </View>
        </TouchableOpacity>

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>{balance} Birr</Text>
            <Text style={styles.accountTypeText}>Total Asset</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <MaterialIcons name="keyboard-arrow-up" size={30} color="white" />
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MaterialIcons name="keyboard-arrow-down" size={30} color="white" />
              <Text style={styles.buttonText}>Receive</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MaterialIcons name="add" size={30} color="white" />
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.separator} />

          <View style={styles.transactionList}>
            <View style={styles.transactionItem}>
              <MaterialIcons name="arrow-downward" size={30} color="white" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionText}>From Google</Text>
                <Text style={styles.transactionAmount}>-1500.00 Birr</Text>
              </View>
            </View>
            <View style={styles.transactionItem}>
              <MaterialIcons name="arrow-downward" size={30} color="white" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionText}>From Amazon</Text>
                <Text style={styles.transactionAmount}>-1200.00 Birr</Text>
              </View>
            </View>
             <View style={styles.transactionItem}>
              <MaterialIcons name="arrow-downward" size={30} color="white" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionText}>From Jiji</Text>
                <Text style={styles.transactionAmount}>-1200.00 Birr</Text>
              </View>
            </View>
             <View style={styles.transactionItem}>
              <MaterialIcons name="arrow-downward" size={30} color="white" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionText}>From Ebay</Text>
                <Text style={styles.transactionAmount}>-1200.00 Birr</Text>
              </View>
            </View>
             <View style={styles.transactionItem}>
              <MaterialIcons name="arrow-downward" size={30} color="white" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionText}>From Loop</Text>
                <Text style={styles.transactionAmount}>-1200.00 Birr</Text>
              </View>
            </View>
             <View style={styles.transactionItem}>
              <MaterialIcons name="arrow-downward" size={30} color="white" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionText}>From Java</Text>
                <Text style={styles.transactionAmount}>-1200.00 Birr</Text>
              </View>
            </View>
            <View style={styles.transactionItem}>
              <MaterialIcons name="arrow-downward" size={30} color="white" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionText}>From Microsoft</Text>
                <Text style={styles.transactionAmount}>-1800.00 Birr</Text>
              </View>
            </View>
            <View style={styles.transactionItem}>
              <MaterialIcons name="arrow-downward" size={30} color="white" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionText}>From Facebook</Text>
                <Text style={styles.transactionAmount}>-2000.00 Birr</Text>
              </View>
            </View>
            <View style={styles.transactionItem}>
              <MaterialIcons name="arrow-downward" size={30} color="white" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionText}>From Apple</Text>
                <Text style={styles.transactionAmount}>-1700.00 Birr</Text>
              </View>
            </View>
            {/* Add more transaction items as needed */}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  balanceContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  accountTypeText: {
    fontSize: 18,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'grey',
    marginVertical: 20,
  },
  transactionList: {
    flexGrow: 1,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  transactionDetails: {
    marginLeft: 10,
  },
  transactionText: {
    color: 'white',
    fontSize: 16,
  },
  transactionAmount: {
    color: 'red',
    fontSize: 16,
    marginTop: 5,
  },
});

export default HomeScreen;
