import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const DetailsScreen = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          User Details
        </Text>
        <Text style={styles.textStyle}>
          Name : {route.params.userDetails.user_name}
        </Text>
        <Text style={styles.textStyle}>
          Age : {route.params.userDetails.user_age}
        </Text>
        <Text style={styles.textStyle}>
          Dob : {route.params.userDetails.user_dob}
        </Text>
        <Text style={styles.textStyle}>
          Profession : {route.params.userDetails.user_profession}
        </Text>
        <Text style={styles.textStyle}>
          Locality : {route.params.userDetails.user_locality}
        </Text>
        <Text style={styles.textStyle}>
          No of Guests : {route.params.userDetails.no_of_guests}
        </Text>
        <Text style={styles.textStyle}>
          Address : {route.params.userDetails.user_address}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
    color: '#2196f3'
  },
  textStyle: {
    textAlign: 'left',
    fontSize: 16,
    marginVertical: 10,
    color: '#2196f3'
  },
});