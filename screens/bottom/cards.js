import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const CreditCard = ({ cardNumber, cardHolder, expiryDate, colors }) => {
  return (
    <LinearGradient
      colors={colors}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.card}
    >
      <View style={styles.cardHeader}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/MasterCard_Logo.png' }} 
          style={styles.cardLogo} 
        />
        <Text style={styles.cardNumber}>{cardNumber}</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.cardHolder}>{cardHolder}</Text>
        <Text style={styles.expiryDate}>Expiry: {expiryDate}</Text>
      </View>
    </LinearGradient>
  );
};

const CreditCardList = () => {
  const cards = [
    { number: '**** **** **** 1234', holder: 'John Doe', expiry: '12/25', colors: ['#0f0c29', '#302b63', '#24243e'] },
    { number: '**** **** **** 5678', holder: 'Jane Smith', expiry: '11/24', colors: ['#00c6ff', '#0072ff'] },
    { number: '**** **** **** 9101', holder: 'Robert Brown', expiry: '10/23', colors: ['#f7971e', '#ffd200'] },
    { number: '**** **** **** 1121', holder: 'Emily Davis', expiry: '09/26', colors: ['#ff512f', '#dd2476'] },
    { number: '**** **** **** 3141', holder: 'Michael Johnson', expiry: '08/24', colors: ['#7b4397', '#dc2430'] },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View style={styles.headerContainer}>
        <Text style={styles.balanceText}>Cards</Text>
      </View>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
        decelerationRate="fast"
        snapToAlignment="start"
        snapToInterval={SCREEN_WIDTH * 0.7 + 20}
        style={styles.scrollView}
      >
        {cards.map((card, index) => (
          <CreditCard 
            key={index} 
            cardNumber={card.number} 
            cardHolder={card.holder} 
            expiryDate={card.expiry} 
            colors={card.colors} 
          />
        ))}
      </ScrollView>



     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141629',
    paddingHorizontal: 10,
  },
   

  headerContainer: {
    alignItems: 'center',
    marginBottom: 10, // Space between text and ScrollView
  },
  balanceText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  cardList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:50
  },
  card: {
    width: SCREEN_WIDTH * 0.7,
    height: 180,
    borderRadius: 15,
    padding: 15,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLogo: {
    width: 50,
    height: 30,
  },
  cardNumber: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 1.5,
    flex: 1,
    textAlign: 'right',
  },
  cardFooter: {
    marginTop: 10,
  },
  cardHolder: {
    color: 'white',
    fontSize: 16,
  },
  expiryDate: {
    color: 'white',
    fontSize: 14,
  },
  scrollView: {
    flexGrow: 0, 
  },
});

export default CreditCardList;
