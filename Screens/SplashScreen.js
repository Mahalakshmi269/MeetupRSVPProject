import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace('DrawerNavigationRoutes')
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Meetup RSVP
      </Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  titleText: {
    alignItems: 'center',
    fontSize: 30,
    fontWeight: "bold"
  }
});